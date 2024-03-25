import { NextResponse } from "next/server";
import { getFormattedError } from "@/lib/errorHandler";
import prisma from "@/lib/db";

export const maxDuration = 300;

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const { name, email } = payload;

    await prisma.user.update({
      where: {
        email
      },
      data: {
        name
      }
    });
    return NextResponse.json({ revalidated: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ revalidated: false, message: getFormattedError(e) }, { status: 400 });
  }
}
