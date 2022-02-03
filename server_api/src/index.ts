import  * as express from 'express';
import * as cors from 'cors';
import { createConnection } from 'typeorm';

(async () => {
  await createConnection();
  // Importing routes after connection has been established
  const router = (await (await import('./routes')).default);
  const PORT = 3333;

  const app = express();

  app.use(express.json());
  app.use(cors())
  app.use(express.urlencoded({ extended: true }));

  app.use(router);

  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
})();