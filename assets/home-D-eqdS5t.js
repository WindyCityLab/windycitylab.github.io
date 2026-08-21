import{t as e}from"./icons-DvcnWkJ4.js";document.querySelector(`#app`).innerHTML=`
  <header class="site-header" data-header>
    <div class="container header-inner">
      <a class="wordmark" href="#top" aria-label="Kevin McQuown, home">Kevin McQuown</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">
        <span>Menu</span>
        <i aria-hidden="true"></i>
      </button>
      <nav id="site-navigation" class="site-nav" aria-label="Primary navigation">
        <a href="#consulting">AI consulting</a>
        <a href="/courses/">Courses</a>
        <a href="/software/">Software</a>
        <a href="/about/">About</a>
        <a href="/astrophotography/">Astrophotography</a>
        <a href="https://scritorio.studio" target="_blank" rel="noreferrer">Scritorio</a>
        <a class="nav-contact" href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <main id="main-content">
    <section id="top" class="hero section-grid">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <h1>AI consulting, teaching,<br />and curriculum development.</h1>
          <span class="red-rule" aria-hidden="true"></span>
          <p>I help companies bring AI into the way they work. I also teach AI and computer engineering and develop project-based curriculum for students and professionals.</p>
        </div>
        <div class="process-sketch reveal">
          <img
            class="practice-map-illustration"
            src="/images/three-practices-turingguild.png"
            width="1536"
            height="1024"
            alt="Three separate practices: AI consulting for companies, teaching AI and computer engineering, and curriculum development for courses, labs, and projects."
          />
        </div>
      </div>
    </section>

    <section id="consulting" class="practice-section ruled-section">
      <div class="container consulting-grid">
        <div class="section-intro reveal">
          <div class="section-heading">
            ${e(`compass`)}
            <div>
              <h2>AI consulting</h2>
              <p>I work with organizations to understand how work gets done, identify where AI can help, and build solutions that fit real processes. The goal is practical value, clear workflows, and teams that can use and extend what we build.</p>
            </div>
          </div>
        </div>
        <div class="consulting-visual reveal">
          <img
            class="consulting-process-illustration"
            src="/images/ai-consulting-process-turingguild.png"
            width="1536"
            height="1024"
            alt="AI consulting process: understand the work, identify the opportunity, build and integrate, and help the team adopt."
          />
        </div>
      </div>
    </section>

    <section id="teaching" class="practice-section ruled-section">
      <div class="container teaching-grid">
        <div class="section-intro reveal">
          <div class="section-heading">
            ${e(`book`)}
            <div>
              <h2>Teaching & curriculum development</h2>
              <p>I teach and develop courses, workshops, and curriculum for students and professionals. The emphasis is always on systems thinking, sound engineering practice, and learning through real projects.</p>
              <a class="text-link" href="/courses/">Explore the courses ${e(`arrow`)}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="about-section ruled-section">
      <div class="container about-grid">
        <article class="about-copy reveal">
          <div class="section-heading compact">
            ${e(`profile`)}
            <div>
              <h2>About Kevin</h2>
              <p>My career has moved from embedded avionics and software architecture to mobile products, connected devices, technical leadership, and education. Across all of it, the common thread has been turning complex technology into systems and explanations that people can actually use.</p>
            </div>
          </div>
          <a class="text-link" href="/about/">
            Read more about Kevin ${e(`arrow`)}
          </a>
        </article>
      </div>
    </section>

    <section id="contact" class="contact-section ruled-section">
      <div class="container contact-grid reveal">
        <h2>Have a process that might benefit from AI?</h2>
        <div>
          <p>I’m always interested in talking through the work first: what your team does today, where the friction is, and whether AI is genuinely the right tool.</p>
          <a class="contact-link" href="mailto:kevin@thewcl.com">
            Email Kevin ${e(`arrow`)}
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <p>© <span data-year></span> Kevin McQuown</p>
      <p>Chicago, Illinois</p>
    </div>
  </footer>
`;var t=document.querySelector(`.menu-toggle`),n=document.querySelector(`.site-nav`);t?.addEventListener(`click`,()=>{let e=t.getAttribute(`aria-expanded`)===`true`;t.setAttribute(`aria-expanded`,String(!e)),n?.classList.toggle(`is-open`,!e)}),n?.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>{t?.setAttribute(`aria-expanded`,`false`),n.classList.remove(`is-open`)})}),document.querySelector(`[data-year]`).textContent=String(new Date().getFullYear());var r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),r.unobserve(e.target))})},{threshold:.12});document.querySelectorAll(`.reveal`).forEach(e=>r.observe(e));var i=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>t.intersectionRatio-e.intersectionRatio)[0];t?.target.id&&n?.querySelectorAll(`a[href^="#"]`).forEach(e=>{e.classList.toggle(`is-active`,e.hash===`#${t.target.id}`)})},{rootMargin:`-30% 0px -60%`,threshold:[0,.25,.5]});document.querySelectorAll(`main section[id]`).forEach(e=>i.observe(e));