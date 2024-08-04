var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 768px
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is > 768px
      769: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
  });
  

  let btn = document.querySelector(".toggle");
  let icon = document.querySelector(".fa-bars");
  let popup = document.querySelector(".popup")


  icon.addEventListener("click",function(){
    if(icon.classList.contains("fa-bars")){
        icon.classList.replace("fa-bars", "fa-times")
        popup.style.display = "block"
        document.querySelector('.popup').style.display = 'flex';
        document.body.classList.add('no-scroll');
      
        // icon.style.display = "none"
    }else{
        icon.classList.replace("fa-times", "fa-bars")
         popup.style.display = "none"
        // icon.style.display = "none"
    }
  })

  function showPopup() {
    document.querySelector('.popup').style.display = 'flex';
    document.body.classList.add('no-scroll');
  }
  
  function hidePopup() {
    document.querySelector('.popup').style.display = 'none';
    document.body.classList.remove('no-scroll');
  }