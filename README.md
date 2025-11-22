# 🌌 EmoBot: Your Emotion Guardian (Demo Day Assessment Submission)

[![Status](https://img.shields.io/badge/Status-Deployed-brightgreen)](https://emood-starmap1.netlify.app)
[![Technology](https://img.shields.io/badge/AI_Powered-Google_Gemini-blue)](https://ai.google.com/gemini/)

## 🚀 Project Overview

**EmoBot (Emood)** is an AI-powered emotion tracking and visualization PWA (Progressive Web App). It is designed to help users quickly capture immediate emotions and achieve self-awareness through data analysis, overcoming the tediousness of traditional emotion journaling.

This project is a core component of the [Course Name] Demo Day (Task 3) assessment, demonstrating the ability to solve real user problems using modern web technologies and Generative AI.

### Value Proposition

* **Immediacy:** Users can record emotions instantly via **voice input**, eliminating manual typing.
* **Deep Insight:** Utilizes the **Google Gemini API** for text sentiment analysis, identifying emotion type, intensity, and keywords.
* **Visualization:** Transforms emotional data into an intuitive **Emotion Star Map**, helping users gain an immediate overview of their emotional distribution.

---

## ✨ Core Features (Key Features)

To meet the assessment requirements, this application features the following four core functionalities:

1.  **🎙️ Instant Voice Recording:** Transcribes the user's voice diary in real-time using the Web Speech API.
2.  **🧠 AI Emotion Analysis:** Calls the Netlify Function integrated Gemini model to analyze the transcribed text, outputting emotion type, intensity score, and summary.
3.  **🌌 Emotion Star Map:** Maps daily emotion records onto a Canvas-drawn star map, providing a unique and interactive data visualization.
4.  **📈 In-Depth Analytics Dashboard:** Displays emotional trends, high-frequency emotion types, and timeline analysis, assisting users with data-driven self-reflection.

---

## 🛠️ Technology Stack (Tech Stack)

* **Frontend:** HTML5, CSS3, Vanilla JavaScript (PWA Ready)
* **AI Backend:** Netlify Functions (Serverless), Google Gemini API
* **Data Storage:** LocalStorage (Privacy-first design)
* **Visualization:** Canvas API
* **Deployment:** Netlify Continuous Deployment

### Local Run Guide

To run this project locally, please follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/man63u/emood-starmap.git](https://github.com/man63u/emood-starmap.git)
    cd emood-starmap
    ```
2.  **Install Netlify CLI (Optional, Recommended):**
    ```bash
    npm install -g netlify-cli
    ```
3.  **Configure AI Key (Crucial):**
    Since the application relies on Netlify Functions to call the Gemini API, you must create a `.env` file in the project root or set the environment variable in the Netlify dashboard.

    > **Variable Name:** `GEMINI_API_KEY`
    > **Value:** Your Google Gemini API Key

4.  **Start Local Server:**
    Use any local server to launch (e.g., Live Server), or use the Netlify CLI:
    ```bash
    netlify dev
    ```

---

## 🔗 Access and Assessment

### 🌍 Live Demo

Please visit the link below to test the application's functionality:

[**👉 Emood Live App Link**](https://emood-starmap1.netlify.app)

### 📄 Assessment Files

The App Access Documentation (PDF) includes detailed login credentials, a list of features to test, and the APK access link.

---

## 🧑‍💻 Contribution

Suggestions and improvements to EmoBot are welcome! Please submit your ideas via Issues or Pull Requests.