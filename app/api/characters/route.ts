import { NextResponse } from 'next/server';
import { Hunters } from '@/data/characters';

export const dynamic = 'force-static';

export async function GET() {
  return NextResponse.json(Hunters);
}
