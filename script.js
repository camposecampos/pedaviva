document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
const trackingKeys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid'];
const params=new URLSearchParams(location.search);
document.querySelectorAll('.checkout-link').forEach(link=>{
  const u=new URL(link.href);
  trackingKeys.forEach(k=>{const v=params.get(k);if(v)u.searchParams.set(k,v)});
  link.href=u.toString();
  link.addEventListener('click',()=>{try{sessionStorage.setItem('pedaviva_checkout_click',new Date().toISOString())}catch(e){};if(typeof fbq==='function'){fbq('track','InitiateCheckout',{content_name:'PEDAVIVA',content_category:'Educação Infantil'});}});
});