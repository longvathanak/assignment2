const express = require('express');
const app = express();
app.use(express.json());

// GET API
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from EC2!', status: 'success' });
});

// POST API
app.post('/api/create', (req, res) => {
    const data = req.body;
    res.json({ 
        message: 'Data created successfully!', 
        data: data,
        status: 'success' 
    });
});

// PUT API
app.put('/api/update', (req, res) => {
    const data = req.body;
    res.json({ 
        message: 'Data updated successfully!', 
        data: data,
        status: 'success' 
    });
});

// DELETE API
app.delete('/api/delete', (req, res) => {
    res.json({ 
        message: 'Data deleted successfully!', 
        status: 'success' 
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
