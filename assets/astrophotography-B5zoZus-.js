import{n as e,r as t,t as n}from"./site-header-ByamcGtw.js";document.querySelector(`#app`).innerHTML=`
  ${e(`astrophotography`)}

  <main id="main-content">
    <section class="astro-hero">
      <div class="container astro-hero-grid">
        <div>
          <h1>A telescope in Texas. An observatory operated from Chicago.</h1>
          <span class="red-rule" aria-hidden="true"></span>
        </div>
        <div class="astro-introduction">
          <p>At Starfront Observatories, I maintain a remotely operated deep-sky imaging system built around a William Optics RedCat 91 and a cooled monochrome camera.</p>
          <p>The interesting part is not any one component. It is how the optics, control software, network, recovery path, and data storage work together through an unattended night.</p>
        </div>
      </div>
    </section>

    <section class="astro-architecture ruled-section" aria-labelledby="architecture-heading">
      <div class="container">
        <div class="astro-section-heading">
          <h2 id="architecture-heading">The observatory as a system</h2>
          <p>Normal control, emergency recovery, and image storage are deliberately separate paths. That separation matters when the equipment is hundreds of miles away.</p>
        </div>
        <figure class="architecture-figure">
          <img
            src="/images/starfront-architecture-turingguild.png"
            alt="Hand-drawn architecture of the Starfront observatory showing secure remote control from Chicago, the telescope and imaging equipment, a Windows NUC running NINA, PHD2, ASTAP, and ASCOM, an independent Raspberry Pi and iBoot power-recovery path, and image transfer to NAS storage."
            width="1672"
            height="941"
          />
          <figcaption>
            <span>01</span>
            <p>The Windows NUC runs the imaging session. A Raspberry Pi and network power switch remain available as an independent way to recover it. Captured frames move onward to long-term NAS storage.</p>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="astro-rig ruled-section" aria-labelledby="rig-heading">
      <div class="container astro-rig-layout">
        <div class="astro-sticky-heading">
          <h2 id="rig-heading">The imaging train</h2>
          <p class="pencil-note-static">light → signal → data</p>
        </div>
        <div class="rig-specs">
          <article>
            <span class="spec-number">01</span>
            <div>
              <h3>Wide-field optics</h3>
              <p>The William Optics RedCat 91 is a 91 mm, 448 mm focal-length apochromatic refractor. Its f/4.9 optical system gives the rig a generous field of view for nebulae and other large deep-sky structures.</p>
              <dl>
                <div><dt>Aperture</dt><dd>91 mm</dd></div>
                <div><dt>Focal length</dt><dd>448 mm</dd></div>
                <div><dt>Focal ratio</dt><dd>f/4.9</dd></div>
              </dl>
            </div>
          </article>
          <article>
            <span class="spec-number">02</span>
            <div>
              <h3>Monochrome capture</h3>
              <p>A cooled ZWO ASI6200MM Pro records 61.2-megapixel monochrome frames. A seven-position electronic filter wheel carries both LRGB filters for broadband color and 3 nm sulfur, hydrogen, and oxygen filters for narrowband imaging.</p>
              <dl>
                <div><dt>Sensor</dt><dd>Full frame</dd></div>
                <div><dt>Resolution</dt><dd>61.2 MP</dd></div>
                <div><dt>Pixel size</dt><dd>3.76 μm</dd></div>
              </dl>
            </div>
          </article>
          <article>
            <span class="spec-number">03</span>
            <div>
              <h3>Precision around the exposure</h3>
              <p>The ZWO AM5N harmonic mount carries the system. A separate UniGuide 32 and ASI220MM guide camera correct tracking, while an electronic focuser and camera-angle adjuster handle focus and framing without anyone at the pier.</p>
              <dl>
                <div><dt>Mount</dt><dd>ZWO AM5N</dd></div>
                <div><dt>Guiding</dt><dd>UniGuide 32</dd></div>
                <div><dt>Guide camera</dt><dd>ASI220MM</dd></div>
              </dl>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="astro-night ruled-section" aria-labelledby="night-heading">
      <div class="container">
        <div class="astro-section-heading night-heading">
          <h2 id="night-heading">One sequence controls the night</h2>
          <p>NINA coordinates the devices through ASCOM while PHD2 and ASTAP provide guiding and plate solving. The result is a repeatable imaging process rather than a collection of remote controls.</p>
        </div>
        <ol class="night-sequence">
          <li>
            <span>01</span>
            <h3>Point and center</h3>
            <p>The mount slews to the target. ASTAP solves the star field and NINA corrects the pointing until the composition matches the plan.</p>
          </li>
          <li>
            <span>02</span>
            <h3>Focus and guide</h3>
            <p>Autofocus establishes a repeatable focus position. PHD2 watches a guide star and sends small corrections during each long exposure.</p>
          </li>
          <li>
            <span>03</span>
            <h3>Adapt through the night</h3>
            <p>The sequence changes filters, dithers between frames, refocuses as conditions shift, and can perform a meridian flip before resuming.</p>
          </li>
          <li>
            <span>04</span>
            <h3>Close and preserve</h3>
            <p>At the end of the run, the camera warms, the mount parks, and the night’s image data is prepared for transfer to the NAS.</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="astro-resilience ruled-section" aria-labelledby="resilience-heading">
      <div class="container resilience-grid">
        <div>
          <h2 id="resilience-heading">Designed for distance</h2>
        </div>
        <blockquote>
          <p>A remote system has to account for the moment when its primary computer can no longer help recover itself.</p>
        </blockquote>
        <div class="resilience-notes">
          <article>
            <span>Control</span>
            <h3>Secure access</h3>
            <p>Tailscale connects Chicago, the observatory computer, the recovery Pi, and storage over a private network. Remote desktop provides the working interface.</p>
          </article>
          <article>
            <span>Recovery</span>
            <h3>Outside the failure</h3>
            <p>The Raspberry Pi sits outside the Windows control path and reaches the network power switch directly, allowing a hard reboot when the NUC is unresponsive.</p>
          </article>
          <article>
            <span>Data</span>
            <h3>Beyond the capture machine</h3>
            <p>The NUC is an acquisition computer, not the archive. Image files move to NAS storage where they can be retained and processed independently.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="astro-closing ruled-section">
      <div class="container astro-closing-grid">
        <h2>Engineering is part of the image.</h2>
        <div>
          <p>Astrophotography begins with light that may have traveled for thousands of years. Capturing it reliably is a systems problem—optical, mechanical, electrical, computational, and operational all at once. That combination is exactly what keeps me interested.</p>
          <a class="contact-link" href="/about/">More about Kevin ${t(`arrow`)}</a>
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
`,n();