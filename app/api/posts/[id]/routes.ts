import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const headersList = await headers();
  const type = headersList.get("Content-Type");

  const cookiesList = await cookies();
  const coo1 = cookiesList.get("Cookie_1")?.value;

  // redirect("/blog");

  return NextResponse.json({ id, type, coo1 });
}
