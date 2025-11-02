async function fetchJSON(p){const r=await fetch(p);if(!r.ok)return null;return r.json();}

async function loadSite(){
  const about=await fetch('content/about.md');const txt=await about.text();
  document.getElementById('about').innerHTML=`<h2>About</h2><p>${txt.replace(/\n/g,'<br>')}</p>`;
  const meta=await fetchJSON('content/site.json');
  document.getElementById('contact-text').textContent=meta.contact_blurb;
  document.getElementById('telegramBtn').href=meta.telegram;
  document.getElementById('instagramBtn').href=meta.instagram;
  document.getElementById('emailBtn').href=`mailto:${meta.email}`;
  const data=await fetchJSON('content/projects/index.json');
  const wrap=document.getElementById('projects');wrap.innerHTML='';
  (data.projects||[]).forEach(p=>{
    const id=p.youtube_url.split('v=')[1]||p.youtube_url.split('youtu.be/')[1];
    wrap.innerHTML+=`<div class="project"><iframe src="https://www.youtube.com/embed/${id}" allowfullscreen></iframe><p>${p.description}</p></div>`;
  });
}
const btn=document.getElementById('themeBtn');
btn.onclick=()=>{const t=localStorage.getItem('theme')||'dark';localStorage.setItem('theme',t==='dark'?'light':'dark');apply();};
function apply(){const t=localStorage.getItem('theme')||'dark';document.documentElement.classList.toggle('light',t==='light');}
document.addEventListener('DOMContentLoaded',()=>{apply();loadSite();});
