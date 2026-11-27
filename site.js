// Shared navigation + footer. Edit the links here once and every page updates.
const LINKS = [
  ['index.html','Home'],['members.html','Members'],['research.html','Research'],
  ['publications.html','Publications'],['news.html','News'],
  ['More',[['gallery.html','Photo Gallery'],['media.html','Media'],['courses.html','Courses'],['resources.html','Resources']]],
  ['index.html#contact','Contact']
];
const here = location.pathname.split('/').pop() || 'index.html';
const li = ([h,t]) => Array.isArray(t)
  ? `<li class="has-sub"><a href="#" onclick="return false">${h} ▾</a><ul class="sub">${t.map(li).join('')}</ul></li>`
  : `<li><a href="${h}"${h===here?' class="active"':''}>${t}</a></li>`;
const nav = document.getElementById('site-nav');
if (nav) {
  nav.innerHTML = `<div class="nav-container"><a href="index.html" class="logo">Forest Ecology Lab</a>
  <ul class="nav-links">${LINKS.map(li).join('')}</ul>
  <button class="mobile-menu" aria-label="Toggle menu">☰</button></div>`;
  nav.querySelector('.mobile-menu').onclick = () => nav.querySelector('.nav-links').classList.toggle('open');
}
const ft = document.getElementById('site-footer');
if (ft) ft.innerHTML = `<p>&copy; ${new Date().getFullYear()} Forest Ecology Lab. All rights reserved.</p>
<p style="margin-top:.5rem;font-size:.9rem">Sinharaja, Udakiruwa &amp; Horton Plains, Sri Lanka.</p>`;
