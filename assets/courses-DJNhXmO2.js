import"./icons-pPQDucz3.js";import{i as e,n as t,r as n,t as r}from"./course-common-C1MEPtAj.js";var i=[{number:`01`,title:`AI Engineering`,former:`formerly AI Applications in Computer Science`,href:`/courses/ai-engineering/`,copy:`Students use modern AI as an engineering material: understanding models and context, building software with agents and APIs, working with data, and deploying a substantial system that must keep working beyond the demo.`},{number:`02`,title:`Build Your Own Computer`,href:`/courses/build-your-own-computer/`,copy:`Students assemble and bring up a complete 65C02-based computer, connecting processor, memory, storage, and input/output before writing the low-level software that makes the machine their own.`},{number:`03`,title:`CPU Architecture`,href:`/courses/cpu-architecture/`,copy:`Students begin with electricity, transistors, and Boolean logic, then build upward through arithmetic, registers, buses, memory, timing, and control until an original 8-bit processor can execute instructions.`}];document.querySelector(`#app`).innerHTML=`
  ${n()}
  <main id="main-content">
    <section class="courses-hero">
      <div class="container courses-hero-grid">
        <div>
          <h1>Courses built around making the system real.</h1>
          <span class="red-rule" aria-hidden="true"></span>
        </div>
        <div class="courses-introduction">
          <p>Students learn by building, testing, and explaining working systems.</p>
          <p>The subject may be AI or computer architecture, but the method stays consistent: work from first principles, see how the layers connect, and make something substantial enough to reveal what you do not yet understand.</p>
        </div>
      </div>
    </section>

    <section class="course-ledger ruled-section" aria-labelledby="course-list-heading">
      <div class="container course-ledger-layout">
        <div class="course-ledger-heading">
          <h2 id="course-list-heading">Three ways into engineering</h2>
          <p class="pencil-note-static">build → trace → explain</p>
        </div>
        <ol class="course-list">
          ${i.map(e=>`
            <li>
              <span class="course-number">${e.number}</span>
              <div class="course-summary">
                <div class="course-title-block">
                  <h3>${e.title}</h3>
                  ${e.former?`<p class="course-former">${e.former}</p>`:``}
                </div>
                <p>${e.copy}</p>
                <a class="text-link" href="${e.href}">Explore the course ${r()}</a>
              </div>
            </li>`).join(``)}
        </ol>
      </div>
    </section>

    <section class="course-principles ruled-section" aria-labelledby="course-principles-heading">
      <div class="container course-principles-grid">
        <h2 id="course-principles-heading">Learning through the whole system.</h2>
        <article><span>01</span><h3>Build it</h3><p>Construct a real system from first principles, one understandable layer at a time.</p></article>
        <article><span>02</span><h3>Trace it</h3><p>Measure, debug, and follow what actually happens across the boundaries.</p></article>
        <article><span>03</span><h3>Explain it</h3><p>Make the architecture clear in your own words. Teaching is how understanding sticks.</p></article>
      </div>
    </section>

    <section class="course-closing ruled-section">
      <div class="container course-closing-grid">
        <h2>Interested in a course or curriculum?</h2>
        <div><p>I develop and teach project-centered engineering courses for schools, enrichment programs, and professional learners.</p><a class="contact-link" href="mailto:kevin@thewcl.com">Email Kevin ${r()}</a></div>
      </div>
    </section>
  </main>
  ${t()}`,e();