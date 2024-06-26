import validateResource from '../mmiddleware/validateResource';

import { Express, Request, Response } from 'express';
import { createUserHandler } from '../controller/user.controller';
import { createUserSchema } from '../schema/user.schema';


function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post('/api/users', validateResource(createUserSchema), createUserHandler);
};

export default routes;