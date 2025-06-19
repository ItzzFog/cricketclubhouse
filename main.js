// cricket-enhancements.js

document.addEventListener("DOMContentLoaded", () => {
  addDarkModeToggle();
  enhancePlayerProfiles();
  addSearchToNews();
  fetchLiveScores();
  setupLeaderboardSorting();
  enableTeamModals();
  setupUserAuth();
});

function addDarkModeToggle() {
  const toggleBtn = document.createElement("button");
  toggleBtn.innerText = "Toggle Dark Mode";
  toggleBtn.className = "fixed bottom-4 right-4 bg-green-700 text-white px-4 py-2 rounded shadow z-50";
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("bg-gray-900");
    document.body.classList.toggle("text-white");
  });
}

function enhancePlayerProfiles() {
  const profiles = document.querySelectorAll("#players .rounded-full");
  profiles.forEach(img => {
    img.addEventListener("mouseover", () => img.classList.add("scale-110", "transition", "duration-300"));
    img.addEventListener("mouseout", () => img.classList.remove("scale-110"));
  });
}

function addSearchToNews() {
  const newsSection = document.querySelector("#news");
  const searchInput = document.createElement("input");
  searchInput.placeholder = "Search news...";
  searchInput.className = "mb-6 p-2 border rounded w-full md:w-1/2";
  newsSection.insertBefore(searchInput, newsSection.children[1]);

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const articles = document.querySelectorAll("#newsFeed article");
    articles.forEach(article => {
      const title = article.querySelector("h4").innerText.toLowerCase();
      article.style.display = title.includes(query) ? "block" : "none";
    });
  });
}

function fetchLiveScores() {
  const liveSection = document.querySelector("#live iframe");
  const refreshBtn = document.createElement("button");
  refreshBtn.innerText = "Refresh Live Scores";
  refreshBtn.className = "mt-4 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition";
  liveSection.parentElement.appendChild(refreshBtn);

  refreshBtn.addEventListener("click", () => {
    liveSection.src += ""; // Triggers iframe reload
  });
}

function setupLeaderboardSorting() {
  const leaderboardSection = document.getElementById("leaderboard");
  if (!leaderboardSection) return;
  const table = leaderboardSection.querySelector("table");
  if (!table) return;

  const headers = table.querySelectorAll("th");
  headers.forEach((th, index) => {
    th.addEventListener("click", () => {
      const rows = Array.from(table.querySelectorAll("tbody tr"));
      const sorted = rows.sort((a, b) => {
        const valA = a.children[index].innerText;
        const valB = b.children[index].innerText;
        return isNaN(valA) ? valA.localeCompare(valB) : Number(valB) - Number(valA);
      });
      const tbody = table.querySelector("tbody");
      tbody.innerHTML = "";
      sorted.forEach(row => tbody.appendChild(row));
    });
  });
}

function enableTeamModals() {
  const teamCards = document.querySelectorAll("#teams .bg-white");
  const modal = document.createElement("div");
  modal.id = "teamModal";
  modal.className = "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center hidden z-50";
  modal.innerHTML = `
    <div class="bg-white p-6 rounded shadow max-w-md w-full relative">
      <button class="absolute top-2 right-2 text-gray-600 hover:text-black" id="closeModal">&times;</button>
      <h2 class="text-2xl font-bold mb-2" id="teamModalTitle"></h2>
      <p class="text-gray-700" id="teamModalContent">Team details will be displayed here.</p>
    </div>
  `;
  document.body.appendChild(modal);

  teamCards.forEach(card => {
    card.addEventListener("click", () => {
      const teamName = card.querySelector("h4").innerText;
      document.getElementById("teamModalTitle").innerText = teamName;
      document.getElementById("teamModalContent").innerText = `More info about ${teamName} will be available soon.`;
      modal.classList.remove("hidden");
    });
  });

  modal.querySelector("#closeModal").addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

function setupUserAuth() {
  const loginBtn = document.createElement("button");
  loginBtn.innerText = "Login";
  loginBtn.className = "fixed bottom-4 left-4 bg-gray-800 text-white px-4 py-2 rounded shadow z-50";
  document.body.appendChild(loginBtn);

  loginBtn.addEventListener("click", () => {
    const username = prompt("Enter your name:");
    if (username) {
      localStorage.setItem("ccUser", username);
      alert(`Welcome, ${username}!`);
    }
  });

  const savedUser = localStorage.getItem("ccUser");
  if (savedUser) {
    const welcomeText = document.createElement("div");
    welcomeText.innerText = `Welcome back, ${savedUser}`;
    welcomeText.className = "fixed top-20 center-0 bg-green-800 text-white px-4 py-2 rounded shadow z-50";
    document.body.appendChild(welcomeText);
  }
}