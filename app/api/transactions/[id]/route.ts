
// // app/api/transactions/[id]/route.ts
// import { NextResponse } from "next/server";
// import Transaction from "@/models/Transaction";
// import { connectDB } from "@/lib/mongo";

// export async function DELETE(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   await connectDB();
//   const { id } = params;
//   await Transaction.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Deleted successfully" });
// }

// export async function PATCH(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   await connectDB();
//   const body = await request.json();
//   const { id } = params;

//   const updated = await Transaction.findByIdAndUpdate(id, body, {
//     new: true,
//   });

//   return NextResponse.json(updated);
// }




// app/api/transactions/[id]/route.ts
import { connectDB } from '@/lib/mongo';
import Transaction from '@/models/Transaction';
import { NextRequest, NextResponse } from 'next/server';

type Params = { params: { id: string } };

export async function DELETE(request: NextRequest, context: Params) {
  await connectDB();
  await Transaction.findByIdAndDelete(context.params.id);
  return NextResponse.json({ success: true });
}

export async function PATCH(request: NextRequest, context: Params) {
  await connectDB();
  const data = await request.json();
  const updated = await Transaction.findByIdAndUpdate(context.params.id, data, { new: true });
  return NextResponse.json(updated);
}
