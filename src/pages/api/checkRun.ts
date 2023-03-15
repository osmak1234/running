import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../server/db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "PATCH") {
    const request = JSON.parse(req.body);
    const run = await prisma.run.findUnique({
      where: {
        code: request.code,
      },
    });
    if (request.code == run.code) {
      res.json({
        found: true,
        code: run.code,
        creatorId: run.creatorId,
        name: run.name,
      });
    } else {
      res.json({ login: false });
    }
  }
}
