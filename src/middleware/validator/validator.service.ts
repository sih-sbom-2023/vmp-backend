import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';
import { ValidatorSchemaType } from './validator.schema';

export function validate(schema: z.Schema, type: ValidatorSchemaType) {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req[type]);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const errorMessages = error.errors.map((issue: any) => ({
                    message: `${issue.path.join('.')} is ${issue.message}`,
                }))
                res.status(400).json({ error: 'Invalid data', details: errorMessages });
            } else {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    };
}