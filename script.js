const buttons = document.querySelectorAll('.mode-button');
const body = document.body;

const heroStory = document.querySelector('.hero-story');

const standardList = document.querySelector('.standard-story-list');
const secondaryGrid = document.querySelector('.secondary-grid');
const splitStandardStories = secondaryGrid ? [...secondaryGrid.querySelectorAll('.story-card')] : [];
const mobileQuery = window.matchMedia('(max-width: 700px)');

function syncStoryLayout() {
  if (!standardList || !secondaryGrid || !splitStandardStories.length) return;
  if (mobileQuery.matches) {
    splitStandardStories.slice().reverse().forEach((story) => {
      if (!standardList.contains(story)) standardList.prepend(story);
    });
  } else {
    splitStandardStories.forEach((story) => {
      if (!secondaryGrid.contains(story)) secondaryGrid.append(story);
    });
  }
}

syncStoryLayout();
mobileQuery.addEventListener?.('change', syncStoryLayout);

function setMode(mode) {
  buttons.forEach((button) => button.classList.toggle('active', button.dataset.mode === mode));
  body.classList.toggle('with-ad', mode === 'with-ad');
}

buttons.forEach((button) => button.addEventListener('click', () => setMode(button.dataset.mode)));

const menuPanel = document.getElementById('dhMenuPanel');
const menuButton = document.getElementById('menuButton');
const searchButton = document.getElementById('searchButton');
const closeMenu = document.getElementById('closeMenu');

function toggleMenu(force) {
  const shouldOpen = typeof force === 'boolean' ? force : menuPanel.hidden;
  menuPanel.hidden = !shouldOpen;
  document.body.classList.toggle('menu-visible', shouldOpen);
}

menuButton?.addEventListener('click', () => toggleMenu());
searchButton?.addEventListener('click', () => toggleMenu(true));
closeMenu?.addEventListener('click', () => toggleMenu(false));
