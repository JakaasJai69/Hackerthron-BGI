# Swarn Sanskriti

## Project Overview

Swarn Sanskriti is a mobile application aimed at digitally preserving and promoting India's rich cultural heritage using advanced AI technologies including Natural Language Processing (NLP) and Computer Vision (CV).

### Key Features

- **Digital Museum:** Visualize ancient artifacts with detailed descriptions.
- **AI Heritage Chatbot:** An intelligent cultural guide powered by NLP.
- **Gamified Learning:** Interactive quizzes and challenges to engage users.
- **Language Learning Modules:** Learn Sanskrit and tribal dialects.
- **Cultural Map of India:** Explore cultural sites and heritage geographically.

### Technology Stack

- **Frontend:** React Native for cross-platform mobile app development.
- **Backend:** Node.js with Express framework.
- **Database:** MongoDB with Mongoose ODM.
- **AI Tools:** spaCy, BERT for NLP; OpenCV, TensorFlow for Computer Vision.
- **APIs:** Google Translate, Speech-to-Text APIs.

## Project Structure

```
/frontend
   ├── App.js
   ├── MuseumScreen.js
   ├── ChatbotScreen.js
   ├── GamifiedLearningScreen.js
   ├── LanguageLearningScreen.js
   └── CulturalMapScreen.js

/backend
   ├── server.js
   ├── models/
   │    ├── Artifact.js
   │    ├── LanguageModule.js
   │    └── User.js
   └── routes/
        ├── artifacts.js
        ├── chatbot.js
        ├── languageModules.js
        └── users.js

/ai_models
   ├── nlp_model_description.txt
   └── cv_model_description.txt

/docs
   └── README.md
```

## Setup Instructions

1. **Backend:**
   - Install dependencies: `npm install`
   - Set environment variable `MONGO_URI` for MongoDB connection.
   - Start server: `node backend/server.js`

2. **Frontend:**
   - Navigate to `/frontend`
   - Install dependencies: `npm install`
   - Run app on emulator or device: `npx react-native run-android` or `npx react-native run-ios`

## Notes

- AI models are described in `/ai_models` folder with architecture and usage guidelines.
- Backend APIs are modular and scalable, using async/await and middleware.
- Frontend uses React Navigation for smooth user experience.
- Dummy data is used where real datasets are unavailable.

## Future Enhancements

- Integrate real AI models for chatbot and artifact recognition.
- Add user authentication and profile management.
- Expand language modules with audio and interactive lessons.
- Implement real-time cultural map with GPS integration.

---
