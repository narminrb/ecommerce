import React from 'react'
import FooterImage from '../../../assets/Image Placeholder.png'
import s from './style.module.scss'
import icon from '../../../assets/email.png'

const FooterBanner = () => {
  return (
    <div>
        <section className="w-full">
    <div className="w-full h-[360px] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center"
    style={{ backgroundImage: `url(${FooterImage})` }} 
    >
        <div>
            <h1 className={s.footbanname}>Join Our Newsletter</h1>
        </div>
        <div>
            <p className={s.footbandesc}>Sign up for deals, new products and promotions</p>
        </div>
        <div className="w-full flex justify-center items-center my-5">
            <form className="w-full flex justify-center">
              <div className={s.inputdiv}>
                <img src={icon} alt="" />
                <input
                  type="text"
                  className={s.input}
                  placeholder="Enter your email"
                />
                <p className={s.signup}>Signup</p>
              </div>
            </form>
          </div>
    </div>
</section>
    </div>
  )
}

export default FooterBanner