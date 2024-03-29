//햄버거메뉴
const toggleBtn = document.querySelector('.hamM')
const menu = document.querySelector('.menu')
const start = document.querySelector('.start')

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active')
  start.classList.toggle('active')
})

// $(window).scroll(function () {
//   let scrollTop = $(window).scrollTop() + $(window).height() / 2;
//   $("section").each(function (index) {
//     if (scrollTop > $(this).offset().top) {
//       $(this).addClass("show");
//     }
//   });
// });
