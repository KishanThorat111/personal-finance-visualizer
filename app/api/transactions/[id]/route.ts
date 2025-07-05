
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
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import { connectDB } from "@/lib/mongo";
import Transaction from "@/models/Transaction";

// DELETE /api/transactions/:id
export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  await connectDB();
  const { id } = context.params;
  await Transaction.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted successfully" });
}

// PATCH /api/transactions/:id
export async function PATCH(
  request: NextRequest,
  context: { params: { id: string } }
) {
  await connectDB();
  const body = await request.json();
  const { id } = context.params;

  const updated = await Transaction.findByIdAndUpdate(id, body, {
    new: true,
  });

  return NextResponse.json(updated);
}
