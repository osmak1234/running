//TODO: Test this
import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../server/db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const info: {
      email: string;
      password: string;
      username: string;
      name: string;
    } = JSON.parse(req.body);

    console.log(info);
    const createAdmin = await prisma.admin.create({
      data: {
        email: info.email,
        password: info.password,
        username: info.username,
        name: info.name,
      },
    });
    console.log(createAdmin);
    res.json(createAdmin);
  }
}
