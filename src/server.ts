import express, { Application, Request, Response } from 'express';
const app: Application = express();
const port: number = 8080;

app.get('/', (_, res: Response) => {
    res.status(200).send('hello world!');
});

app.get('/user/:name', (req: Request, res: Response) => {
    const params = req.params;
    res.send(params.name);
});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
