import{n as e,r as t,t as n}from"./site-header-ByamcGtw.js";var r=[{number:`01`,name:`Stephen Covey`,idea:`Principles before technique`,image:`/images/stephen-covey-portrait.webp`,alt:`Blue-ink portrait of Stephen Covey with a compass and planning grid`,reflection:`Covey’s work treats effectiveness as something grounded in character, principles, and deliberate choices. That resonates with the way I approach engineering and leadership: begin with a clear understanding of what matters, design around the whole system, and help people become more capable rather than more dependent on the process or the expert.`,connection:`The enduring idea for me is that useful frameworks should improve judgment, not replace it.`},{number:`02`,name:`Carl Sagan`,idea:`Rigor joined with wonder`,image:`/images/carl-sagan-portrait.webp`,alt:`Blue-ink portrait of Carl Sagan with stars, an orbit, and Saturn`,reflection:`Sagan could hold scientific rigor and a profound sense of wonder at the same time. He made enormously complex ideas understandable without making them small. As someone drawn to astronomy, education, and the work of explaining technology, I admire that combination of curiosity, clarity, humility, and imagination.`,connection:`He is a reminder that understanding more about the universe should deepen our sense of possibility.`},{number:`03`,name:`Leonardo da Vinci`,idea:`Curiosity without boundaries`,image:`/images/leonardo-da-vinci-portrait.webp`,alt:`Blue-ink portrait of Leonardo da Vinci with anatomical, mechanical, and flight studies`,reflection:`Leonardo did not separate art, science, observation, and engineering into isolated disciplines. He studied how things worked, drew what he saw, and used those drawings to think. That approach feels closely aligned with a career that has moved among hardware, software, architecture, teaching, and creative work.`,connection:`His notebooks show how making an idea visible can be the first step toward making it real.`},{number:`04`,name:`Margaret Hamilton`,idea:`Software worthy of the mission`,image:`/images/margaret-hamilton-portrait.webp`,alt:`Blue-ink portrait of Margaret Hamilton with Apollo guidance and software motifs`,reflection:`Hamilton helped establish software engineering as a discipline when software was too often treated as secondary to hardware. Her Apollo team designed asynchronous software, priority scheduling, end-to-end testing, and priority displays that helped critical work continue during unexpected computer overload. That resonates strongly with my own background in avionics, architecture, and embedded systems: reliability must be designed into the whole system from the beginning.`,connection:`The standard she represents is clear: understand what can go wrong, protect what matters most, and make the software earn trust.`}];document.querySelector(`#app`).innerHTML=`
  ${e(`about`)}

  <main id="main-content">
    <section class="admired-hero" aria-labelledby="admired-heading">
      <div class="container admired-hero-grid">
        <div>
          <a class="course-back admired-back" href="/about/">${t(`arrow-left`)} Back to About Kevin</a>
          <h1 id="admired-heading">People I admire</h1>
          <span class="red-rule" aria-hidden="true"></span>
        </div>
        <div class="admired-introduction">
          <p>Four people whose work reflects ideas I return to often.</p>
          <p>They come from very different worlds, but each joined disciplined thinking with a larger human purpose. What I admire is not simply what they accomplished. It is how they observed, explained, created, and helped others see more clearly.</p>
        </div>
      </div>
    </section>

    <section class="admired-people" aria-label="People I admire">
      ${r.map((e,t)=>`
        <article class="admired-person${t%2==1?` admired-person-reverse`:``}">
          <div class="container admired-person-grid">
            <figure class="admired-portrait">
              <img src="${e.image}" width="1122" height="1402" alt="${e.alt}" loading="${t===0?`eager`:`lazy`}" />
            </figure>
            <div class="admired-copy">
              <span class="admired-number" aria-hidden="true">${e.number}</span>
              <h2>${e.name}</h2>
              <p class="admired-idea">${e.idea}</p>
              <p>${e.reflection}</p>
              <p class="admired-connection">${e.connection}</p>
            </div>
          </div>
        </article>`).join(``)}
    </section>

    <section class="admired-closing ruled-section">
      <div class="container admired-closing-grid">
        <h2>Different disciplines. A common posture.</h2>
        <p>Be curious. Work from principles. Look closely. Make difficult ideas understandable. Build in a way that expands what other people can do.</p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <p>© <span data-year></span> Kevin McQuown</p>
      <a href="/about/">Back to About Kevin</a>
    </div>
  </footer>`,n();