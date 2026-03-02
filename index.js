// IMPORT Express Server
const e1 = require('express');
const app = e1();

// HOME ROUTE
app.get('/', (req, res) => {
    res.send('<html><body>HOME PAGE</body></html>');
});


// test change
