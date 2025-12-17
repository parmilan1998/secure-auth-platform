import { Request, Response } from "express";

export const healthCheckHandler = async (req: Request, res: Response) => {
  const authRequest = req as any;
  const authUser = authRequest.user;
  return res.json({ user: authUser });
};
