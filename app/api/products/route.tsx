import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const products = await prisma.product.findMany();

  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const { name, price } = await req.json();

  const product = await prisma.product.create({
    data: {
      name,
      price,
    },
  });

  return NextResponse.json(product, { status: 201 });
}
