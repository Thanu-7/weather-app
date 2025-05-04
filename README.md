# weather-app
A visually clean and responsive Weather Dashboard built using only HTML, CSS, and JavaScript — no live API integration. This static frontend project simulates the look and feel of a real weather app with smooth animations and modern UI components.

## 🔧 Features

🔍 City Name Search Bar (non-functional placeholder for UI demonstration)

### 🌡️ Weather Information section with:

Placeholder temperature

Current weather condition

Matching animated weather icon

📅 Current Date and Time display (auto-updated via JS)

📆 3–5 Day Forecast section with sample data

🌗 Dark/Light Mode toggle for improved accessibility and UX

📱 Fully Responsive Design for mobile,desktop

## 🧪 Tech Stack

HTML5 – Semantic structure

CSS3 – Responsive layout, custom animations, and transitions

JavaScript – Dynamic date/time rendering and UI interactivity

## index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Static Weather Dashboard</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- Blurred background image -->
  <div class="background-image"></div>

  <div class="container">
    <header>
      <h1>Weather Dashboard</h1>
      <button id="mode-toggle" aria-label="Toggle Dark/Light Mode">🌙</button>
    </header>

    <section class="search-section">
      <input type="text" placeholder="Enter city name..." aria-label="City Name" />
      <button>Search</button>
    </section>

    <section class="current-weather">
      <div class="date-time" id="date-time">Loading date & time...</div>
      <h2 class="city-name">New York</h2>
      <div class="weather-main">
        <div class="weather-icon sunny" aria-label="Sunny weather icon"></div>
        <div class="temperature">22°C</div>
      </div>
      <div class="condition">Sunny</div>
    </section>

    <section class="forecast">
      <h3>5-Day Forecast</h3>
      <div class="forecast-cards">
        <div class="forecast-card">
          <div class="day">Mon</div>
          <div class="weather-icon rainy" aria-label="Rainy weather icon"></div>
          <div class="description">Rainy</div>
          <div class="temp">18°C</div>
        </div>
        <div class="forecast-card">
          <div class="day">Tue</div>
          <div class="weather-icon cloudy" aria-label="Cloudy weather icon"></div>
          <div class="description">Cloudy</div>
          <div class="temp">20°C</div>
        </div>
        <div class="forecast-card">
          <div class="day">Wed</div>
          <div class="weather-icon snowy" aria-label="Snowy weather icon"></div>
          <div class="description">Snowy</div>
          <div class="temp">0°C</div>
        </div>
        <div class="forecast-card">
          <div class="day">Thu</div>
          <div class="weather-icon thunder" aria-label="Thunder weather icon"></div>
          <div class="description">Thunder</div>
          <div class="temp">16°C</div>
        </div>
        <div class="forecast-card">
          <div class="day">Fri</div>
          <div class="weather-icon sunny" aria-label="Sunny weather icon"></div>
          <div class="description">Sunny</div>
          <div class="temp">23°C</div>
        </div>
      </div>
    </section>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
## style.css
```
/* Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  position: relative;
  margin: 0;
  padding: 20px;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}

/* Background image with blur */
.background-image {
  position: fixed;
  inset: 0;
  background-image: url('bg.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(12px);
  z-index: 0;
}

.background-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  pointer-events: none;
}

/* Light mode variables */
:root {
  --bg-color: rgba(255, 255, 255, 0.25); 
  --card-bg: rgba(183, 234, 214, 0.6); 
  --text-color: #1e293b;
  --accent-color: #0284c7;
  --button-bg: #0284c7;
  --button-text: #ffffff;
  --input-bg: rgba(241, 245, 249, 0.9);
  --input-border: #94a3b8;
}

/* Dark mode variables */
body.dark {
  --bg-color: rgba(30, 41, 59, 0.85);
  --card-bg: rgba(30, 41, 59, 0.85);
  --text-color: #e0e7ff;
  --accent-color: #3b82f6;
  --button-bg: #3b82f6;
  --button-text: #e0e7ff;
  --input-bg: rgba(51, 65, 85, 0.9);
  --input-border: #64748b;
}

/* Container */
.container {
  background-color: var(--card-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 25px 30px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 1;
}

/* Header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent-color);
}

#mode-toggle {
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--accent-color);
  transition: transform 0.3s ease;
}

#mode-toggle:hover {
  transform: rotate(20deg);
}

/* Search Section */
.search-section {
  display: flex;
  gap: 10px;
}

.search-section input {
  flex-grow: 1;
  padding: 10px 15px;
  border-radius: 8px;
  border: 1.5px solid var(--input-border);
  background-color: var(--input-bg);
  color: var(--text-color);
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.search-section input:focus {
  outline: none;
  border-color: var(--accent-color);
}

.search-section button {
  background-color: var(--button-bg);
  color: var(--button-text);
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-section button:hover {
  background-color: var(--accent-color);
}

/* Current Weather */
.current-weather {
  text-align: center;
}

.date-time {
  font-size: 0.9rem;
  margin-bottom: 8px;
  color: var(--accent-color);
  font-weight: 600;
}

.city-name {
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.weather-main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 8px;
}

.temperature {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--accent-color);
}

.condition {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-color);
}

/* Forecast */
.forecast h3 {
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 15px;
  text-align: center;
}

.forecast-cards {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 5px;
}

.forecast-card {
  background-color: var(--input-bg);
  border-radius: 12px;
  padding: 12px 15px;
  min-width: 60px;
  text-align: center;
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
  flex-shrink: 0;
}

.forecast-card .day {
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--accent-color);
}

.forecast-card .description {
  font-size: 0.85rem;
  color: var(--accent-color);
  margin-top: 4px;
  font-weight: 600;
  text-transform: capitalize;
}

.forecast-card .temp {
  font-weight: 700;
  margin-top: 8px;
  color: var(--text-color);
}

/* Emoji-style simple animated weather icons */

.weather-icon {
  font-size: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  width: 60px;
  height: 60px;
}


.weather-icon.sunny {
  animation: pulse 3s ease-in-out infinite;
  color: #FFD93B;
}

.weather-icon.sunny::after {
  content: "☀️";
}


.weather-icon.rainy {
  animation: fadeInOut 2.5s ease-in-out infinite;
  color: #4fc3f7;
}

.weather-icon.rainy::after {
  content: "🌧️";
}


.weather-icon.cloudy {
  animation: pulse 4s ease-in-out infinite;
  color: #90a4ae;
}

.weather-icon.cloudy::after {
  content: "☁️";
}


.weather-icon.snowy {
  animation: fadeInOut 4s ease-in-out infinite;
  color: #81d4fa;
}

.weather-icon.snowy::after {
  content: "❄️";
}


.weather-icon.thunder {
  animation: flash 2s linear infinite;
  color: #fbc02d;
}

.weather-icon.thunder::after {
  content: "⚡";
}

/* Animations */

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

@keyframes fadeInOut {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
}


.forecast-cards::-webkit-scrollbar {
  height: 6px;
}

.forecast-cards::-webkit-scrollbar-thumb {
  background: var(--accent-color);
  border-radius: 3px;
}

.forecast-cards::-webkit-scrollbar-track {
  background: transparent;
}

/* Responsive */
@media (max-width: 480px) {
  .container {
    max-width: 100%;
    padding: 20px;
  }

  .temperature {
    font-size: 3rem;
  }

  .forecast-cards {
    gap: 8px;
  }

  .forecast-card {
    min-width: 55px;
    padding: 10px 12px;
  }
}
```
## script.js
```
// Dark/Light mode toggle
const toggleBtn = document.getElementById('mode-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  // Change icon on toggle
  if (body.classList.contains('dark')) {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});

// Date & Time update
const dateTimeElem = document.getElementById('date-time');

function updateDateTime() {
  const now = new Date();

  // Format date and time nicely
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  dateTimeElem.textContent = now.toLocaleDateString(undefined, options);
}

// Initial call and update every second
updateDateTime();
setInterval(updateDateTime, 1000);
```

