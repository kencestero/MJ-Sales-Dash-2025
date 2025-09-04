import { NextRequest, NextResponse } from "next/server";
import { CopilotRuntime, copilotHandler } from "@copilotkit/runtime";

export async function POST(req: NextRequest) {
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return new NextResponse("Missing GOOGLE_GENERATIVE_AI_API_KEY", { status: 500 });
  }
  return copilotHandler({
    runtime: new CopilotRuntime(),
    model: { provider: "google", name: "gemini-1.5-pro" }, // or gemini-1.5-flash
    request: req,
  });
}
