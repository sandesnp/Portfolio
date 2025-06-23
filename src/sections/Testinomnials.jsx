import React from 'react';
import './testimonials.css';
export default function Testinomnials() {
  return (
    <section
      className='testimonials d-flex flex-column align-items-center text-center'
      style={{ gap: '16rem' }}
    >
      <div className='testimonials__heading d-flex flex-column gap-3'>
        <div className='testimonials__title'>
          <h1 style={{ fontSize: '4rem', fontWeight: 400 }}>TESTIMONIALS</h1>
        </div>
        <div className='testimonials__description'>
          <p className='d-inline-block w-50 '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam excepturi eum similique
            veritatis quo, quod animi nemo incidunt sed alias iure perspiciatis eos at reiciendis
            quos ipsum non inventore sint.
          </p>
        </div>
      </div>

      <div className='testimonials__content d-flex  gap-5 px-3 '>
        <div className='testimonial d-flex flex-column align-items-center'>
          <figure className='testimonial__image'>
            <img src='//unsplash.it/150/150' alt='testimonial image' />
          </figure>
          <div className='testimonial__content d-flex flex-column gap-1'>
            <p className='testimonial__description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum ea,
              doloremque eaque ad eos nobis aspernatur voluptatibus quod non. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptates, doloremque?
            </p>
            <div className='testimonial__footer d-flex justify-content-center align-items-end lh-1 gap-5'>
              <span className='testimonial__name fs-2 fw-bolder'>Jackie Fan</span>
              <span className='testimonial__role fs-4 '>Martial Artist</span>
            </div>
          </div>
        </div>
        <div className='testimonial d-flex flex-column align-items-center'>
          <figure className='testimonial__image'>
            <img src='//unsplash.it/150/150' alt='testimonial image' />
          </figure>
          <div className='testimonial__content d-flex flex-column gap-1'>
            <p className='testimonial__description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum ea,
              doloremque eaque ad eos nobis aspernatur voluptatibus quod non. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptates, doloremque?
            </p>
            <div className='testimonial__footer d-flex justify-content-center align-items-end lh-1 gap-5'>
              <span className='testimonial__name fs-2 fw-bolder'>Jackie Fan</span>
              <span className='testimonial__role fs-4 '>Martial Artist</span>
            </div>
          </div>
        </div>
        <div className='testimonial d-flex flex-column align-items-center'>
          <figure className='testimonial__image'>
            <img src='//unsplash.it/150/150' alt='testimonial image' />
          </figure>
          <div className='testimonial__content d-flex flex-column gap-1'>
            <p className='testimonial__description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum ea,
              doloremque eaque ad eos nobis aspernatur voluptatibus quod non. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptates, doloremque?
            </p>
            <div className='testimonial__footer d-flex justify-content-center align-items-end lh-1 gap-5'>
              <span className='testimonial__name fs-2 fw-bolder'>Jackie Fan</span>
              <span className='testimonial__role fs-4 '>Martial Artist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
