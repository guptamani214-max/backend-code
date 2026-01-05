# 🌍 Full Stack Currency Converter & Auth App

Welcome to my Full Stack Web Application! This project demonstrates a secure **User Authentication System** integrated with a real-time **Currency Converter Tool**.

## 🚀 Live Demo
Check out the live website here: **[https://backend-code-1-i57z.onrender.com]**



## ✨ Features

### 🔐 Security & Authentication
* **User Registration:** Secure sign-up process with email validation.
* **Secure Login:** Login system using **BCrypt** for password encryption (Hashing).
* **Authentication Guard:** Protects the Dashboard; users cannot access it without logging in.
* **Data Privacy:** User passwords are stored as encrypted hashes (`$2b$10...`) in MongoDB, ensuring maximum security.

### 💱 Real-Time Currency Converter
* **Live Rates:** Fetches real-time exchange rates using an external API.
* **Dynamic Conversion:** Convert amounts between multiple global currencies (USD, INR, EUR, etc.) instantly.
* **User-Specific:** This feature is accessible only to logged-in users on their personal dashboard.

---

## 🛠️ Tech Stack Used

* **Frontend:** HTML5, CSS3, Vanilla JavaScript (Fetch API)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas (Cloud Database)
* **Security:** Bcrypt.js (for Password Hashing)
* **Deployment:** Render (Cloud Hosting)

---

## 📂 Project Structure

---

## ⚡ How to Run Locally

If you want to run this project on your own computer, follow these steps:

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/manish_gupta/FullStackProject.git](https://github.com/manish_gupta/FullStackProject.git)
    ```

2.  **Install Dependencies**
    ```bash
    cd BackEnd
    npm install
    ```

3.  **Start the Server**
    ```bash
    node server.js
    ```
    The server will start on `http://localhost:5000`.

---

## 👨‍💻 Author
**Manish Gupta**
* Full Stack Developer in the making! 🚀
* Connect with me on LinkedIn: [https://www.linkedin.com/in/manish-gupta-a0829csb]

---