const content = window.SITE_CONTENT;
const valueAt = path => path.split('.').reduce((value, key) => value?.[key], content);
document.documentElement.lang = content.site.language;
document.title = content.site.title;
document.querySelector('meta[name="description"]').content = content.site.description;
document.querySelectorAll('[data-text]').forEach(element => {
  element.textContent = valueAt(element.dataset.text) ?? '';
});
document.querySelectorAll('[data-link]').forEach(element => {
  element.href = valueAt(element.dataset.link) ?? '#';
});
document.querySelectorAll('[data-email]').forEach(element => {
  element.href = `mailto:${valueAt(element.dataset.email)}`;
});
const avatar = document.querySelector('.author-avatar');
avatar.src = content.profile.portrait;
avatar.alt = content.profile.portraitAlt;
function el(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
content.education.items.forEach(item => {
  const article = el('article', 'education-entry');
  article.id = `education-${item.id}`;
  const logo = el('img', 'school-logo');
  logo.src = item.logo;
  logo.alt = `${item.school} logo`;
  logo.width = 110;
  logo.height = 95;
  const body = el('div', 'education-body');
  const heading = el('h3');
  const link = el('a', '', item.school);
  link.href = item.url;
  link.target = '_blank';
  link.rel = 'noreferrer';
  heading.append(link);
  body.append(heading, el('p', 'education-degree', item.degree), el('p', 'entry-meta', `${item.date} · ${item.location}`));
  if (item.grade) body.append(el('p', 'education-grade', item.grade));
  if (item.awards.length) {
    body.append(el('h4', 'education-awards-heading', content.education.awardsLabel));
    const list = el('ul', 'education-awards');
    item.awards.forEach(award => list.append(el('li', '', `${award.date} · ${award.title}`)));
    body.append(list);
  }
  article.append(logo, body);
  document.getElementById('education-items').append(article);
});
content.research.items.forEach(item => {
  const article = el('article', 'research-entry');
  const heading = el('h3');
  const link = el('a', '', item.title);
  link.href = item.url;
  link.target = '_blank';
  link.rel = 'noreferrer';
  heading.append(link);
  article.append(heading, el('p', 'entry-meta', `${item.date} · ${item.category}`), el('p', '', item.summary));
  const detail = el('details');
  detail.id = `${item.id}-details`;
  detail.append(el('summary', '', content.labels.details));
  item.details.forEach(text => detail.append(el('p', '', text)));
  article.append(detail);
  document.getElementById('research-items').append(article);
});
content.experience.items.forEach(item => {
  const article = el('article', 'experience-entry');
  article.append(el('h3', '', item.organization), el('p', 'entry-role', item.role), el('p', 'entry-meta', `${item.date} · ${item.location}`));
  const list = el('ul');
  item.highlights.forEach(text => list.append(el('li', '', text)));
  article.append(list);
  document.getElementById('experience-items').append(article);
});
content.awards.items.forEach(item => {
  const row = el('li');
  row.append(el('span', 'award-date', `${item.date} · `), el('span', '', item.title), el('span', 'award-organization', item.organization));
  document.getElementById('award-items').append(row);
});
content.skills.items.forEach(item => {
  document.getElementById('skill-items').append(el('dt', '', item.label), el('dd', '', item.value));
});
function updateHash() {
  const id = location.hash.slice(1);
  const target = document.getElementById(id);
  if (target?.tagName === 'DETAILS') target.open = true;
  const sectionId = target?.closest('section')?.id || 'education';
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    if (link.hash === `#${sectionId}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('hashchange', updateHash);
updateHash();
