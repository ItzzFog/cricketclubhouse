<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cricket Clubhouse – The Ultimate Cricket Hub</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Rajdhani', sans-serif;
    }
  </style>
</head>
<script src="main.js"></script>
<body class="bg-gray-50 text-gray-800">

<!-- NAVBAR -->
<header class="bg-green-700 text-white shadow sticky top-0 z-50">
  <div class="max-w-7xl mx-auto p-4 flex justify-between items-center">
    <h1 class="text-3xl font-bold">Cricket Clubhouse</h1>
    <nav class="space-x-6">
      <a href="#" class="hover:underline">Home</a>
      <a href="#stats" class="hover:underline">Stats</a>
      <a href="#leaderboard" class="hover:underline">Leaderboard</a>
      <a href="#tournaments" class="hover:underline">Tournaments</a>
      <a href="#players" class="hover:underline">Players</a>
      <a href="#teams" class="hover:underline">Teams</a>
      <a href="#live" class="hover:underline">Live</a>
      <a href="#news" class="hover:underline">News</a>
    </nav>
  </div>
</header>

<!-- HERO -->
<section class="h-[70vh] bg-cover bg-center flex items-center justify-center text-white text-center" style="background-image: url('https://source.unsplash.com/1600x900/?cricket,stadium')">
  <div class="bg-black bg-opacity-60 p-10 rounded-lg">
    <h2 class="text-5xl font-bold mb-4">Welcome to Cricket Clubhouse</h2>
    <p class="text-xl">Track your favorite teams, players, and tournaments — All in one place</p>
  </div>
</section>

<!-- PLAYER STATS -->
<section id="stats" class="max-w-7xl mx-auto px-6 py-16">
  <h3 class="text-3xl font-bold mb-8">Top Player Stats – Format-wise</h3>

  <div class="mb-12">
    <h4 class="text-2xl font-semibold mb-4">T20 Stats</h4>
    <div class="grid md:grid-cols-4 gap-6" id="t20Stats"></div>
  </div>

  <div class="mb-12">
    <h4 class="text-2xl font-semibold mb-4">ODI Stats</h4>
    <div class="grid md:grid-cols-4 gap-6" id="odiStats"></div>
  </div>

  <div>
    <h4 class="text-2xl font-semibold mb-4">Test Stats</h4>
    <div class="grid md:grid-cols-4 gap-6" id="testStats"></div>
  </div>
</section>

<!-- TEAMS -->
<section id="teams" class="max-w-7xl mx-auto px-6 py-16">
  <h3 class="text-3xl font-bold mb-8">Teams</h3>
  <div class="grid md:grid-cols-4 gap-6">
    <div class="bg-white p-6 rounded shadow text-center">
      <img src="https://flagcdn.com/in.svg" alt="India" class="h-16 mx-auto mb-4">
      <h4 class="text-xl font-semibold">India</h4>
    </div>
    <div class="bg-white p-6 rounded shadow text-center">
      <img src="https://flagcdn.com/au.svg" alt="Australia" class="h-16 mx-auto mb-4">
      <h4 class="text-xl font-semibold">Australia</h4>
    </div>
    <div class="bg-white p-6 rounded shadow text-center">
      <img src="https://flagcdn.com/gb.svg" alt="England" class="h-16 mx-auto mb-4">
      <h4 class="text-xl font-semibold">England</h4>
    </div>
    <div class="bg-white p-6 rounded shadow text-center">
      <img src="https://flagcdn.com/lk.svg" alt="Sri Lanka" class="h-16 mx-auto mb-4">
      <h4 class="text-xl font-semibold">Sri Lanka</h4>
    </div>
  </div>
</section>

<!-- PLAYER PROFILES -->
<section id="players" class="max-w-7xl mx-auto px-6 py-16">
  <h3 class="text-3xl font-bold mb-8">Player Profiles</h3>
  <div class="grid md:grid-cols-4 gap-6">
    <div class="bg-white p-6 rounded shadow text-center">
      <img src="https://resources.pulse.icc-cricket.com/photo-resources/2023/05/19/f95a3250-3f92-46c1-81b0-1e6a0070c2eb/Suryakumar-Yadav.png" class="h-32 mx-auto mb-4 rounded-full">
      <h4 class="text-xl font-semibold">Suryakumar Yadav</h4>
      <p class="text-gray-600">India – T20 Specialist</p>
    </div>
    <div class="bg-white p-6 rounded shadow text-center">
      <img src="https://resources.pulse.icc-cricket.com/photo-resources/2023/05/19/0be46e11-8a52-45a3-bc46-5a4e72c3bc96/Joe-Root.png" class="h-32 mx-auto mb-4 rounded-full">
      <h4 class="text-xl font-semibold">Joe Root</h4>
      <p class="text-gray-600">England – Test Specialist</p>
    </div>
  </div>
</section>

<!-- LIVE MATCHES -->
<section id="live" class="max-w-7xl mx-auto px-6 py-16">
  <h3 class="text-3xl font-bold mb-8">Live Matches</h3>
  <iframe src="https://widget.crictimes.org/?v=3" width="100%" height="400" frameborder="0"></iframe>
</section>

<!-- TOURNAMENTS -->
<section id="tournaments" class="max-w-7xl mx-auto px-6 py-16">
  <h3 class="text-3xl font-bold mb-8">Upcoming Tournaments</h3>
  <div class="grid md:grid-cols-2 gap-8">
    <div class="bg-white p-6 rounded shadow">
      <h4 class="text-xl font-semibold">T20 World Cup 2026</h4>
      <p>Hosted by India and Sri Lanka</p>
    </div>
    <div class="bg-white p-6 rounded shadow">
      <h4 class="text-xl font-semibold">Women's ODI World Cup 2026</h4>
      <p>Hosted by India</p>
    </div>
    <div class="bg-white p-6 rounded shadow">
      <h4 class="text-xl font-semibold">Women's T20 World Cup 2026</h4>
      <p>Hosted by England</p>
    </div>
    <div class="bg-white p-6 rounded shadow">
      <h4 class="text-xl font-semibold">World Test Championship Final 2027</h4>
      <p>Hosted by England</p>
    </div>
    <div class="bg-white p-6 rounded shadow">
      <h4 class="text-xl font-semibold">ODI World Cup 2027</h4>
      <p>Hosted by South Africa, Zimbabwe, Namibia</p>
    </div>
  </div>
</section>

<!-- NEWS -->
<section id="news" class="max-w-7xl mx-auto px-6 py-16">
  <h3 class="text-3xl font-bold mb-8">Latest News from ESPN Cricinfo</h3>
  <div id="newsFeed" class="grid md:grid-cols-2 gap-8">
    <p>Loading news...</p>
  </div>
</section>

<!-- FOOTER -->
<footer class="bg-gray-800 text-white text-center p-6">
  &copy; 2025 Cricket Clubhouse. All rights reserved.
</footer>

<script>
  const formats = {
    t20Stats: [
      { category: "Most Runs", player: "Suryakumar Yadav", country: "India", value: "1211 runs", color: "text-green-600" },
      { category: "Most Wickets", player: "Wanindu Hasaranga", country: "Sri Lanka", value: "55 wickets", color: "text-red-600" },
    ],
    odiStats: [
      { category: "Most Runs", player: "Shubman Gill", country: "India", value: "1449 runs", color: "text-blue-600" },
      { category: "Most Wickets", player: "Adam Zampa", country: "Australia", value: "41 wickets", color: "text-yellow-600" },
    ],
    testStats: [
      { category: "Most Runs", player: "Joe Root", country: "England", value: "1852 runs", color: "text-purple-600" },
      { category: "Most Wickets", player: "Ravichandran Ashwin", country: "India", value: "60 wickets", color: "text-indigo-600" },
    ]
  };
  Object.keys(formats).forEach(format => {
    const container = document.getElementById(format);
    formats[format].forEach(stat => {
      container.innerHTML += `
        <div class="bg-white shadow rounded-lg p-6 text-center">
          <h4 class="text-xl font-semibold">${stat.category}</h4>
          <p class="text-4xl ${stat.color} font-bold mt-2">${stat.value}</p>
          <p class="text-gray-600">${stat.player} (${stat.country})</p>
        </div>
      `;
    });
  });

  async function fetchNews() {
    try {
      const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://www.espncricinfo.com/rss/content/story/feeds/0.xml");
      const data = await res.json();
      const container = document.getElementById("newsFeed");
      container.innerHTML = "";
      data.items.slice(0, 6).forEach(item => {
        container.innerHTML += `
          <article class="bg-white shadow rounded-lg p-6">
            <h4 class="text-xl font-semibold mb-2"><a href="${item.link}" target="_blank" class="text-blue-700 hover:underline">${item.title}</a></h4>
            <p class="text-gray-600">${item.description.slice(0, 150)}...</p>
          </article>
        `;
      });
    } catch (err) {
      console.error("Failed to fetch news", err);
    }
  }
  fetchNews();
</script>

</body>
</html>

