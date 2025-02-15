

# 📊 Personal Dashboard

A customizable personal dashboard built with **React** and **Firebase**, featuring widgets like a to-do list, system stats, and weather updates.

![Dashboard Preview](https://your-image-url.com) <!-- Replace with an actual image URL -->

## ✨ Features
- 🕒 **Real-time Clock** – Displays the current time and date.
- ✅ **To-Do List** – Add and manage tasks (synced with Firebase Firestore).
- ⛅ **Weather Widget** – Shows weather forecasts.
- 💻 **System Stats** – Displays CPU, RAM, and disk usage.


## 🛠️ Tech Stack
- **Frontend**: React + Vite
- **Backend**: Firebase Firestore (Database)


## 🚀 Getting Started

### 1️⃣ Clone the repository
```sh
git clone https://github.com/thexeus/Dashboard.git
cd personal-dashboard
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up Firebase
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Firestore Database** and **Authentication**.
3. Create a `.env` file in the root folder and add:
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

### Adding Tasks
- Click on the **To-Do List** section.
- Add new tasks, which will be stored in Firestore.

### Viewing System Stats
- Displays **CPU Usage**, **RAM Usage**, and **Disk Space**.

### Weather Widget
- Shows daily weather conditions.





## 🛡️ Security
Make sure to:
- **Never expose API keys** publicly.
- Use **Firebase Security Rules** to restrict database access.

## 🤝 Contributing
1. **Fork** the project.
2. Create a **feature branch** (`git checkout -b feature-name`).
3. **Commit changes** (`git commit -m 'Added new feature'`).
4. **Push to GitHub** (`git push origin feature-name`).
5. Open a **Pull Request**.

## 📜 License
This project is open-source under the **MIT License**.

---

⭐ **Feel free to contribute or give a star on GitHub!**  


