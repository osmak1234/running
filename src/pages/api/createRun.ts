//TODO: Test this
import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../server/db";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    // code should be 6 digits, and unique
    let code = Math.floor(Math.random() * 999999);
    // make sure code is 6 digits
    if (code < 100000) {
      code = code + 100000;
    }
    let isUnique = false;
    // generates a new code until it is unique, shouldn't run more than 2 times
    while (!isUnique) {
      const run = await prisma.run.findUnique({
        where: {
          code: code.toString(),
        },
      });
      //if run is null, then the code is unique
      if (run == null) {
        isUnique = true;
      } else {
        code = Math.floor(Math.random() * 999999);
        if (code < 100000) {
          code = code + 100000;
        }
      }
    }

    const info: {
      name: string;
      creatorId: string;
      points: any;
    } = JSON.parse(req.body);
    //simple run creation, points are empty for now
    //TODO: add points logic
    const createRun = await prisma.run.create({
      data: {
        points: {},
        createdById: "clf809kl60000djgdc1yhj2wc",
        code: code.toString(),
      },
    });
    res.json(createRun);
  }
}
