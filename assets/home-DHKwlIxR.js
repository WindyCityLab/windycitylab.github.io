import{n as e,r as t}from"./site-header-E95yMbQz.js";import{i as n}from"./course-common-BRMpMdL1.js";var r=e=>`<svg class="folio-sketch" viewBox="${{consulting:`270 672 239 240`,teaching:`786 416 216 232`,software:`254 407 253 238`}[e]}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><image href="/images/folio/inventors-folio-reference.png" width="1536" height="1024" /></svg>`,i=()=>`<svg class="folio-flight" viewBox="685 0 750 385" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><image href="/images/folio/inventors-folio-reference.png" width="1536" height="1024" /></svg>`,a=()=>`<section class="container folio-chapters" aria-label="Explore my folio"><p class="folio-section-label">Five areas of work & curiosity <span>Select a chapter to explore →</span></p><div class="folio-grid">${[{title:`AI consulting`,href:`#consulting`,art:r(`consulting`)},{title:`Teaching & curriculum`,href:`/courses/`,art:r(`teaching`)},{title:`What I’ve built`,href:`/software/`,art:r(`software`)},{title:`My story`,href:`/about/`,art:`<img class="folio-portrait" src="/images/folio/kevin-mcquown.png" width="1024" height="1536" alt="Pencil portrait of Kevin McQuown" />`},{title:`Astrophotography`,href:`/astrophotography/`,art:`<img class="folio-telescope" src="/images/folio/starfront-telescope.png" width="1536" height="1024" alt="Pencil sketch of Kevin’s remote telescope and mount" />`}].map(({title:e,href:t,art:n},r)=>`<a class="folio-card" href="${t}"><div class="folio-card-copy"><span class="folio-number">0${r+1}</span><h2>${e}</h2><span class="folio-arrow" aria-hidden="true">→</span></div>${n}</a>`).join(``)}</div></section>`;document.querySelector(`#app`).innerHTML=`
  ${e()}
  <main id="main-content" class="editorial-home">
    <section id="top" class="editorial-hero container" aria-labelledby="intro-heading">
      <div class="editorial-intro">
        <p class="folio-eyebrow">My Folio</p>
        <h1 id="intro-heading">Kevin McQuown</h1>
        <h2>AI consulting, teaching, and curriculum development.</h2>
        <p>I help companies bring AI into the way they work. I also teach AI and computer engineering and develop project-based curriculum for students and professionals.</p>
        <a class="editorial-button" href="mailto:kevin@thewcl.com">Let’s talk</a>
      </div>
      ${i()}
    </section>

    ${a()}

    <section id="consulting" class="editorial-row container" aria-labelledby="consulting-heading">
      <h2 id="consulting-heading">1. AI consulting</h2>
      <div class="editorial-row-body">
        <p>Understand how work gets done, identify where AI can help, and build solutions that fit real processes.</p>
        <ol class="editorial-process" aria-label="AI consulting process">
          <li><span class="process-symbol">${t(`search`)}</span><span>Understand</span>${t(`arrow-long`)}</li>
          <li><span class="process-symbol">${t(`puzzle`)}</span><span>Build &amp; integrate</span>${t(`arrow-long`)}</li>
          <li><span class="process-symbol">${t(`people`)}</span><span>Support adoption</span></li>
        </ol>
      </div>
    </section>

    <section id="teaching" class="editorial-row container" aria-labelledby="teaching-heading">
      <h2 id="teaching-heading">2. Teaching &amp; curriculum development</h2>
      <div class="editorial-split">
        <div class="editorial-row-body">
          <p>Courses, workshops, and project-based curriculum for students and professionals.</p>
          <ul class="practice-descriptions">
            <li>${t(`tools`)}<span><strong>Teaching:</strong> hands-on engineering</span></li>
            <li>${t(`document`)}<span><strong>Curriculum:</strong> courses, labs, projects</span></li>
          </ul>
          <a class="editorial-link" href="/courses/">Explore the courses ${t(`arrow`)}</a>
        </div>
        <nav class="editorial-link-list" aria-label="Explore courses">
          <a href="/courses/ai-engineering/">AI Engineering ${t(`arrow`)}</a>
          <a href="/courses/build-your-own-computer/">Build Your Own Computer ${t(`arrow`)}</a>
          <a href="/courses/cpu-architecture/">CPU Architecture ${t(`arrow`)}</a>
        </nav>
      </div>
    </section>

    <section id="about" class="editorial-row container" aria-labelledby="about-heading">
      <h2 id="about-heading">3. About Kevin</h2>
      <div class="editorial-split">
        <div class="editorial-row-body">
          <p>From embedded avionics and software architecture to connected devices, technical leadership, and education.</p>
          <a class="editorial-link" href="/about/">Read more about Kevin ${t(`arrow`)}</a>
        </div>
        <nav class="editorial-link-list editorial-interests" aria-label="More about my work">
          <a href="/software/">${t(`code`)}<span>Software</span>${t(`arrow`)}</a>
          <a href="/astrophotography/">${t(`telescope`)}<span>Astrophotography</span>${t(`arrow`)}</a>
        </nav>
      </div>
    </section>

    <section id="contact" class="editorial-contact container" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Have a process that might benefit from AI?</h2>
      <a class="editorial-link" href="mailto:kevin@thewcl.com">Email Kevin ${t(`arrow`)}</a>
    </section>
  </main>
  <footer class="site-footer">
    <div class="container footer-inner">
      <p>© <span data-year></span> Kevin McQuown</p>
      <p>Chicago, Illinois</p>
    </div>
  </footer>`,n();