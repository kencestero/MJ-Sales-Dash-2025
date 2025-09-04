// app/api/people/route.ts
import { outsetaFetch } from "@/lib/outseta";

export async function GET() {
  try {
    const data = await outsetaFetch("/crm/people?limit=5");
    return Response.json(data);
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
