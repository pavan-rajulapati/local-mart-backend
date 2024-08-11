const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 4040;
const url = process.env.MONGO_URI;


// Middleware
app.use(bodyParser.json());
app.use(cors());


// Database Connection
const databaseConnection = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to DB');
    } catch (error) {
        console.log('Database connection error', error);
    }
};

databaseConnection();

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Component routes
app.use('/api', require('./routes/userRoutes'));
app.use('/api', require('./routes/loginRoutes'));
app.use('/api', require('./routes/tokenRoutes'));
app.use('/api', require('./routes/personalDetailsRoutes'));
app.use('/api', require('./routes/userAddressRoutes'));
app.use('/api', require('./routes/sellerRoutes'));
app.use('/api', require('./routes/productRoutes'));
app.use('/api', require('./routes/cartRoutes'));
app.use('/api', require('./routes/orderRoutes'));
app.use('/api',require('./routes/wishlistRoutes'))
app.use('/api',require('./routes/paymentRoutes'))

// Fetching routes 
app.use('/api', require('./fetchRoutes/getProducts'));
app.use('/api', require('./fetchRoutes/getProductsByIdRoutes'));
app.use('/api',require('./fetchRoutes/searchRoutes'))
app.use('/api',require('./fetchRoutes/getCartRoutes'))
app.use('/api',require('./fetchRoutes/removeCartRoutes'))
app.use('/api',require('./fetchRoutes/getUserDataRoutes'))
app.use('/api',require('./fetchRoutes/getUserAddressRoutes'))
app.use('/api',require('./fetchRoutes/getSellerRoutes'))
app.use('/api',require('./fetchRoutes/orderDataRoutes'))
app.use('/api',require('./fetchRoutes/getSellerProductsRoutes'))
app.use('/api',require('./fetchRoutes/sellerOrderRoutes'))
app.use('/api',require('./fetchRoutes/getWishlistRoutes'))

//update and delete routes 

app.use('/api',require('./DeleteAndUpdateRoutes/deleteProductRoutes'))
app.use('/api',require('./DeleteAndUpdateRoutes/cancelSellerOrderRoutes'))
app.use('/api',require('./DeleteAndUpdateRoutes/removeWishlistRoutes'))
app.use('/api',require('./DeleteAndUpdateRoutes/updateSellerProductRoutes'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
