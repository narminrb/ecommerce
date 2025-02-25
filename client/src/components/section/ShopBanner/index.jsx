import React from 'react';
import HeaderImage from '../../../assets/Image Placeholder header.png';
import s from './style.module.scss'
import BreadCrumb from '@/components/shared/BreadCrumb';

const ShopBanner = () => {
  return (
    <div>
      <section className="w-full mx-auto max-w-screen-xl">
        <div 
          className="w-full h-[392px] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center" 
          style={{ backgroundImage: `url(${HeaderImage})` }} 
        >
            <div>
                <BreadCrumb/>
            </div>
          <div>
            <h1 className={s.bannerName}>
            Shop Page
            </h1>
          </div>
          <div className="w-full mx-auto">
            <p className={s.desc}>
            Let’s design the place you always imagined.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShopBanner;
