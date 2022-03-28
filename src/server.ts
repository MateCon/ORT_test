import express, { Application, Response } from 'express';
const app: Application = express();
const port: number = 8080;

app.get('/', (_, res: Response) => {
    res.status(200).send('hello world!');
});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
