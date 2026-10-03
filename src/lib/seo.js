import { SITE } from './site'

export function setSEO({ title, description, path='/', keywords='', type='WebApplication' }) {
  document.title = `${title} | ${SITE.name}`
  const absolute = `${SITE.url}${path}`
  const set = (name, content) => { let el=document.querySelector(`meta[name="${name}"]`); if(!el){el=document.createElement('meta');el.name=name;document.head.appendChild(el)} el.content=content }
  const setProp = (property, content) => { let el=document.querySelector(`meta[property="${property}"]`); if(!el){el=document.createElement('meta');el.setAttribute('property',property);document.head.appendChild(el)} el.content=content }
  set('description', description); set('keywords', keywords); set('robots','index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1')
  let canonical=document.querySelector('link[rel="canonical"]'); if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical)} canonical.href=absolute
  setProp('og:title', `${title} | ${SITE.name}`); setProp('og:description', description); setProp('og:type','website'); setProp('og:url',absolute)
  setProp('twitter:card','summary'); setProp('twitter:title',`${title} | ${SITE.name}`); setProp('twitter:description',description)
  let script=document.getElementById('page-schema'); if(script) script.remove(); script=document.createElement('script'); script.id='page-schema'; script.type='application/ld+json'; script.textContent=JSON.stringify({ '@context':'https://schema.org', '@type':type, name:title, description, url:absolute, applicationCategory:'DeveloperApplication', operatingSystem:'Any', offers:{'@type':'Offer',price:'0',priceCurrency:'USD'} }); document.head.appendChild(script)
}
