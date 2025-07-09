document.querySelectorAll('.ripple').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const circle = document.createElement('span');
    circle.className = 'ripple-effect';
    const rect = btn.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

const feedbackForm = document.getElementById('feedbackForm');
const feedbackMsg = document.getElementById('feedbackMsg');
const feedbackList = document.getElementById('feedback-list');

const FEEDBACK_KEY = 'portfolio_feedbacks';

function loadFeedbacks() {
  feedbackList.innerHTML = '';
  const stored = localStorage.getItem(FEEDBACK_KEY);
  if (stored) {
    const feedbacks = JSON.parse(stored);
    feedbacks.forEach(fb => {
      const item = document.createElement('div');
      item.className = 'feedback-item';
      item.innerHTML = `
        <div class="feedback-stars">${'&#9733;'.repeat(fb.rating)}<span style="color:#bbb;">${'&#9733;'.repeat(5-fb.rating)}</span></div>
        <div class="feedback-comment">${fb.comment.replace(/</g, "&lt;")}</div>
      `;
      feedbackList.appendChild(item);
    });
  }
}

function saveFeedback(rating, comment) {
  let feedbacks = [];
  const stored = localStorage.getItem(FEEDBACK_KEY);
  if (stored) {
    feedbacks = JSON.parse(stored);
  }
  feedbacks.push({ rating, comment });
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedbacks));
}
feedbackMsg.textContent = "Thanks for your feedback!";
feedbackMsg.style.color = "#fff";  
setTimeout(() => { 
  feedbackMsg.textContent = ""; 
  feedbackMsg.style.color = "";   
}, 2500);


feedbackForm.onsubmit = function(e) {
  e.preventDefault();
  const rating = feedbackForm.rating.value;
  const comment = feedbackForm.feedback.value.trim();
  if (!rating || !comment) return;

  saveFeedback(Number(rating), comment);
  loadFeedbacks();

  feedbackMsg.textContent = "Thanks for your feedback!";
  feedbackForm.reset();
  setTimeout(() => { feedbackMsg.textContent = ""; }, 2500);
};

window.addEventListener('DOMContentLoaded', loadFeedbacks);


document.getElementById('hireBtn').onclick = function() {
  document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
};

const chatWidget = document.getElementById('chatWidget');
const chatToggle = document.getElementById('chatToggle');
chatToggle.onclick = () => {
  chatWidget.classList.toggle('active');
};

const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if (contactForm) {
  contactForm.onsubmit = e => {
       formMsg.textContent = "Your email client should open now. Thank you!";
    setTimeout(() => { formMsg.textContent = ""; }, 4000);
  };
}

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.onclick = () => {
  navLinks.classList.toggle('open');
};

document.querySelectorAll('.nav-btn').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  const sections = ['about', 'education', 'certifications', 'projects', 'contact'];
  let scrollPos = window.scrollY + 80;
  sections.forEach(id => {
    const section = document.getElementById(id);
    const link = document.querySelector(`.nav-btn[href="#${id}"]`);
    if (section && link) {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});
