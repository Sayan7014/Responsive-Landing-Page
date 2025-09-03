function searchDestination() {
  const query = document.getElementById("search").value.trim();
  if (query) {
    alert("Searching for: " + query + " ✈️");
  } else {
    alert("Please enter a destination!");
  }
}

function bookNow() {
  alert("Redirecting to booking page...");
  // You can replace with an actual booking page
  window.location.href = "#";
}
// Get elements
const loginBtn = document.getElementById("loginBtn");
const loginPanel = document.getElementById("loginPanel");
const closeBtn = document.getElementById("closeBtn");

// Open panel
loginBtn.addEventListener("click", () => {
  loginPanel.classList.add("active");
});

// Close panel
closeBtn.addEventListener("click", () => {
  loginPanel.classList.remove("active");
});

// Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === loginPanel) {
    loginPanel.classList.remove("active");
  }
});
