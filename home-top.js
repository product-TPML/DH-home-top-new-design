const body=document.body;
const modeButtons=[...document.querySelectorAll('.mode-button')];
let nonSubscriberMode=body.dataset.mode;
// nav.js owns the subscriber toggle (body.is-subscriber-view); subscribers always get Ad Lite.
function syncModes(){
  const subscriber=body.classList.contains('is-subscriber-view');
  body.dataset.mode=subscriber?'subscribers-lite':nonSubscriberMode;
  body.dataset.pvMode=subscriber?'ad-lite':'with-ad';
  modeButtons.forEach(button=>{
    const active=button.dataset.mode===nonSubscriberMode;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
  });
}
modeButtons.forEach(button=>button.addEventListener('click',()=>{
  nonSubscriberMode=button.dataset.mode;
  syncModes();
}));
new MutationObserver(syncModes).observe(body,{attributes:true,attributeFilter:['class']});
syncModes();
