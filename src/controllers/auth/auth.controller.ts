import { ValidatorSchemaType, validate } from "./../../middleware/validator";
import { asyncHandler } from "./../../utils/helper";
import { Router, Request, Response, NextFunction } from "express";
import { SignUpSchema } from "./dto/sign-up.dto";

const router = Router();

router.post(
  "/sign-in",
  asyncHandler(async (req: Request, res: Response) => {
    
  })
);

router.post(
  "/sign-up",
  validate(SignUpSchema, ValidatorSchemaType.BODY),
  asyncHandler(async (req: Request, res: Response) => {
    res.send("valid")
  })
);

export default router;
