import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the finished publication homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>The Optimism Project<\/title>/i);
  assert.match(html, /The science/);
  assert.match(html, /of <em>optimism/);
  assert.doesNotMatch(html, /Ozempic/);
  assert.match(html, /Get to know optimism/i);
  assert.match(html, /href="\/benefits"/);
  assert.match(html, /href="\/causes-of-optimism"/);
  assert.match(html, /href="\/science-evidence"/);
  assert.match(html, /href="\/blog"/);
  assert.match(html, /href="\/donate"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("connects the evidence library, protocol, and contribution routes", async () => {
  for (const [path, patterns] of [
    ["/protocol", [/Development draft 0.2/, /Candidate ingredients/, /Version history/, /href="\/protocol\/draft.txt"/]],
    ["/science-evidence", [/Search the evidence/, /My reading list/, /Read the original source/]],
    ["/practice-workbook", [/Save on this device/, /Download reflection/, /Nothing you write here is sent/]],
    ["/contact", [/action="\/__forms.html"/, /optimism-contact/, /optimism-updates/]],
    ["/blog", [/The different meanings of optimism/, /From a better possibility to a useful next step/, /developing the Optimism Protocol/]],
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    for (const pattern of patterns) assert.match(html, pattern, path);
  }
});

test("provides matching Netlify collection definitions and a published protocol download", async () => {
  const forms = await readFile(new URL("../public/__forms.html", import.meta.url), "utf8");
  assert.match(forms, /name="optimism-contact"/);
  assert.match(forms, /name="optimism-updates"/);
  assert.match(forms, /data-netlify="true"/);
  const response = await render("/protocol/draft.txt");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /text\/plain/);
  const draft = await response.text();
  assert.match(draft, /Development draft 0.2/);
  assert.match(draft, /unresolved|decisions/i);
});

test("connects pessimism research and books to an attributed game curriculum", async () => {
  for (const [path, patterns] of [
    ["/pessimism", [/Defensive pessimism/i, /science-evidence#scheier-2021/, /mind-memome/]],
    ["/reading-room", [/The Rational Optimist/, /How Innovation Works/, /Our World in Data/, /rational-optimist/]],
    ["/rational-optimist", [/Matt Ridley/, /specialization/, /mind-memome/]],
    ["/mind-memome", [/Slyk play-to-earn/, /Naval and Decalog/, /proof of understanding/, /curriculum.json/]],
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    for (const pattern of patterns) assert.match(html, pattern, path);
  }
  const response = await render("/mind-memome/curriculum.json");
  assert.equal(response.status, 200);
  const curriculum = await response.json();
  assert.equal(curriculum.levels.length, 13);
  assert.equal(new Set(curriculum.levels.map(level => level.id)).size, 13);
  for (const level of curriculum.levels) {
    assert.ok(level.sources.length && level.challenge && level.proof, level.id);
  }
  assert.equal(curriculum.version, "0.2");
  assert.match(curriculum.cadooConnection.status, /not active/);
  assert.ok(curriculum.levels.every(level => level.meme));
  const bodyResponse = await render("/mind-and-body");
  assert.equal(bodyResponse.status, 200);
  const bodyHtml = await bodyResponse.text();
  assert.match(bodyHtml, /Cadoo/);
  assert.match(bodyHtml, /No Cadoo activity currently earns an Optimism reward/);
  // Every cited internal anchor must actually exist in the rendered destination.
  const pages = new Map();
  for (const source of curriculum.levels.flatMap(level => level.sources)) {
    if (!source.href.startsWith("/")) continue;
    const [path, id] = source.href.split("#");
    if (!pages.has(path)) {
      const target = await render(path);
      assert.equal(target.status, 200, source.href);
      pages.set(path, await target.text());
    }
    if (id) assert.ok(pages.get(path).includes(`id="${id}"`), source.href);
  }
});
