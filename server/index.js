const express = require('express');
const app = express();
const dotenv = require('dotenv');
// dotenv.config(); //? it shows error : Error: listen EACCES: permission denied 5000;
const port = process.env.PORT || 3000;
const productRoute = require('./routes/productRoute');
const cartsRoute = require('./routes/cartsRoute');
const usersRoute = require('./routes/usersRoute');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home page',
        name: 'LatiForti'
})})

app.use('/api/v1/products', productRoute);
app.use('/api/v1/carts', cartsRoute);
app.use('/api/v1/users', usersRoute);
 
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
