const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");
menuBtn.addEventListener("click",()=>{navLinks.classList.toggle("active");const i=menuBtn.querySelector("i");i.classList.toggle("fa-bars");i.classList.toggle("fa-xmark")});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("active")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value;
  const email=document.getElementById("email").value;
  const subject=document.getElementById("subject").value;
  const message=document.getElementById("message").value;
  const body=`Name: ${name}\nEmail: ${email}\n\n${message}`;
  window.location.href=`mailto:your-email@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById("formStatus").textContent="Opening your email app...";
});
