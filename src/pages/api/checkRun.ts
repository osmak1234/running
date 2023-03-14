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
    if (admin.password == request.password) {
      res.json({
        exists: true,
        code: admin.code,
        creatorId: admin.creatorId,
      });
    } else {
      res.json({ login: false });
    }
  }
}
