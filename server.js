const express = require('express');
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.json());



const cors = require('cors');
app.use(cors());

let groceryItems = [];

app.post('/addItem', (req, res) => {
    const item = req.body;
    groceryItems.push(item);
    res.status(201).send('Item added successfully');
});

app.get('/getItems', (req, res) => {
    res.status(200).json(groceryItems);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
