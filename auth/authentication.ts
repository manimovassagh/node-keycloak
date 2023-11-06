import { NextFunction, Request, Response } from "express"
import jwtmod from "jsonwebtoken"


export const authMiddleware = (req: Request | any, res: Response, next: NextFunction) => {
    const PUBLICKEY = ""
    const bearerHeader = req.headers["authorization"];
    const token = bearerHeader && bearerHeader.split(" ")[1];
    if (token === null) return res.sendStatus(401);
    const public_key = `-----BEGIN PUBLIC KEY-----\n${PUBLICKEY}\n-----END PUBLIC KEY-----`;

    const decodedToken = jwtmod.verify(token as string, public_key, {
        algorithms: ["RS256"],
    });

   
    const { email  } = decodedToken as any;
    req.user  = email ;
    next();

}