import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(req: NextRequest) {
  const user = await prisma.user.findMany();

  return NextResponse.json(user);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validate = schema.safeParse(body);
  if (!validate.success)
    return NextResponse.json(validate.error.errors, { status: 400 });

  const alreadyUser = await prisma.user.findUnique({
    where: { email: body.email },
  });
  if (alreadyUser)
    return NextResponse.json({ msg: "Email already exists" }, { status: 400 });

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(user, { status: 201 });
}
