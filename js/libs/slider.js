
$('.slider').slick({
   dots: true,
   infinite: true,
   arrows: true,
   speed: 300,
   slidesToShow: 1,
   prevArrow:`<button class= "slider-arrow slider-prev"><svg width="40" height="67" viewBox="0 0 40 67" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M35.9815 6.10352e-05C36.5073 -0.00276947 37.0285 0.0911026 37.5153 0.276299C38.0021 0.461487 38.4448 0.73436 38.8182 1.07926C39.1927 1.42522 39.4899 1.8368 39.6927 2.29028C39.8956 2.74377 40 3.23017 40 3.72144C40 4.2127 39.8956 4.69911 39.6927 5.15259C39.4899 5.60608 39.1927 6.01766 38.8182 6.36361L9.652 33.4924L38.8182 60.6212C39.5705 61.322 39.9932 62.2724 39.9932 63.2634C39.9932 63.7541 39.8894 64.24 39.6878 64.6933C39.4862 65.1467 39.1907 65.5586 38.8182 65.9056C38.4457 66.2526 38.0034 66.5278 37.5167 66.7156C37.03 66.9033 36.5083 67 35.9815 67C34.9175 67 33.8971 66.6063 33.1448 65.9056L1.18182 36.1346C0.807346 35.7886 0.510105 35.3771 0.307266 34.9236C0.104427 34.4701 0 33.9837 0 33.4924C0 33.0012 0.104427 32.5147 0.307266 32.0613C0.510105 31.6078 0.807346 31.1962 1.18182 30.8502L33.1448 1.07926C33.5181 0.73436 33.9608 0.461487 34.4476 0.276299C34.9344 0.0911026 35.4556 -0.00276947 35.9815 6.10352e-05Z" fill="#F0E3CA"/>
   </svg>
   </button>`,
   nextArrow:`<button class= "slider-arrow slider-next"><svg width="40" height="67" viewBox="0 0 40 67" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M4.01853 66.9999C3.49272 67.0028 2.97147 66.9089 2.48469 66.7237C1.9979 66.5385 1.55515 66.2656 1.18182 65.9207C0.807343 65.5748 0.510112 65.1632 0.307272 64.7097C0.104433 64.2562 0 63.7698 0 63.2786C0 62.7873 0.104433 62.3009 0.307272 61.8474C0.510112 61.3939 0.807343 60.9823 1.18182 60.6364L30.348 33.5076L1.18182 6.37877C0.42948 5.67803 0.0068204 4.72761 0.0068204 3.7366C0.0068204 3.2459 0.110584 2.76001 0.312191 2.30667C0.513799 1.85332 0.809301 1.4414 1.18182 1.09442C1.55434 0.74745 1.99659 0.472215 2.48331 0.284433C2.97004 0.0966511 3.49171 0 4.01853 0C5.08251 0 6.1029 0.393677 6.85524 1.09442L38.8182 30.8654C39.1927 31.2114 39.4899 31.6229 39.6927 32.0764C39.8956 32.5299 40 33.0163 40 33.5076C40 33.9988 39.8956 34.4853 39.6927 34.9387C39.4899 35.3922 39.1927 35.8038 38.8182 36.1498L6.85524 65.9207C6.48192 66.2656 6.03917 66.5385 5.55238 66.7237C5.06559 66.9089 4.54435 67.0028 4.01853 66.9999Z" fill="#F0E3CA"/>
   </svg></button>`,
   responsive: [
      {
      breakpoint: 1024,
      settings: {
            arrows: false,
         }
      },

    ]
});