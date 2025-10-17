// ======= Snart Academy JS =======

// Sample course data
const courses = [
  {id:1,title:"Intro to Data & Analysis",desc:"Learn the basics of data handling",video:"dQw4w9WgXcQ",level:"Beginner",duration:"45 min"},
  {id:2,title:"GIS Mapping Basics",desc:"Intro to GIS with practical examples",video:"3JZ_D3ELwOQ",level:"Intermediate",duration:"50 min"},
  {id:3,title:"Revit & BIM Foundations",desc:"Learn BIM modeling and Revit basics",video:"V-_O7nl0Ii0",level:"Beginner",duration:"60 min"},
  {id:4,title:"Graphics Design Essentials",desc:"Intro to Photoshop and Illustrator",video:"e-ORhEE9VVg",level:"Beginner",duration:"40 min"}
];

let completedLessons = 0;
let points = 0;

// DOM Elements
const coursesContainer = document.getElementById('coursesContainer');
const courseCount = document.getElementById('courseCount');
const overallProgress = document.getElementById('overallProgress');
const completedLessonsEl = document.getElementById('completedLessons');
const pointsEl = document.getElementById('points');
const ytFrame = document.getElementById('ytFrame');
const viewerTitle = document.getElementById('viewerTitle');
const viewerDesc = document.getElementById('viewerDesc');
const courseLevel = document.getElementById('courseLevel');
const courseDuration = document.getElementById('courseDuration');
const markCompleteBtn = document.getElementById('markComplete');

// Populate course list
function renderCourses(){
  coursesContainer.innerHTML = '';
  courses.forEach(course=>{
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <img src="https://img.youtube.com/vi/${course.video}/mqdefault.jpg" alt="${course.title}" />
      <div>
        <strong>${course.title}</strong>
        <div class="small">${course.desc}</div>
      </div>
    `;
    card.addEventListener('click',()=>{
      loadCourse(course);
    });
    coursesContainer.appendChild(card);
  });
  courseCount.textContent = courses.length;
}

// Load course into viewer
function loadCourse(course){
  ytFrame.src = `https://www.youtube.com/embed/${course.video}?rel=0`;
  viewerTitle.textContent = course.title;
  viewerDesc.textContent = course.desc;
  courseLevel.textContent = course.level;
  courseDuration.textContent = course.duration;
}

// Mark lesson complete
markCompleteBtn.addEventListener('click',()=>{
  completedLessons++;
  points += 10;
  completedLessonsEl.textContent = completedLessons;
  pointsEl.textContent = points;
  const progressPercent = Math.min(100, Math.round((completedLessons/courses.length)*100));
  overallProgress.textContent = progressPercent + '%';
  alert("Lesson marked complete! 🎉");
});

// Initialize
renderCourses();
