import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../server/db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "PATCH") {
    const request = JSON.parse(req.body);
    const admin = await prisma.admin.findUnique({
      where: {
        username: request.username,
      },
    });
    if (admin.password == request.password) {
      res.json({
        login: true,
        username: admin.username,
        name: admin.name,
      });
    } else {
      res.json({ login: false });
    }
  }
}
