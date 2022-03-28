const express = require('express');
const app = express();
const port = 8080;

app.get('/', (_: any, res: any) => {
    res.status(200).send('hello');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
