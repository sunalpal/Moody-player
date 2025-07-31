# 🎵 MoodyPlayer

**MoodyPlayer** is a full-stack facial expression–based music recommendation web app. It uses real-time webcam input to detect the user's facial expressions and recommends songs that match their current mood.

---

## 🚀 Features

- 🎥 Real-time facial expression detection using `face-api.js`
- 🎶 Mood-based song recommendation
- 🔄 Upload and manage songs via backend
- ☁️ Audio files stored using ImageKit CDN
- 💾 MongoDB for storing song metadata
- 🌐 Full-stack app using MERN (MongoDB, Express.js, React.js, Node.js)

---

## 📸 How it works

1. User opens the app and allows webcam access.
2. Face expressions are analyzed using pre-trained models.
3. The most probable mood is detected (e.g., happy, sad, angry).
4. Based on detected mood, relevant songs are fetched from the database.
5. User can play/pause songs from the recommendations list.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- face-api.js
- CSS3
- Remix Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer (for file upload)
- ImageKit (for hosting audio files)

---

## 📁 Folder Structure
MoodyPlayer/
│
├── public/
│ └── models/ # face-api.js models
├── src/
│ ├── components/
│ │ ├── FacialExpression.jsx
│ │ └── MoodSongs.jsx
│ ├── App.jsx
│ └── main.jsx
│
├── backend/
│ ├── routes/
│ │ └── songs.routes.js
│ ├── models/
│ │ └── songs.models.js
│ ├── service/
│ │ └── storage.service.js
│ └── db.js
│
├── .env
├── package.json
└── README.md

bash
git clone https://github.com/<your-username>/MoodyPlayer.git
cd MoodyPlayer

 Install Frontend Dependencies
 cd frontend
 npm install

 Install Backend Dependencies
 cd backend
 npm install
 
Setup .env file
DB_CONNECTION=your_mongodb_connection_string
IMAGEKIT_PUBLICKEY=your_imagekit_public_key
IMAGEKIT_PRIVATEKEY=your_imagekit_private_key
IMAGEKIT_URLENDPOINT=https://ik.imagekit.io/your_id
Now Run the App
Backend:
cd backend
node index.js
Frontend:
cd frontend
npm run dev
