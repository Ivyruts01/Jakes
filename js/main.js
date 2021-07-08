
$('#hamburger').click(function(){
    $('.main-humb').toggleClass('open');
    $('.menu').toggleClass('open');
});

$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    dots: false,
    centerMode: true,
    centerPadding: '0',
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 760,
          settings: "unslick"
        }

      ]
    
  });

let sideTabs = document.getElementsByClassName("side-tabs")[0];
let tabScroll = document.getElementsByClassName("scrollbar")[0];
let tabsInfor = document.getElementsByClassName("tabs-infor")[0];

let tabsPane = sideTabs.getElementsByClassName("mytab");

for(let i = 0;i < tabsPane.length; i++){
    tabsPane[i].addEventListener("click", function(){
        sideTabs.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabsInfor.getElementsByClassName("active")[0].classList.remove("active");
        tabsInfor.getElementsByClassName("list")[i].classList.add("active");

        tabScroll.style.top = `calc(calc(100% / 3) * ${i} + 10%)`;
    });
}

