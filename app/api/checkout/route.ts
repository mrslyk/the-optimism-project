export async function POST() {
  return Response.json(
    { ok: false, code: "CHECKOUT_NOT_CONFIGURED", message: "Membership and donation checkout are not active yet." },
    { status: 503 },
  );
}
