import express, { Express, Request, Response } from 'express';
import config from './config';
import router from './router';
import cors from 'cors';

const server: Express = express();
const port = config.port;

server.get('/', (req: Request, res: Response) => {
	res.send('siema');
});

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

server.use('/api', router);

server.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`));
