window.addEventListener('load', () => {
	// let xOffset = null
	// let yOffset = null
	let slideWidth = null
	let slideHeight = null
	let activeSlide = null
	let screenWidth = null

	const slides = document.querySelectorAll('.slide')

	function getActiveSlide(param) {
		if (window.innerWidth > 768)
			return parseInt((window.pageXOffset + window.innerWidth) / param) - 1
		else if (window.innerWidth > 560 && window.innerWidth <= 768)
			return Math.round((window.pageYOffset + window.innerHeight) / param) - 1
	}


	function setActiveSlideForMobile() {
		if (yOffset < window.pageYOffset) {
			yOffset = window.pageYOffset
			if (yOffset + window.innerHeight > accumulatedHeight + slides[activeSlide + 1].getBoundingClientRect().height) {
				accumulatedHeight += slides[activeSlide + 1].getBoundingClientRect().height
				activeSlide++
			}
			console.log('getAct', activeSlide)
		} else {
			yOffset = window.pageYOffset
			// console.log(yOffset + window.innerHeight, accumulatedHeight, activeSlide)
			if (yOffset + window.innerHeight < accumulatedHeight) {
				// console.log('in', yOffset + window.innerHeight, accumulatedHeight, activeSlide)
				accumulatedHeight -= slides[activeSlide].getBoundingClientRect().height
				activeSlide--
			}
			console.log('getAct', activeSlide)
		}
	}

	let accumulatedHeight = null
	let yOffset = null
	function setParameters() {
		if (window.innerWidth > 768) {
			// xOffset = window.pageXOffset
			slideWidth = document.querySelector('#slideNumber1').getBoundingClientRect().width
			activeSlide = getActiveSlide(slideWidth)

		} else if (window.innerWidth > 560 && window.innerWidth <= 768) {
			// yOffset = window.pageYOffset
			slideHeight = document.querySelector('#slideNumber1').getBoundingClientRect().height
			activeSlide = getActiveSlide(slideHeight)

		} else {
			yOffset = window.pageYOffset
			if (activeSlide === null) {
				for (let i = 0; i < slides.length; i++) {
					// console.log('for', i, accumulatedHeight, window.pageYOffset)
					accumulatedHeight += slides[i].getBoundingClientRect().height
					if (accumulatedHeight + slides[i + 1].getBoundingClientRect().height > window.pageYOffset + window.innerHeight) {
						activeSlide = i
						break
					}
				}
			} else {
				accumulatedHeight = null
				for (let i = 0; i <= activeSlide; i++) {
					// console.log('for', i, accumulatedHeight, window.pageYOffset)
					accumulatedHeight += slides[i].getBoundingClientRect().height
				}
				// console.log('not null', activeSlide, accumulatedHeight)
			}
		}
		// console.log('setParam', activeSlide, slides[activeSlide])
		window.setTimeout(() => {
			window.addEventListener('scroll', scrollFunc)
		}, 100)
		screenWidth = window.innerWidth
	}

	setParameters()

	function scrollFunc() {
		if (window.innerWidth > 768)
			activeSlide = getActiveSlide(slideWidth)
		else if (window.innerWidth > 560 && window.innerWidth <= 768)
			activeSlide = getActiveSlide(slideHeight)
		else
			setActiveSlideForMobile()
		// console.log('scroll', activeSlide)
	}

	// window.addEventListener('scroll', scrollFunc)

	window.addEventListener('resize', () => {
		window.removeEventListener('scroll', scrollFunc)
		if (screenWidth !== window.innerWidth) {
			if (window.innerWidth > 768)
				slides[activeSlide].scrollIntoView({ inline: "center" })
			else {
				slides[activeSlide].scrollIntoView({ block: "center" })
			}
			setParameters()
		}
	})
})