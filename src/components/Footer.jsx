import React from 'react'
import { Button } from './ui/Button'
import Logo from '../assets/images/logo.png'
import Logo2 from '../assets/images/logo2.svg'

export const Footer = () => {
  return (
    <footer className='mx-auto overflow-hidden'>
        <div className='mx-auto py-12 flex flex-col items-center gap-4 relative
        max-w-screen-sm px-6
        lg:max-w-screen-lg
        xl:max-w-screen-xl lg:px-0'>

          
          <div className='absolute -z-20 -end-12 py-16 px-40 -bottom-8 bg-accent/10 rounded-3xl rotate-[-10deg] blur-3xl'></div>
          <div className='absolute -z-20 -start-12 bottom-0 py-20 px-32 bg-accent/10 rounded-3xl rotate-[135deg] blur-3xl'></div>
          

            <h2 className='font-semibold text-md sm:text-lg lg:text-xl text-white'>Подпишитесь на наши обновления!</h2>
            <form  className='flex-nowrap inline-flex text-md' action='#'>
              {/* <label htmlFor="email" className='text-text2 absolute py-2' >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.58142 3.96997L9.99999 10.7143L17.4178 3.97068" stroke="#F3F4F6" stroke-width="1.71429" stroke-miterlimit="10"/>
                  <path d="M16.4285 3.57141L3.57139 3.57141C2.78242 3.57141 2.14282 4.211 2.14282 4.99998L2.14282 15C2.14282 15.789 2.78242 16.4286 3.57139 16.4286L16.4285 16.4286C17.2175 16.4286 17.8571 15.789 17.8571 15L17.8571 4.99998C17.8571 4.211 17.2175 3.57141 16.4285 3.57141Z" stroke="#F3F4F6" stroke-width="1.71429" stroke-miterlimit="10" stroke-linecap="square"/>
                </svg>
              </label> */}
              <input required type="email" name="email" id="email" placeholder='Ваша почта' className='relative text-accent rounded-l-full placeholder:text-text2 bg-transparent border-[#565E6C] py-3 px-5 border'/>
              <button type='submit' className='py-3 px-5 rounded-r-full bg-accent border border-accent text-white'>Подписаться</button>
            </form>
            <div className='flex flex-row items-center justify-between w-full '>
              <a href="#" className='inline-flex gap-4 items-center group'>
                  <img src={Logo} alt="Logo" className='max-w-12 w-full duration-300 transition-all ease-in-out group-hover:rotate-45'/>
                  <img src={Logo2} alt="Logo" className='max-w-64 w-full'/>
              </a>
              <nav className='flex flex-col text-end text-sm'>
                  <a className='text-accent' href="#main">Главная</a>
                  <a className='text-text2' href="#master-classes">Мастер-классы</a>
              </nav>
            </div>
            {/* <hr className='w-full border-[.025rem] border-text2'/> */}
            <div className='flex flex-row items-center justify-between w-full text-text2 text-sm mt-4'>
                <p>
              © {new Date().getFullYear()} by <a className='ml-1 text-accent' href="https://t.me/w1lqA"> @w1lqA</a>
                </p>
                <div className='flex flex-row items-center gap-2'>
                  <a href="https://mail.mospolytech.ru/" target="_self" title="Mospolytech mail" class="hover:text-accent">
                    <i class="icon is-smoll footer__social-icon" aria-hidden="true">
                    <svg fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="currentColor">
                    <rect height="14" rx="1.5" width="21" x="5.5" y="8.5"></rect>
                    <path d="m5.95652 8.93751 8.84678 6.60639c.7098.53 1.6836.53 2.3934 0l8.8468-6.60639"></path>
                    </g>
                    </svg>
                    </i>
                  </a>

                  <a href="https://vk.com/moscowpolytech" target="_blank" title="Vk" class="hover:text-accent">
                    <i class="icon is-smoll footer__social-icon" aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1611 25C8.27787 25 3.21112 18.6186 3 8H7.44972C7.59588 15.7938 10.8762 19.0951 13.4746 19.7758V8H17.6647V14.7217C20.2306 14.4324 22.9261 11.3694 23.8355 8H28.0254C27.3271 12.1522 24.404 15.2152 22.3253 16.4745C24.404 17.4955 27.7333 20.1672 29 25H24.3877C23.3971 21.7668 20.9289 19.2653 17.6647 18.9249V25H17.1611Z" fill="currentColor"></path>
                    </svg>
                    </i>
                  </a>

                  <a href="https://rutube.ru/channel/23764093/" target="_blank" title="RuTube" class="hover:text-accent">
                    <i class="icon is-smoll footer__social-icon" aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.8293 8.0017H5V25H9.68416V19.4698H18.6597L22.7549 25H28L23.4841 19.4444C24.6592 19.3536 25.7482 18.8314 26.5135 17.9917C27.219 16.9059 27.5428 15.6401 27.439 14.3729V13.0987C27.4601 12.3156 27.3561 11.5339 27.1305 10.7795C26.9314 10.1933 26.5851 9.66023 26.1208 9.22496C25.6225 8.79446 25.0286 8.47246 24.3817 8.28202C23.5485 8.08022 22.6898 7.98591 21.8293 8.0017V8.0017ZM21.072 15.7236H9.68416V11.7479H21.072C21.5322 11.7062 21.9945 11.8045 22.3903 12.0283C22.5237 12.1597 22.6253 12.3166 22.6882 12.4881C22.7511 12.6596 22.7739 12.8417 22.7549 13.0222V14.4494C22.7761 14.6338 22.7545 14.8204 22.6916 14.9963C22.6287 15.1723 22.5259 15.3334 22.3903 15.4687C21.9905 15.6816 21.5292 15.7708 21.072 15.7236V15.7236Z" fill="currentColor"></path>
                    </svg>
                    </i>
                  </a>

                  <a href="https://zen.yandex.ru/id/602cd847cc37f22d8e576b58" target="_blank" title="Яндекс дзен" class="hover:text-accent">
                    <i class="icon is-smoll footer__social-icon" aria-hidden="true">
                    <svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m0 0h32v32h-32z"></path><path d="m13.096 9.529c1.612-.323 3.264-.375 4.904-.392-.024 2.067.1 4.193-.507 6.196a3.186 3.186 0 0 1 -2.13 2.151c-2.012.62-4.15.478-6.229.511.096-1.882 0-3.823.615-5.632.498-1.466 1.844-2.543 3.347-2.834m-13.091-.395c1.535.01 3.077.083 4.594.33 1.498.23 2.95 1.15 3.541 2.587.787 1.88.591 3.963.754 5.949-1.795-.02-3.61.042-5.386-.287-1.008-.193-2.078-.636-2.608-1.57-.687-1.214-.763-2.646-.843-4.008-.012-1.001-.075-2-.052-3m9.134-9.131c2.074.033 4.21-.112 6.218.51a3.17 3.17 0 0 1 2.136 2.154c.606 2.002.483 4.128.507 6.195-1.727-.012-3.478-.042-5.162-.453-1.454-.348-2.681-1.473-3.133-2.901-.56-1.78-.464-3.666-.566-5.505m-6.215.425c1.942-.513 3.975-.393 5.964-.429-.117 1.883-.006 3.824-.628 5.633a4.374 4.374 0 0 1 -3.095 2.784c-1.687.402-3.435.435-5.16.447.055-2.103-.095-4.274.565-6.304.327-1.084 1.276-1.867 2.354-2.13" fill="currentColor" transform="translate(7 7)"></path></g></svg>
                    </i>
                  </a>

                  <a href="https://ok.ru/group/58571994300421" target="_blank" title="Одноклассники" class="hover:text-accent">
                    <i class="icon is-smoll footer__social-icon" aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4023 20.3814C13.9293 20.2278 12.6011 19.865 11.464 18.9756C11.323 18.865 11.1773 18.7583 11.0485 18.6347C10.5508 18.1567 10.5007 17.6093 10.8945 17.0451C11.2314 16.5623 11.797 16.4332 12.3848 16.7104C12.4987 16.7641 12.6071 16.8312 12.711 16.9032C14.8302 18.3593 17.7414 18.3995 19.8685 16.9687C20.0792 16.8071 20.3045 16.6754 20.5656 16.6081C21.0732 16.4778 21.5467 16.6642 21.8191 17.1084C22.1303 17.6157 22.1264 18.1108 21.7429 18.5046C21.1546 19.1084 20.4472 19.5452 19.6611 19.85C18.9179 20.1382 18.1037 20.2833 17.298 20.3796C17.4196 20.5119 17.4769 20.577 17.5529 20.6534C18.647 21.7527 19.7459 22.8474 20.8364 23.9501C21.208 24.3258 21.2856 24.7917 21.081 25.2287C20.8573 25.7063 20.3566 26.0205 19.8657 25.9869C19.5547 25.9654 19.3121 25.8105 19.0966 25.5934C18.2709 24.7626 17.4297 23.9471 16.6208 23.1005C16.3854 22.8544 16.2721 22.9009 16.0644 23.1147C15.2337 23.9698 14.3896 24.8118 13.5404 25.649C13.1591 26.0249 12.7054 26.0925 12.2632 25.8778C11.7932 25.65 11.4941 25.1702 11.5172 24.688C11.5331 24.3618 11.6935 24.1127 11.9174 23.8892C13.0001 22.808 14.0799 21.724 15.1601 20.6411C15.2315 20.569 15.2982 20.4926 15.4023 20.3814Z" fill="currentColor"></path>
                    <path d="M16.2986 16.6176C13.6708 16.6086 11.516 14.4301 11.5313 11.7981C11.5465 9.1371 13.7026 6.99266 16.3563 7.00002C19.0154 7.00718 21.1497 9.18247 21.1363 11.8712C21.1228 14.4978 18.9531 16.6267 16.2986 16.6176ZM18.6868 11.8045C18.6823 10.4977 17.6415 9.45729 16.3372 9.4561C15.022 9.4547 13.9719 10.514 13.982 11.8328C13.9918 13.1346 15.0415 14.1677 16.3494 14.1629C17.6532 14.1583 18.6912 13.1112 18.6868 11.8045Z" fill="currentColor"></path>
                    </svg>
                    </i>
                  </a>

                  <a href="https://t.me/mospolytech" target="_blank" title="Telegram" class="hover:text-accent">
                    <i class="icon is-smoll footer__social-icon" aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.2949 8.15008C23.2949 8.15008 25.1451 7.41422 24.9909 9.20131C24.9395 9.93717 24.477 12.5127 24.1172 15.2984L22.8838 23.5506C22.8838 23.5506 22.781 24.7595 21.8559 24.9697C20.9308 25.1799 19.5432 24.2339 19.2862 24.0236C19.0807 23.8659 15.4318 21.5007 14.147 20.3443C13.7872 20.0289 13.3761 19.3982 14.1983 18.6623L19.5946 13.4062C20.2113 12.7755 20.8281 11.3038 18.2584 13.0909L11.0634 18.0842C11.0634 18.0842 10.2411 18.6098 8.69934 18.1368L5.35877 17.0855C5.35877 17.0855 4.12534 16.2971 6.23245 15.5087C11.3718 13.0383 17.6931 10.5153 23.2949 8.15008Z" fill="currentColor"></path>
                    </svg>
                    </i>
                  </a>
                </div>
            </div>
        </div>
    </footer>
  )
}
