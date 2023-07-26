import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const secParam = searchParams.get('sec');
  const sec = !!secParam ? parseInt(secParam) : 0;
  if (isNaN(sec)) {
    return NextResponse.json(
      {
        message: 'Query param "sec" must be a number.',
      },
      {
        status: 400,
      }
    );
  }

  const randParam = searchParams.get('rand');
  const rand = !!randParam ? parseInt(randParam) : 0;
  if (isNaN(rand)) {
    return NextResponse.json(
      {
        message: 'Query param "rand" must be a number.',
      },
      {
        status: 400,
      }
    );
  }

  await new Promise((resolve) => setTimeout(resolve, sec * 1_000));

  return NextResponse.json({ rand });
}
