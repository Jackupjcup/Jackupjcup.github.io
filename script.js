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
function projectMedia(item) {
  const media = item.media;
  if (!media?.src?.trim()) return null;
  const frame = el('div', 'project-media');
  const placeholder = el('div', 'project-media-placeholder');
  placeholder.setAttribute('role', 'img');
  placeholder.setAttribute('aria-label', `${item.title}: ${content.labels.projectPreview}`);
  const symbol = el('span', 'preview-symbol', '▧');
  symbol.setAttribute('aria-hidden', 'true');
  placeholder.append(symbol, el('span', '', content.labels.projectPreview));
  const element = el(media.type === 'video' ? 'video' : 'img');
  element.style.objectPosition = media.position || '50% 50%';
  if (media.fit === 'contain') element.style.objectFit = 'contain';
  if (media.type === 'video') {
    element.controls = true;
    element.playsInline = true;
    element.preload = 'metadata';
    element.setAttribute('aria-label', media.alt || item.title);
    if (media.poster) element.poster = media.poster;
  } else {
    element.alt = media.alt || item.title;
    element.loading = 'lazy';
    element.decoding = 'async';
  }
  element.addEventListener('error', () => frame.replaceChildren(placeholder), {once: true});
  element.src = media.src;
  frame.append(element);
  return frame;
}
content.projects.items.forEach(item => {
  const article = el('article', 'research-entry');
  article.id = `project-${item.id}`;
  const body = el('div', 'research-body');
  const heading = el('h3');
  const link = el('a', '', item.title);
  link.href = item.url;
  link.target = '_blank';
  link.rel = 'noreferrer';
  heading.append(link);
  body.append(heading, el('p', 'entry-meta', `${item.date} · ${item.category}`), el('p', 'project-description', item.summary));
  const detail = el('details');
  detail.id = `${item.id}-details`;
  detail.append(el('summary', '', content.labels.details));
  item.details.forEach(text => detail.append(el('p', '', text)));
  body.append(detail);
  const media = projectMedia(item);
  if (media) {
    article.classList.add('has-media');
    article.append(media);
  }
  article.append(body);
  document.getElementById('projects-items').append(article);
});
content.publications.items.forEach(item => {
  const article = el('article', 'research-entry publication-entry');
  article.id = `publication-${item.id}`;
  const body = el('div', 'research-body');
  const heading = el('h3');
  const link = el('a', '', item.title);
  link.href = item.url;
  link.target = '_blank';
  link.rel = 'noreferrer';
  heading.append(link);
  body.append(heading);
  const media = projectMedia(item);
  if (media) {
    article.classList.add('has-media');
    article.append(media);
  }
  article.append(body);
  document.getElementById('publications-items').append(article);
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

// Draw once per page load: each divider gets its own gently uneven pen strokes.
function handDrawnLine(vertical = false, bold = false) {
  function stroke(offset, width, opacity) {
    let path = `M 0 ${(6 + offset).toFixed(2)}`;
    for (let x = 0; x < 1000; x += 40) {
      const control = 6 + offset + (Math.random() - 0.5) * 5;
      const end = 6 + offset + (Math.random() - 0.5) * 2.4;
      path += ` Q ${x + 20} ${control.toFixed(2)} ${x + 40} ${end.toFixed(2)}`;
    }
    return `<path d="${path}" fill="none" stroke="#514b61" stroke-width="${width.toFixed(2)}" stroke-opacity="${opacity}" stroke-linecap="round"/>`;
  }
  const strokes = stroke(0, bold ? 2.3 + Math.random() * 0.6 : 1.15 + Math.random() * 0.3, 0.52) + stroke((Math.random() - 0.5) * 1.8, bold ? 0.65 : 0.35, bold ? 0.18 : 0.12);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vertical ? '0 0 12 1000' : '0 0 1000 12'}" preserveAspectRatio="none">${vertical ? `<g transform="translate(12 0) rotate(90)">${strokes}</g>` : strokes}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
[
  ['.masthead, main h1, main h2', 'sketch-bottom'],
  ['.education-entry + .education-entry, .research-entry + .research-entry, .page-footer', 'sketch-top'],
  ['.author-profile', 'sketch-mobile-bottom'],
  ['details', 'sketch-left']
].forEach(([selector, className]) => {
  document.querySelectorAll(selector).forEach(element => {
    element.classList.add(className);
    element.style.setProperty('--sketch-line', handDrawnLine(className === 'sketch-left', element.matches('.masthead')));
  });
});
