import { NextApiRequest, NextApiResponse} from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body.name)
    return res.status(200).end()
}
