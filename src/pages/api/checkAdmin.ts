import { type NextApiResponse } from "next";
import { prisma } from "../../server/db";
interface User {
  username: string
  password: string
}

export default async function handler(
  req: {
    method: string;
    body: string;
  },
  res: NextApiResponse
) {
  if (req.method == "PATCH") {
    const request: User = JSON.parse(req.body);
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
        adminId: admin.id,
      });
    } else {
      res.json({ login: false });
    }
  }
}
