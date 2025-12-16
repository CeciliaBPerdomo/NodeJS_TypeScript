import type { NextFunction, Request, Response } from "express";
import 'dotenv/config';
declare const validarJWT: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default validarJWT;
//# sourceMappingURL=validarJWT.d.ts.map