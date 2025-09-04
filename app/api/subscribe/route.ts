import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();
  console.log('Received email', email);
  return NextResponse.json({ ok: true });
}
