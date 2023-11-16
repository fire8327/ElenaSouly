/* menu */
$("#toggler").click(()=>{
    $("#menu").toggleClass("max-lg:-translate-y-full")
    $("#menu").toggleClass("max-lg:top-0")
    $("#menu").toggleClass("max-lg:top-[calc(100%+1px)]")
    $("#toggler").toggleClass("h-5")
    $("#toggler > :nth-child(1)").toggleClass("rotate-45")
    $("#toggler > :nth-child(2)").toggleClass("opacity-0")
    $("#toggler > :nth-child(3)").toggleClass("-rotate-45")
    $("body").toggleClass("overflow-hidden")
    $("#overlay").toggleClass("hidden")
})


/* slider */
const swiper = new Swiper('.reviwsSlider', {
  spaceBetween: 20,
  breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
  },
  loop: true,  
  navigation: {
    nextEl: '.reviewsNext',
    prevEl: '.reviewsPrev',
  },
});


/* dropdowns */
$(".dropdown").each((i,el) => {
  $(el).find(".dropdownToggler").click(() => {
    $(el).find(".dropdownList").toggle(500)
    $(el).find(".dropdownToggler").find("img").toggleClass("rotate-180")
  })
})


/* scroll to top */
$('#scroll_top').click(function(){
  $('html, body').animate({scrollTop: 0}, 500)
  return false
});


/* scroll to links */
$("a[href^='#']").on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate({
      scrollTop: $(href).offset().top - 50
  });

  return false;
});


/* form submit */
const token = "6482911685:AAEsdRXbyi4QPmVIdIH3-cjgAY01znB4ogU"
const chat_id = "-4062685656"
const url = `https://api.telegram.org/bot${token}/sendMessage`

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
        
    let message = `<b>Заявка на курс.</b>\n`;
    message += `<b>Имя: </b> ${this.userName.value}\n`;
    message += `<b>Email: </b> ${this.userEmail.value}\n`;
    message += `<b>Номер телефона: </b> ${this.userPhone.value}`;

    axios.post(url, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.userName.value = ""
        this.userEmail.value = ""
        this.userPhone.value = ""
        $("#success").show(500)
        setTimeout(() => {
            $("#success").hide(500)
        }, 3000);
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('Конец');
    })  
})