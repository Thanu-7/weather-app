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
