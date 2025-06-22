const details = {
  about: {
    title: "👨🏼‍💻 About Me",
    content: `🔹 Name: Veera Shiva Shankar\n🔹 I'm a 3rd-year student in VIT-AP\n🔹 I love creativity and full stack development\n🔹 Passionate about coding and problem solving\n🔹 Location: Anantapur, Andhra Pradesh, India`
  },
  skills: {
    title: "🛠️ Skills",
    content: `🔹 HTML\n🔹 CSS\n🔹 JavaScript\n🔹 Python\n🔹 C Language\n🔹 Bootstrap\n🔹 Debugging\n🔹 Advanced MS Office\n🔹 Communication Skills`
  },
  projects: {
    title: "🧪 Projects",
    content: `🔹 Achieving Tasks Website\n🔹 Wikipedia Search Website`
  },
  education: {
    title: "🎓 Education",
    content: `🔹 B.Tech in CSE, VIT-AP University (2021–2025) – 80%\n🔹 Intermediate, Narayana Jr. College (2021–2023) – 91%\n🔹 10th, Sri Chaitanya School (2020) – 100%`
  },
  achievements: {
    title: "🏆 Achievements",
    content: `🔹 Certified in Static Website Building\n🔹 Certified in Responsive Website\n🔹 Certified in Dynamic Website\n🔹 Certified in Python & C\n🔹 Certified in MS Office\n🔹 UI/UX Mega Workshop Award`
  },
  contact: {
    title: "📬 Contact",
    content: `🔹 <a href="mailto:balaipalliveera@gmail.com">Email: balaipalliveera@gmail.com</a>\n🔹 Phone: <a href="https://wa.me/919701727175" target="_blank">9701727175 (WhatsApp)</a>\n🔹 GitHub: <a href="https://github.com/veerasivashankar" target="_blank">github.com/veerasivashankar</a>\n🔹 LinkedIn: <a href="https://www.linkedin.com/in/veera-siva-shankar-balayapalli-a80080285" target="_blank">LinkedIn Profile</a>\n🔹 Twitter: <a href="https://x.com/balaipalli64443" target="_blank">@balaipalli64443</a>`
  }
};

function showDetail(section) {
  document.getElementById("detailTitle").innerText = details[section].title;
  document.getElementById("detailContent").innerHTML = details[section].content;
  document.getElementById("detailPanel").style.display = "block";
}

document.addEventListener("click", function (e) {
  if (!e.target.closest(".section") && !e.target.closest("#detailPanel")) {
    document.getElementById("detailPanel").style.display = "none";
  }
});
