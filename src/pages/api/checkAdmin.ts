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
  // PATCH is used because it allows us to send a body, with request and responce
  if (req.method == "PATCH") {
    const request: User = JSON.parse(req.body);
    const admin = await prisma.admin.findUnique({
      where: {
        username: request.username,
      },
    });
    // if it found a user with that username
    // this code will than check if the password is correct
    // if it is, it will return the username, name, id, and boolean login
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
