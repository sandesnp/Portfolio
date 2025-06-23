import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './works.css';

export default function Works() {
  return (
    <section className='works d-flex flex-column gap-5'>
      <div className='works__heading d-flex flex-column gap-3 text-center'>
        <div className='works__heading-title'>
          <h1 style={{ fontSize: '4rem', fontWeight: 400 }}>MY WORKS</h1>
        </div>
        <div className='works__description'>
          <p className='d-inline-block w-50'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ea fuga itaque voluptas ex
            a, aperiam reprehenderit consequatur culpa repellendus odio repellat, eum tempora minus
            quia temporibus quas excepturi et est ut? Eaque ea explicabo dignissimos obcaecati ex
            tenetur id.
          </p>
        </div>
      </div>

      <div className='works__content flex-grow-1'>
        <Swiper
          className='my-swiper h-100'
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src='https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/68505dfd9a5cb5b20e64fd8c_30998d38-fe3f-466a-a8f6-32f37b36c3c1.webp' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/67883e48d8df196729ad667b_c0427aac-f1f9-494a-8d62-759528673747.webp' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://cdn.prod.website-files.com/63e230081c53f7989f5e0f64/683d229403c4fb4609ccde01_creative-design-agency-website.webp.webp' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://static.wixstatic.com/media/ea6ac8_ec098748f04f42e9b5b747ce109de1ff~mv2.jpg/v1/fill/w_924,h_1586,al_c,q_85,enc_auto/ea6ac8_ec098748f04f42e9b5b747ce109de1ff~mv2.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://ohmedia.ca/frontend/images/collage-photos/homepage-head/home-header-1.1b660008.jpg' />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
