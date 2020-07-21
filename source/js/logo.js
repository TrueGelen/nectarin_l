window.addEventListener('load', () => {
	const logo = document.querySelector('.fixedLogo')
	const wrapper = document.querySelector('#wrapper')
	const slide = wrapper.querySelector('.slide')

	function getPropertyOfElement(element, property) {
		if (element.style[property] === '') {
			return element.currentStyle ? element.currentStyle[property] : getComputedStyle(element, null)[property]
		} else {
			return element.style[property]
		}
	}

	function buildLogo() {
		let clientHeight = window.innerHeight
		let wrapperHeight = parseInt(getPropertyOfElement(wrapper, 'height'))
		if (window.innerWidth > 768) {
			let top = null
			if (window.pageXOffset > (slide.getBoundingClientRect().width / 2)) {
				top = window.innerWidth > 1450 ?
					((clientHeight - wrapperHeight) / 2) + (wrapperHeight / 100 * 7) :
					((clientHeight - wrapperHeight) / 2) + 10
			} else {
				top = ((clientHeight - wrapperHeight) / 2) + (wrapperHeight / 100 * 7)
			}
			logo.style.top = `${top}px`
		} else {
			logo.style.top = ''
		}
	}

	buildLogo()

	window.addEventListener('scroll', () => {
		if (window.pageXOffset < slide.getBoundingClientRect().width)
			buildLogo()
	})

	window.addEventListener('resize', () => {
		buildLogo()
	})

})