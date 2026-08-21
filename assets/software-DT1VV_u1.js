import{t as e}from"./icons-D6oo_yXu.js";document.querySelector(`#app`).innerHTML=`
  <header class="site-header" data-header>
    <div class="container header-inner">
      <a class="wordmark" href="/" aria-label="Kevin McQuown, home">Kevin McQuown</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">
        <span>Menu</span>
        <i aria-hidden="true"></i>
      </button>
      <nav id="site-navigation" class="site-nav" aria-label="Primary navigation">
        <a href="/#consulting">AI consulting</a>
        <a href="/courses/">Courses</a>
        <a class="is-active" href="/software/" aria-current="page">Software</a>
        <a href="/about/">About</a>
        <a href="/astrophotography/">Astrophotography</a>
        <a href="https://scritorio.studio" target="_blank" rel="noreferrer">Scritorio</a>
        <a class="nav-contact" href="mailto:kevin@thewcl.com">Contact</a>
      </nav>
    </div>
  </header>

  <main id="main-content">
    <section class="software-hero">
      <div class="container software-hero-grid">
        <div>
          <h1>When software no longer fits, I build my own.</h1>
          <span class="red-rule" aria-hidden="true"></span>
        </div>
        <div class="software-introduction">
          <p>Using Codex and AI, I have built a small portfolio of serious applications around the way I actually work.</p>
          <p>These are not speculative demos. They manage my photographs, accounting, observatory, curriculum, and writing—replacing subscriptions and broad platforms with tools I can understand, adapt, and own.</p>
        </div>
      </div>
    </section>

    <section class="software-thesis ruled-section" aria-labelledby="thesis-heading">
      <div class="container software-thesis-grid">
        <h2 id="thesis-heading">AI changes the economics of personal software.</h2>
        <blockquote>
          <p>The choice is no longer limited to accepting a generic subscription or funding a conventional product team.</p>
        </blockquote>
        <div class="thesis-notes">
          <p><span>01</span> Begin with a workflow I know deeply.</p>
          <p><span>02</span> Use AI as an engineering collaborator.</p>
          <p><span>03</span> Keep the data, decisions, and product direction under my control.</p>
        </div>
      </div>
    </section>

    <section class="software-products ruled-section" aria-labelledby="products-heading">
      <div class="container software-products-layout">
        <div class="software-sticky-heading">
          <h2 id="products-heading">Five tools.<br />Five real jobs.</h2>
          <p class="pencil-note-static">built around the work</p>
        </div>
        <div class="product-ledger">
          <article>
            <div class="product-index">01</div>
            <div class="product-copy">
              <div class="product-title-row">
                <div>
                  <p class="product-domain">Photography</p>
                  <h3>MyAperture</h3>
                </div>
                <p class="product-replaces"><span>Built instead of</span> Lightroom or Capture One</p>
              </div>
              <p>A private, local-first macOS photo library and nondestructive editor. It handles managed or referenced originals, culling, organization, RAW development, local adjustments, versions, presets, export, and bounded AI-assisted analysis—without surrendering the library to a cloud service.</p>
              <ul aria-label="MyAperture capabilities">
                <li>Local photo catalog</li>
                <li>Nondestructive editing</li>
                <li>Originals remain immutable</li>
              </ul>
            </div>
          </article>

          <article>
            <div class="product-index">02</div>
            <div class="product-copy">
              <div class="product-title-row">
                <div>
                  <p class="product-domain">Small-business accounting</p>
                  <h3>MyQuickBooks</h3>
                </div>
                <p class="product-replaces"><span>Built instead of</span> a $100+ monthly accounting subscription</p>
              </div>
              <p>A local-first accounting application for my business, built on a real double-entry ledger. It stages statements and bank feeds for human review, tracks bills and payments, produces financial reports, verifies ledger integrity, and keeps the accounting database under my control.</p>
              <ul aria-label="MyQuickBooks capabilities">
                <li>Double-entry ledger</li>
                <li>Human-approved imports</li>
                <li>Local reports and backups</li>
              </ul>
            </div>
          </article>

          <article>
            <div class="product-index">03</div>
            <div class="product-copy">
              <div class="product-title-row">
                <div>
                  <p class="product-domain">Astrophotography</p>
                  <h3>Starfront</h3>
                </div>
                <p class="product-replaces"><span>Built instead of</span> Telescopius and PixInsight</p>
              </div>
              <p>A native planning, session-review, stacking, and image-processing environment for my remote observatory. Starfront ranks targets for a night, tracks equipment and exposure goals, reviews FITS frames, builds conventional or 2× drizzle masters, and carries the image through a persistent processing workflow.</p>
              <ul aria-label="Starfront capabilities">
                <li>Target and night planning</li>
                <li>Frame review and stacking</li>
                <li>End-to-end image processing</li>
              </ul>
              <a class="text-link" href="/astrophotography/">See the observatory architecture ${e(`arrow`)}</a>
            </div>
          </article>

          <article>
            <div class="product-index">04</div>
            <div class="product-copy">
              <div class="product-title-row">
                <div>
                  <p class="product-domain">Curriculum delivery</p>
                  <h3>Turing Guild LMS</h3>
                </div>
                <p class="product-replaces"><span>Built instead of</span> Google Classroom or Schoology</p>
              </div>
              <p>A learning-management system shaped around the way I design and teach technical courses. It provides web and native experiences for courses, modules, resources, labs, quizzes, grading, announcements, and the operational infrastructure behind hands-on engineering work.</p>
              <ul aria-label="Turing Guild LMS capabilities">
                <li>Courses and modules</li>
                <li>Labs, quizzes, and grading</li>
                <li>Web, iPhone, and iPad</li>
              </ul>
            </div>
          </article>

          <article>
            <div class="product-index">05</div>
            <div class="product-copy">
              <div class="product-title-row">
                <div>
                  <p class="product-domain">Independent publishing</p>
                  <h3>Scritorio</h3>
                </div>
                <p class="product-replaces"><span>Built for</span> indie and self-publishing authors</p>
              </div>
              <p>A local-first AI editorial studio for serious authors. Scritorio helps writers organize book projects, protect canon, examine structure and continuity, work with specialized editorial perspectives, develop visuals, and prepare long-form work for publication without taking over the author’s voice.</p>
              <ul aria-label="Scritorio capabilities">
                <li>Local Markdown projects</li>
                <li>Author-controlled AI review</li>
                <li>Publishing preparation</li>
              </ul>
              <a class="text-link" href="https://scritorio.studio" target="_blank" rel="noreferrer">Visit scritorio.studio ${e(`arrow`)}</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="software-method ruled-section" aria-labelledby="method-heading">
      <div class="container software-method-grid">
        <div>
          <h2 id="method-heading">The same pattern shapes my consulting.</h2>
        </div>
        <div class="method-copy">
          <p>Each application began with a concrete process I understood well enough to question: where is the friction, which constraints actually matter, and what should remain under human control?</p>
          <p>Codex and AI accelerate the engineering, but they do not replace judgment. Architecture, validation, safety boundaries, and an honest understanding of the work are what turn generated code into dependable software.</p>
        </div>
        <ol class="method-rail">
          <li><span>01</span> Understand the work</li>
          <li><span>02</span> Define the boundaries</li>
          <li><span>03</span> Build with AI</li>
          <li><span>04</span> Verify in reality</li>
        </ol>
      </div>
    </section>

    <section class="software-closing ruled-section">
      <div class="container software-closing-grid">
        <h2>What would you build if the old constraints changed?</h2>
        <div>
          <p>I help organizations answer that question carefully—starting with the real process, then deciding where AI and custom software can create durable value.</p>
          <a class="contact-link" href="mailto:kevin@thewcl.com">Start a conversation ${e(`arrow`)}</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <p>© <span data-year></span> Kevin McQuown</p>
      <a href="/">Back to home</a>
    </div>
  </footer>
`;var t=document.querySelector(`.menu-toggle`),n=document.querySelector(`.site-nav`);t?.addEventListener(`click`,()=>{let e=t.getAttribute(`aria-expanded`)===`true`;t.setAttribute(`aria-expanded`,String(!e)),n?.classList.toggle(`is-open`,!e)}),n?.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>{t?.setAttribute(`aria-expanded`,`false`),n.classList.remove(`is-open`)})}),document.querySelector(`[data-year]`).textContent=String(new Date().getFullYear());