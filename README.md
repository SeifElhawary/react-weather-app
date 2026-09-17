# 🌤️ React Weather Application

A clean, modern, and fully responsive Weather Web Application built with **React.js**. The application allows users to search for real-time weather conditions for any city worldwide using the **OpenWeatherMap API**.

---

## 🌟 Features

- **Real-Time Weather Data:** Fetches live temperature, weather condition, and daily high/low temperatures.
- **Custom Hook Data Fetching:** Built with a custom `UseFetch` hook for efficient asynchronous API call management.
- **Global State Management:** Utilizes React's `Context API` (`LoadingContext`) to handle application loading states seamlessly across components.
- **Dynamic Weather Condition Visuals:** Automatically renders visual indicators and conditions (Clear, Clouds, Rain, Snow) based on dynamic API responses.
- **Responsive UI:** Fully responsive design crafted with custom CSS and Material-UI Icons.
- **Secure Configuration:** Environment variables (`.env`) used to keep API keys secure.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, HTML5, Custom CSS
- **State Management:** React Context API
- **Icons:** Material-UI Icons (`@mui/icons-material`)
- **API:** OpenWeatherMap API
- **Build Tool:** Vite / Create React App

---

## 🚀 Getting Started

To run a local copy of this project, follow these steps:

### Prerequisites

Make sure you have Node.js installed on your machine. You will also need an API Key from [OpenWeatherMap](https://openweathermap.org/api).

### Installation

1. **Clone the repository:**
   ```bash
git clone https://github.com/Seifelhawary/react-weather-app.git
