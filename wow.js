const countdownDate = new Date("January 30, 2024 00:00:00").getTime();

// Update the countdown every second
const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
};

// Call the function every second to update the countdown
const countdownTimer = setInterval(updateCountdown, 1000);
