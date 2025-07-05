// // app/api/transactions/route.ts
// import { connectDB } from '@/lib/mongo';
// import Transaction from '@/models/Transaction';
// import { NextResponse } from 'next/server';

// export async function GET() {
//   await connectDB();
//   const transactions = await Transaction.find().sort({ date: -1 });
//   return NextResponse.json(transactions);
// }

// export async function POST(req: Request) {
//   await connectDB();
//   const data = await req.json();
//   const created = await Transaction.create(data);
//   return NextResponse.json(created, { status: 201 });
// }

// app/api/transactions/route.ts
import { connectDB } from '@/lib/mongo';
import Transaction from '@/models/Transaction';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    await connectDB();

    const data = await req.json();
    console.log('Received POST data:', data);

    const created = await Transaction.create(data);
    console.log('Created transaction:', created);

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error('POST /api/transactions error:', error);
    return NextResponse.json(
      { error: 'Something went wrong in POST /api/transactions' },
      { status: 500 }
    );
  }
}
