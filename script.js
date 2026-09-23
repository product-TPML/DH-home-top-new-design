const buttons=[...document.querySelectorAll('.mode-button')],body=document.body;
buttons.forEach(button=>button.addEventListener('click',()=>{
  body.dataset.mode=button.dataset.mode;
  buttons.forEach(item=>{
    const active=item===button;
    item.classList.toggle('active',active);
    item.setAttribute('aria-pressed',String(active));
  });
}));
const menuPanel=document.getElementById('dhMenuPanel'),menuButton=document.getElementById('menuButton'),searchButton=document.getElementById('searchButton'),closeMenu=document.getElementById('closeMenu'),searchInput=menuPanel?.querySelector('input');
let menuOpener=null;
function closeSiteMenu(){
  if(!menuPanel||menuPanel.hidden)return;
  menuPanel.hidden=true;
  [menuButton,searchButton].forEach(button=>button?.setAttribute('aria-expanded','false'));
  menuOpener?.focus();
  menuOpener=null;
}
function openSiteMenu(opener,focusTarget){
  if(!menuPanel)return;
  menuOpener=opener;
  menuPanel.hidden=false;
  [menuButton,searchButton].forEach(button=>button?.setAttribute('aria-expanded','true'));
  (focusTarget||closeMenu)?.focus();
}
menuButton?.addEventListener('click',()=>menuPanel?.hidden?openSiteMenu(menuButton,closeMenu):closeSiteMenu());
searchButton?.addEventListener('click',()=>openSiteMenu(searchButton,searchInput));
closeMenu?.addEventListener('click',closeSiteMenu);
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuPanel&&!menuPanel.hidden)closeSiteMenu()});
