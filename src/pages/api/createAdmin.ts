//TODO: Test this
import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../server/db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const info = JSON.parse(req.body);

    const createAdmin = await prisma.admin.create({
      data: {
        email: info.email,
        password: info.password,
        username: info.username,
        name: info.name,
      },
    });
    res.json(createAdmin);
  }
}
