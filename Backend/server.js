import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());
app.get('/unci', async (request, response) => {
    try {
        const { phonenumber } = request.body
        const data1 = await axios.post('https://chimpu.xyz/api/post.php', {
            phonenumber: request.query.phonenumber
        });
        return response.json({
            message: 'Welcome to iwcn',
            data: data1.headers
        })
    } catch (error) {
        response.status(500).send('Internal server error occurred');
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});