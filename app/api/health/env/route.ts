import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({
    hasGemini: !!process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    hasAuth:
      !!process.env.AUTH_GOOGLE_ID &&
      !!process.env.AUTH_GOOGLE_SECRET &&
      !!process.env.AUTH_SECRET,
  });
}
