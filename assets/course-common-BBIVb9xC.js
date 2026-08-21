import{t as e}from"./icons-DiEZTox5.js";var t=()=>`
  <header class="site-header" data-header>
    <div class="container header-inner">
      <a class="wordmark" href="/" aria-label="Kevin McQuown, home">Kevin McQuown</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">
        <span>Menu</span><i aria-hidden="true"></i>
      </button>
      <nav id="site-navigation" class="site-nav" aria-label="Primary navigation">
        <a href="/#consulting">AI consulting</a>
        <a class="is-active" href="/courses/" aria-current="page">Courses</a>
        <a href="/software/">Software</a>
        <a href="/about/">About</a>
        <a href="/astrophotography/">Astrophotography</a>
        <a href="https://scritorio.studio" target="_blank" rel="noreferrer">Scritorio</a>
        <a class="nav-contact" href="mailto:kevin@thewcl.com">Contact</a>
      </nav>
    </div>
  </header>`,n=()=>`
  <footer class="site-footer">
    <div class="container footer-inner">
      <p>© <span data-year></span> Kevin McQuown</p>
      <a href="/courses/">All courses</a>
    </div>
  </footer>`,r=()=>e(`arrow`),i=()=>{let e=document.querySelector(`.menu-toggle`),t=document.querySelector(`.site-nav`);e?.addEventListener(`click`,()=>{let n=e.getAttribute(`aria-expanded`)===`true`;e.setAttribute(`aria-expanded`,String(!n)),t?.classList.toggle(`is-open`,!n)}),t?.querySelectorAll(`a`).forEach(n=>{n.addEventListener(`click`,()=>{e?.setAttribute(`aria-expanded`,`false`),t.classList.remove(`is-open`)})}),document.querySelector(`[data-year]`).textContent=String(new Date().getFullYear())};export{i,n,t as r,r as t};