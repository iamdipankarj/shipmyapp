import { NextResponse } from "next/server";
import { getFormattedError } from "@/lib/errorHandler";
import prisma from "@/lib/db";

export async function GET(_: Request, { params }: { params: { email: string } }) {
  try {
    const data = await prisma.user.findUnique({
      where: {
        email: params.email
      }
    });
    return NextResponse.json({ data, revalidated: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ revalidated: false, message: getFormattedError(e) }, { status: 400 });
  }
}