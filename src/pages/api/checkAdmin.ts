import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../server/db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const admin = await prisma.admin.findMany({});
    res.json(admin);
  }
}
