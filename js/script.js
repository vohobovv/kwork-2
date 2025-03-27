// const container = document.querySelector('.container')
// const likeBtns = document.querySelectorAll('.like-btn')

// var swiper = new Swiper('.swiper', {
// 	spaceBetween: 30,
// 	slidesPerView: 'auto',
// 	loop: true,
// 	speed: 6000,
// 	freeMode: true,
// 	allowTouchMove: false,
// 	autoplay: {
// 		delay: 0,
// 	},
// })

// function stopAutoPlay() {
// 	const swiperTranslate = swiper.getTranslate()
// 	swiper.setTranslate(swiperTranslate)
// 	swiper.autoplay.stop()
// }

// function startAutoPlay() {
// 	swiper.slideTo(swiper.activeIndex, 300, false)
// 	swiper.autoplay.start()
// }

// container.addEventListener('mouseenter', () => stopAutoPlay())
// container.addEventListener('mouseleave', () => startAutoPlay())

// likeBtns.forEach(likeBtn => {
// 	likeBtn.addEventListener('click', () => {
// 		likeBtn.classList.toggle('active')
// 		likeBtn.classList.toggle('pulse')
// 	})
// })

// Menu
const menu = document.querySelector('.navbar')
const menuBtn = document.querySelector('#menuBtn')
const body = document.querySelector("body")

menuBtn.addEventListener('click', function () {
	menu.classList.remove('hidden')
})

function registration(){
	window.location.href = "https://flagman.casino/ru/registration?stag=220946_67e3a49ec7131ffbdfd8c20e&affb_id=97&al_id=9c3505bd5587ea267f6700c4911cd50e&btag=r7_396&http_referrer=http%3A%2F%2Fkometa118.top%2F&tr_src=cross_brand";
}