const bcrypt = require('bcryptjs'); 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); 
const User = require('./models/User'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectDB(); 

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
       // Password compare karne ke liye bcrypt ka use karein
const isMatch = await bcrypt.compare(password, user.password);

if (isMatch) {
    // Login Pass ✅
    res.status(200).json({ success: true, message: "Login Successful!" });
} else {
    // Login Fail ❌
    res.status(400).json({ success: false, message: "Wrong Password" });
}
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.json({ success: false, message: "Email pehle se registered hai!" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, hashedPassword});
        await newUser.save();

        res.json({ success: true, message: "Registration Successful!" });

    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ success: false, message: "Register fail ho gaya" });
    }
});

app.listen(PORT, () => {
    console.log(`Server chal gaya! Link: http://localhost:${PORT}`);
});