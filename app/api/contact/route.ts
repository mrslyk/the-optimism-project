export async function POST() {
  return Response.json(
    { ok: false, code: "CONTACT_NOT_CONFIGURED", message: "Contact delivery is not active yet." },
    { status: 503 },
  );
}
