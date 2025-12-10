import type { NextFunction, Request, Response } from "express";
import { Result, validationResult, type ValidationError } from "express-validator";

export const recolectarErrores = (req: Request, res: Response, next: NextFunction): void => {
    const errors: Result<ValidationError> = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(400).json(errors)
    } else {
        next()
    }
}