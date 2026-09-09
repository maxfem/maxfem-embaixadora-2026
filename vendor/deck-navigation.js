/* Presentation UI uses the shared HyperFrames controller for navigation. */
const slideshow=document.querySelector('hyperframes-slideshow');
const dialog=document.getElementById('index-dialog');
if(new URLSearchParams(location.search).get('mode')==='audience')document.body.classList.add('audience');
document.getElementById('open-index').addEventListener('click',()=>dialog.showModal());
document.getElementById('close-index').addEventListener('click',()=>{dialog.close();slideshow.focus();});
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
document.querySelectorAll('[data-slide]').forEach(b=>b.addEventListener('click',()=>{
 const i=Number(b.dataset.slide);
 if(slideshow.controller?.goToSlide)slideshow.controller.goToSlide(i);
 else if(slideshow._controller?.goToSlide)slideshow._controller.goToSlide(i);
 else if(slideshow.goToSlide)slideshow.goToSlide(i);
 else document.querySelector('hyperframes-player').seek(i*6+3);
 dialog.close();slideshow.focus();
}));
customElements.whenDefined('hyperframes-slideshow').then(()=>slideshow.focus());
