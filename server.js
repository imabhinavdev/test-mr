import express from 'express';
import cors from 'cors';

app.use(cors(
    {origin: 'test.imabhinav.dev'}
));
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('http://localhost:3000');
});