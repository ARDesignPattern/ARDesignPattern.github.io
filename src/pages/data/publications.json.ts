import publications from "../../data/publications.json";

export const prerender = true;

export async function GET() {
  return new Response(JSON.stringify(publications, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
