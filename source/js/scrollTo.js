window.addEventListener('load', function () {

	//getting link elements
	const navLinks = document.querySelectorAll('.menu .menu__items a')
	const btn = document.querySelector('.uniq1 .uniq1__firstButton')
  const links = [...navLinks, btn]

	//get id then get element to which we need to go and set listeners on click
	links.forEach(item => {
		let id = item.getAttribute('href').replace('#', '')
    let elem = document.querySelector(`#${id}`)
		item.addEventListener('click', function (e) {
      console.log(1)
			e.preventDefault()
			elem.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
		})
	})
})