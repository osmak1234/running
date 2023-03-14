/* eslint-disable @typescript-eslint/no-unsafe-assignment */

//TODO: Test this
import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../server/db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const info: {
      creatorId: string;
      points: any;
      distance: number;
    } = JSON.parse(req.body);
    const createRun = await prisma.run.create({
      data: {
        points: {
          name: "I suck horse balls",
        },
        creatorId: info.creatorId,
        points: info.points,
        distance: info.distance,
      },
    });
    res.json(createRun);
  }
}
