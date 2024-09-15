const express = require('express');
const cors=require('cors');
const connectDB = require('./mongoose/dbconnect');
const signupRoute = require('./Apis/Signup');
const signinRoute = require('./Apis/Signin');
const path = require('path');

const app = express();
connectDB();
app.use(cors());

app.use(express.json());
app.use('/api/signup', signupRoute);
app.use('/api/signin', signinRoute);

/*app.get('/', async (req, res) => {
    try {
      res.json('h');
    } catch (error) {
      res.status(500).json({ message: 'Error fetching crypto data' });
    }
  });*/

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});