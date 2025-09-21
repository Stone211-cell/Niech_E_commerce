// app/api/post/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  return NextResponse.json({ id });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  return NextResponse.json(data);
}
