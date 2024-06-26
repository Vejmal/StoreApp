import logger from '../utils/logger'

import { Request, Response } from 'express';
import { createUser } from '../service/user.service'
import { CreateUserInput } from '../schema/user.schema';
import { omit } from 'lodash';

export async function createUserHandler(req: Request<{}, {}, CreateUserInput['body']>, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.send(user);
  } catch (error: any) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
};