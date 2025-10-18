// ======= Snart Academy JS — Final Update with All Series =======

// ==== Video Series Data ====
const courseSeries = [
  {
    id: 1,
    title: "Graphics Design Series — Adobe",
    desc: "Jifunze Adobe Photoshop na Illustrator hatua kwa hatua, kuanzia mwanzo hadi mwisho.",
    modules: [
      { title: "Lesson 1 — Adobe Intro", video: "8mO_GX5xS2c" },
      { title: "Lesson 2 — Photoshop Basics", video: "-UUr63ogqzw" },
      { title: "Lesson 3 ", video: "VBY09KjEgyM" },
      { title: "Lesson 4 ", video: "4r2mzAJUbRU" },
      { title: "Lesson 5 ", video: "GwD5pPS4UzM" },
      { title: "Lesson 6 ", video: "QVeQ8eGWEBI" },
      { title: "Lesson 7 ", video: "5iM1f1fa3e4" },
      { title: "Lesson 8 ", video: "vh_yzHlNnWk" },
      { title: "Lesson 9 ", video: "G78mKaoUudk" },
    ],
  },
  {
    id: 2,
    title: "Data Analysis Series — Excel",
    desc: "Jifunze uchambuzi wa data kwa kutumia Microsoft Excel, kuanzia hatua ya msingi hadi ngazi ya kitaalamu.",
    modules: [
      { title: "Lesson 1 — Excel Intro", video: "JTjwxwFGYQU" },
      { title: "Lesson 2 ", video: "EYWZenAnj3E" },
      { title: "Lesson 3 ", video: "j6MLYJWg2DM" },
      { title: "Lesson 4 ", video: "yt2qnBWNCw4" },
      { title: "Lesson 5 ", video: "5RzipeY30qc" },
      { title: "Lesson 6 ", video: "-Qw9ro4ALCM" },
      { title: "Lesson 7 ", video: "CGZ9LqBcI7Q" },
      { title: "Lesson 8 ", video: "Y3R2KWJtsGc" },
      { title: "Lesson 9 ", video: "lj0FPcE8U9U" },
      { title: "Lesson 10 ", video: "1WpowA9ugTo" },
      { title: "Lesson 11 ", video: "copuW7z7i14" },
      { title: "Lesson 12 ", video: "pXWvreWmpYI" },
      { title: "Lesson 13 ", video: "18KZ_7ATcG0" },
      { title: "Lesson 14 ", video: "-e3J_hm7gTg" },
      { title: "Lesson 15 ", video: "0kHejyx22SA" },
      { title: "Lesson 16 ", video: "CEC_Fb9WI5w" },
    ],
  },
  {
    id: 3,
    title: "QGIS Series",
    desc: "Jifunze QGIS — mfumo wa ramani na uchambuzi wa kijiografia, kuanzia msingi hadi uundaji wa ramani za kitaalamu.",
    modules: [
      { title: "Lesson 1 — QGIS Basics", video: "oAxA2eZu75E" },
      { title: "Lesson 2 — Layers & Attributes", video: "vPf8qZI3Hx4" },
      { title: "Lesson 3 ", video: "lg6FsSwOaBE" },
      { title: "Lesson 4 ", video: "v5jDm-7GQcc" },
      { title: "Lesson 5 ", video: "tDQB2ngUvfY" },
      { title: "Lesson 6 ", video: "m10HgoGduVM" },
      { title: "Lesson 7 ", video: "iOZB6XX-_hY" },
      { title: "Lesson 8 ", video: "V6p1rJWqn6U" },
      { title: "Lesson 9 ", video: "0qvzQjiT2oo" },
      { title: "Lesson 10 ", video: "qru4hXWMCqw" },
      { title: "Lesson 11 ", video: "cFdsKHlWTHI" },
      { title: "Lesson 12 ", video: "v5jDm-7GQcc" },
      { title: "Lesson 13 ", video: "tDQB2ngUvfY" },
      { title: "Lesson 14 ", video: "Vsg9_tNkoQY" },
      { title: "Lesson 15 — Raster Data", video: "H9u6oDigg2c" },
      { title: "Lesson 16 — Vector Data", video: "nx5D_Mc4Y4Y" },
      { title: "Lesson 17 — Geocoding", video: "zgCdiIMiI9U" },
      { title: "Lesson 18 ", video: "qqxO6HTJbyQ" },
      { title: "Lesson 19 ", video: "fxbuG-VSWDA" },
    ],
  },
  {
    id: 4,
    title: "BIM & Revit (AutoCAD Series)",
    desc: "Jifunze AutoCAD na Revit — mbinu za Building Information Modelling kwa miradi ya usanifu na uhandisi.",
    modules: [
      { title: "Lesson 1 — AutoCAD Intro", video: "iJHHWhUrkUE" },
      { title: "Lesson 2 — ", video: "DTtjKqdXaYc" },
      { title: "Lesson 3 — ", video: "abcpnyHEJT8" },
    ],
  },
];

// ==== DOM Elements ====
const coursesContainer = document.getElementById("coursesContainer");
const ytFrame = document.getElementById("ytFrame");
const viewerTitle = document.getElementById("viewerTitle");
const viewerDesc = document.getElementById("viewerDesc");
const courseLevel = document.getElementById("courseLevel");
const courseDuration = document.getElementById("courseDuration");
const overallProgress = document.getElementById("overallProgress");
const completedLessonsEl = document.getElementById("completedLessons");
const pointsEl = document.getElementById("points");
const markCompleteBtn = document.getElementById("markComplete");

let completedLessons = 0;
let points = 0;

// ==== Render Course Bundles ====
function renderCourseSeries() {
  coursesContainer.innerHTML = "";
  courseSeries.forEach((series) => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <img src="https://img.youtube.com/vi/${series.modules[0].video}/mqdefault.jpg" />
      <div>
        <strong>${series.title}</strong>
        <div class="small">${series.desc}</div>
      </div>
    `;
    card.addEventListener("click", () => openSeries(series));
    coursesContainer.appendChild(card);
  });
}
renderCourseSeries();

// ==== Open Series to View Lessons ====
function openSeries(series) {
  const lessons = series.modules
    .map(
      (m, i) => `
        <div style="margin-bottom:8px;cursor:pointer" onclick="loadVideo('${m.video}','${m.title}','${series.title}')">
          <span style="font-weight:600">${i + 1}. ${m.title}</span>
        </div>`
    )
    .join("");

  viewerTitle.textContent = series.title;
  viewerDesc.innerHTML = `${series.desc}<br><br><strong>Lessons:</strong><br>${lessons}`;
  ytFrame.src = `https://www.youtube.com/embed/${series.modules[0].video}`;
  courseLevel.textContent = "All Levels";
  courseDuration.textContent = `${series.modules.length * 10} min est.`;
}

// ==== Load Selected Video ====
function loadVideo(videoId, title, seriesTitle) {
  ytFrame.src = `https://www.youtube.com/embed/${videoId}?rel=0`;
  viewerTitle.textContent = title;
  viewerDesc.textContent = seriesTitle;
}

// ==== Mark Lesson Complete ====
markCompleteBtn.addEventListener("click", () => {
  completedLessons++;
  points += 10;
  completedLessonsEl.textContent = completedLessons;
  pointsEl.textContent = points;
  const totalLessons = courseSeries.reduce((sum, s) => sum + s.modules.length, 0);
  const progressPercent = Math.min(100, Math.round((completedLessons / totalLessons) * 100));
  overallProgress.textContent = progressPercent + "%";
  alert("Lesson marked complete! 🎉");
});
