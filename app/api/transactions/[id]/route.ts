
// app/api/transactions/[id]/route.ts
import { NextResponse } from "next/server";
import Transaction from "@/models/Transaction";
import { connectDB } from "@/lib/mongo";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const { id } = params;
  await Transaction.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted successfully" });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const body = await request.json();
  const { id } = params;

  const updated = await Transaction.findByIdAndUpdate(id, body, {
    new: true,
  });

  return NextResponse.json(updated);
}
