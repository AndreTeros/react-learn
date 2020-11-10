const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());

app.get('/list', (req, res) => {
    const list = [
        {id: 1, name: "aaa", note: "123"},
        {id: 2, name: "bbb", note: "456"},
        {id: 3, name: "ccc", note: "789"},
        {id: 4, name: "ddd", note: "000"},
    ];


    setTimeout(() => {
        res.send(list);
    }, 2000)
});

app.listen(3000, () => {
    console.log('Server start');
});
