window.addEventListener('load', () => {
	const burger = document.querySelector('.burger')
	const wrapper = document.querySelector('#page-wrapper #wrapper')
	const slide = wrapper.querySelector('.slide')

	// function position(){
	//   if(window.innerWidth > 1450){
	//     let y = wrapper.getBoundingClientRect().height / 2 - 48 - 15
	//     burger.style.transform = `translateY(${-y}px)`
	//   }else if (window.innerWidth <= 1450 && window.innerWidth > 1200){
	//     let y = wrapper.getBoundingClientRect().height / 2 - 48
	//     burger.style.transform = `translateY(${-y}px)`
	//   }else if (window.innerWidth <= 1200 && window.innerWidth > 1050){
	//     let y = wrapper.getBoundingClientRect().height / 2 - 60
	//     burger.style.transform = `translateY(${-y}px)`
	//   }else if (window.innerWidth <= 1050 && window.innerWidth > 768){
	//     let y = wrapper.getBoundingClientRect().height / 2 - 70
	//     burger.style.transform = `translateY(${-y}px)`
	//   }else{
	//     burger.style.transform = ``
	//   }
	// }


	function position() {
		if (window.innerWidth > 1450) {
			let y = wrapper.getBoundingClientRect().height / 2 - 48 - 15
			burger.style.transform = `translateY(${-y}px)`
		} else if (window.innerWidth <= 1450 && window.innerWidth > 1200) {
			let y = window.pageXOffset > slide.getBoundingClientRect().width / 2 ?
				wrapper.getBoundingClientRect().height / 2 - 10 :
				wrapper.getBoundingClientRect().height / 2 - 40
			burger.style.transform = `translateY(${-y}px)`
		} else if (window.innerWidth <= 1200 && window.innerWidth > 768) {
			let y = window.pageXOffset > slide.getBoundingClientRect().width / 2 ?
				wrapper.getBoundingClientRect().height / 2 - burger.getBoundingClientRect().height - 10 :
				wrapper.getBoundingClientRect().height / 2 - burger.getBoundingClientRect().height - 35
			burger.style.transform = `translateY(${-y}px)`
		} else {
			burger.style.transform = ``
		}
	}

	position()

	window.addEventListener('scroll', () => {
		position()
	})

	window.addEventListener('resize', () => {
		position()
		console.log(window.innerWidth)
	})
})