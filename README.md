

# 📊 Personal Dashboard

A personal dashboard built with **React** and **Firebase**, offering customization and widgets such as a to-do list, system stats, and weather updates. Dashboard settings can be configured via a **mobile app** ([not yet developed]).

![Screenshot 2025-02-17 001809](https://github.com/user-attachments/assets/b3fd153f-0d80-419e-bd49-59bb224c1d90)

*The current CSS design is fixed for an 800 × 480 resolution, matching my Raspberry Pi 4B display.

## ✨ Features
- 🕒 **Real-time Clock** – Displays the current time and date.
- ✅ **To-Do List** – Add and manage tasks (synced with Firebase Firestore).
- ⛅ **Weather Widget** – Shows weather forecasts.
- 💻 **System Stats** – Displays CPU, RAM, and disk usage.
**WILL BE IMPROVED WITH MORE CUSTOMIZATION OPTIONS AND ADDITIONAL WIDGET CHOICES!**


## 🛠️ Tech Stack
- **Frontend**: React + Vite
- **Backend**: Firebase Firestore (Database)


## 🚀 Getting Started

### 1️⃣ Clone the repository
```sh
git clone https://github.com/thexeus/Dashboard.git
cd Dashboard
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up authentication token
Weather API:
1.  Create an account at [Malaysian MET] (https://api.met.gov.my/)
2.  Get Auth Token

Firebase
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Firestore Database** 


Create a `.env` file in the root folder and add:
```sh
VITE_MET_TOKEN=your_api_token_from_MET_API
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4️⃣ Run the development server
```sh
npm run dev
```
Now, open **http://localhost:5173/** in your browser.

## 🔧 Usage


## 🛡️ Security
Make sure to:
- **Never expose API keys** publicly.



## 📜 License
This project is open-source under the **MIT License**.

---

⭐ **Feel free to contribute or give a star on GitHub!**  


