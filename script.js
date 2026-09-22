const buttons=[...document.querySelectorAll('.mode-button')],body=document.body;
const standardList=document.querySelector('.standard-story-list'),secondaryGrid=document.querySelector('.secondary-grid');
const splitStandardStories=secondaryGrid?[...secondaryGrid.querySelectorAll('.story-card')]:[];
const mobileQuery=matchMedia('(max-width:700px)'),desktopQuery=matchMedia('(min-width:1051px)');
const desktopMainStory=document.querySelector('.desktop-main-story'),desktopMiddleRail=document.querySelector('.desktop-middle-rail'),desktopPremiumPanel=document.querySelector('.desktop-premium-panel');
function syncStoryLayout(){if(!standardList||!secondaryGrid||!splitStandardStories.length)return;if(mobileQuery.matches)splitStandardStories.slice().reverse().forEach(s=>{if(!standardList.contains(s))standardList.prepend(s)});else splitStandardStories.forEach(s=>{if(!secondaryGrid.contains(s))secondaryGrid.append(s)})}
syncStoryLayout();mobileQuery.addEventListener?.('change',syncStoryLayout);
function syncAdBaseline(){body.classList.toggle('with-ad',body.dataset.mode==='with-ad'||(desktopQuery.matches&&body.dataset.mode!=='with-ad'))}
function setMode(mode){body.dataset.mode=mode;syncAdBaseline();buttons.forEach(b=>{const on=b.dataset.mode===mode;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});syncPremiumHeight()}
function syncPremiumHeight(){if(!desktopPremiumPanel)return;desktopPremiumPanel.style.height='auto';if(!desktopQuery.matches)return;requestAnimationFrame(()=>{desktopPremiumPanel.style.height='auto';const h=Math.max(desktopMainStory?.getBoundingClientRect().height||0,desktopMiddleRail?.getBoundingClientRect().height||0);if(h>0)desktopPremiumPanel.style.height=Math.ceil(h)+'px'})}
buttons.forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.mode)));
const premiumHeightObserver=new ResizeObserver(syncPremiumHeight);if(desktopMainStory)premiumHeightObserver.observe(desktopMainStory);if(desktopMiddleRail)premiumHeightObserver.observe(desktopMiddleRail);
desktopQuery.addEventListener?.('change',()=>{syncAdBaseline();syncPremiumHeight()});window.addEventListener('resize',syncPremiumHeight);window.addEventListener('load',()=>{syncAdBaseline();syncPremiumHeight()});syncAdBaseline();syncPremiumHeight();
const menuPanel=document.getElementById('dhMenuPanel'),menuButton=document.getElementById('menuButton'),searchButton=document.getElementById('searchButton'),closeMenu=document.getElementById('closeMenu');
function toggleMenu(force){const open=typeof force==='boolean'?force:menuPanel.hidden;menuPanel.hidden=!open;body.classList.toggle('menu-visible',open)}
menuButton?.addEventListener('click',()=>toggleMenu());searchButton?.addEventListener('click',()=>toggleMenu(true));closeMenu?.addEventListener('click',()=>toggleMenu(false));
