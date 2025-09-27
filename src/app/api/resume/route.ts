import { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(_req: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), "Shraddha Resume Jugaad Final.pdf");
    const data = await fs.readFile(filePath);

    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=resume.pdf",
        "Cache-Control": "public, max-age=3600, immutable",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(`Failed to load resume PDF: ${message}`, { status: 500 });
  }
}
