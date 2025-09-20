const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Session setup
// Session middleware using cookies
app.use(session({
  secret: 'mysecretkey', // Replace with a strong secret in production
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/sessionAuth',
    collectionName: 'sessions'
  }),
  cookie: {
    httpOnly: true, // Can't be accessed by JS (helps prevent XSS)
    secure: false,  // Set to true if using HTTPS
    maxAge: 1000 * 60 * 60, // 1 hour
    sameSite: 'lax' // Helps with CSRF protection
  }
}));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/sessionAuth', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Simple Auth API!');
});

module.exports = app;
