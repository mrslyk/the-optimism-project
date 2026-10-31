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
  assert.match(html, /An Ozempic/);
  assert.match(html, /Our research ambition/i);
  assert.match(html, /href="\/science-evidence"/);
  assert.match(html, /href="\/blog"/);
  assert.match(html, /href="\/donate"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("ships research, blog, donation, and safety infrastructure", async () => {
  const [research, program, blog, donate, sources, env] = await Promise.all([
    readFile(new URL("../app/science-evidence/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/research-program/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/blog/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/donate/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/research.ts", import.meta.url), "utf8"),
    readFile(new URL("../.env.example", import.meta.url), "utf8"),
  ]);
  assert.match(research, /Why do we expect things/);
  assert.match(program, /Where we are today/);
  assert.match(program, /no treatment in development or clinical trial underway/i);
  assert.match(blog, /first dispatch is still to come/);
  assert.match(donate, /Donations are not open yet/);
  assert.match(sources, /pubmed\.ncbi\.nlm\.nih\.gov|nature\.com/);
  assert.match(sources, /What it does not prove|caution/i);
  assert.match(env, /NEXT_PUBLIC_DONATE_100_URL=/);
});
