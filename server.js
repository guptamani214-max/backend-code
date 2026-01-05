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
        
        // 1. Check karein password aaya bhi hai ya nahi
        if (!password) {
            return res.status(400).json({ success: false, message: "Password zaroori hai!" });
        }

        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(400).json({ success: false, message: "Email pehle se registered hai!" });
        }

        // 2. Password ko encrypt karein
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password Ban Gaya:", hashedPassword); // Debugging ke liye

        // 3. Naya user save karein
        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword // ✅ Yahan dhyan dein
        });

        await newUser.save();
        
        res.status(200).json({ success: true, message: "Registration Successful!" });

    } catch (error) {
        console.log("Error aaya:", error);
        res.status(500).json({ success: false, message: "Register fail ho gaya" });
    }
});

app.listen(PORT, () => {
    console.log(`Server chal gaya! Link: http://localhost:${PORT}`);
});