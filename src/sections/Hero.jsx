import Button from 'react-bootstrap/Button';
import './hero.css';
export default function Hero() {
  return (
    <section class='hero d-flex flex-column' style={{ paddingTop: '5rem', gap: '30rem' }}>
      <div class='hero__container d-flex position-relative'>
        {/* working */}

        <div class='hero__content d-flex flex-column col-3 offset-1 gap-4'>
          <p class='hero__greeting' style={{ fontSize: '4rem', fontWeight: '100' }}>
            Hey. I’m Sandesh,
          </p>
          <h1 class='hero__headline'>
            <span class='hero__headline-part fw-bolder' style={{ fontSize: '5rem' }}>
              A FRONTEND{' '}
            </span>
            <span
              class='hero__headline-part hero__headline-part--highlight fw-lighter fst-italic d-block'
              style={{ fontSize: '6rem' }}
            >
              {' '}
              Developer
            </span>
          </h1>
          <p class='hero__description mt-5' style={{ fontSize: '2rem' }}>
            Transforming ideas into stunning visuals—UI/UX and brand design that captivates,
            engages, and delivers results.
          </p>
          <Button
            href='#contact'
            class='hero__cta hero__cta--primary btn-outline-ligh'
            variant='outline-secondary'
            style={{ width: '50%' }}
          >
            {' '}
            Contact Me <span class='hero__cta-icon'>→</span>
          </Button>

          {/* working */}
        </div>

        <div class='hero__visual position-absolute start-50  z-n1'>
          <img
            src='https://videos.openai.com/vg-assets/assets%2Ftask_01jy96c5aseb39cpcsqec2r72p%2F1750507922_img_1.webp?st=2025-06-21T10%3A25%3A31Z&se=2025-06-27T11%3A25%3A31Z&sks=b&skt=2025-06-21T10%3A25%3A31Z&ske=2025-06-27T11%3A25%3A31Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=4YmQwYxsnyz9PbIzk5cYYpX4louL28I%2FZj64ZwfETVo%3D&az=oaivgprodscus'
            alt='Portrait of Solt'
            class='hero__image'
          />
        </div>

        <div class='hero__stats d-flex flex-column col-2 offset-5 text-end gap-5 justify-content-center'>
          <div class='hero__stat d-flex flex-column'>
            <span class='hero__stat-number fw-bolder fs-2'>15+</span>
            <span class='hero__stat-label text-secondary fw-light'>Years Experience</span>
          </div>
          <div class='hero__stat d-flex flex-column'>
            <span class='hero__stat-number fw-bolder fs-2'>280+</span>
            <span class='hero__stat-label text-secondary fw-light'>Projects Delivered</span>
          </div>
          <div class='hero__stat d-flex flex-column'>
            <span class='hero__stat-number fw-bolder fs-2'>99%</span>
            <span class='hero__stat-label text-secondary fw-light'>Client Satisfaction</span>
          </div>
          <div class='hero__stat d-flex flex-column'>
            <span class='hero__stat-number fw-bolder fs-2'>50</span>
            <span class='hero__stat-label text-secondary fw-light'>Clients Worldwide</span>
          </div>
        </div>
      </div>

      <div class='hero__features' style={{ margin: '0 8.3%' }}>
        <div class='hero__feature'>
          <h3 class='hero__feature-title fs-1'>User-Centered Design</h3>
          <p class='hero__feature-des text-secondary fs-3 fw-light'>
            Intuitive and engaging experiences tailored for your audience.
          </p>
        </div>
        <div class='hero__feature'>
          <h3 class='hero__feature-title fs-1'>Brand Identity &amp; Strategy</h3>
          <p class='hero__feature-des text-secondary fs-3 fw-light'>
            Strong visual storytelling that makes your brand unforgettable.
          </p>
        </div>
        <div class='hero__feature'>
          <h3 class='hero__feature-title fs-1'>Responsive &amp; Modern UI</h3>
          <p class='hero__feature-des text-secondary fs-3 fw-light'>
            Pixel-perfect designs optimized for all devices.
          </p>
        </div>
        <div class='hero__feature'>
          <h3 class='hero__feature-title fs-1'>Seamless Prototyping</h3>
          <p class='hero__feature-des text-secondary fs-3 fw-light'>
            Interactive mockups to bring ideas to life before development.
          </p>
        </div>
      </div>
    </section>
  );
}
