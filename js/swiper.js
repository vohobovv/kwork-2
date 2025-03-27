const container = document.querySelector('.container')
const likeBtns = document.querySelectorAll('.like-btn')

var swiper = new Swiper('.swiper', {
	spaceBetween: 30,
	slidesPerView: 'auto',
	loop: true,
	speed: 6000,
	freeMode: true,
})

// var swiper = new Swiper('.swiper', {
// 	slidesPerView: 'auto',
// 	spaceBetween: 30,
// 	loop: true,
// 	speed: 6000,
// 	freeMode: true,
// 	navigation: {
// 		nextEl: '.popular-swiper-button-next',
// 		prevEl: '.popular-swiper-button-prev',
// 	},
// 	breakpoints: {
// 		768: {
// 			slidesPerView: 2,
// 			spaceBetween: 30,
// 		},
// 		1024: {
// 			slidesPerView: 'auto',
// 			spaceBetween: 30,
// 		},
// 	},
// })

likeBtns.forEach(likeBtn => {
	likeBtn.addEventListener('click', () => {
		likeBtn.classList.toggle('active')
		likeBtn.classList.toggle('pulse')
	})
})
