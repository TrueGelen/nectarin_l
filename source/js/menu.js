window.addEventListener('load', () => {

  const burger = document.querySelector('#burger')
  const burgerLines = burger.querySelectorAll('.burger__line')
  const menu = document.querySelector('#menu')
  const menuItems = menu.querySelectorAll('.menu__items a')
  const close = menu.querySelector('.menu__close')
  const bgForMobMenu = document.querySelector('#bgForMobMenu')

  //-----desktop menu----

  function showMenu() {
    if (window.innerWidth > 768) {
      burger.style.opacity = 0

      menu.classList.remove('hideMenu')
      menu.classList.add('showMenu')

      close.classList.remove('hideClose')
      close.classList.add('showClose')
    } else {
      if (!bgForMobMenu.classList.contains('bgForMobMenu_opened')) {
        bgForMobMenu.classList.add('bgForMobMenu_opened')
        menu.style.display = 'block';
        [...burgerLines].forEach((line, ind) => {
          // console.log(line, ind)
          line.classList.add(`burger__line_close${ind + 1}`)
        })
      } else {
        hideMenu()
      }
    }
  }

  function hideMenu() {
    if (window.innerWidth > 768) {
      burger.style.opacity = 1

      menu.classList.remove('showMenu')
      menu.classList.add('hideMenu')

      close.classList.remove('showClose')
      close.classList.add('hideClose')
    } else {
      bgForMobMenu.classList.remove('bgForMobMenu_opened')
      menu.style.display = 'none';
      [...burgerLines].forEach((line, ind) => {
        line.classList.remove(`burger__line_close${ind + 1}`)
      })
    }
  }

  burger.addEventListener('click', showMenu)

  close.addEventListener('click', hideMenu)

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', () => {
      hideMenu()
    })
  }

  window.addEventListener('resize', () => {
    menu.classList.remove('showMenu')
    menu.classList.remove('hideMenu')
    close.classList.remove('showClose')
    close.classList.remove('hideClose')
    bgForMobMenu.classList.remove('bgForMobMenu_opened');
    [...burgerLines].forEach((line, ind) => {
      line.classList.remove(`burger__line_close${ind + 1}`)
    })
    burger.style.opacity = ''
    menu.style.display = ''
  })

  //------------------------menu1-----------

  // const nectarinLogo = document.querySelector('#logonectarin')

  // function buildLogoAndBurger() {
  //   if (window.innerWidth > 768) {
  //     burger.classList.remove('hideMenuOnMobile')
  //     nectarinLogo.classList.remove('hideMenuOnMobile')
  //   }
  // }

  // let curPosY = 0
  // function menuWatcher() {
  //   if (window.innerWidth <= 768) {
  //     if (curPosY < window.pageYOffset) {
  //       burger.classList.add('hideMenuOnMobile')
  //       nectarinLogo.classList.add('hideMenuOnMobile')
  //       curPosY = window.pageYOffset
  //     } else {
  //       burger.classList.remove('hideMenuOnMobile')
  //       nectarinLogo.classList.remove('hideMenuOnMobile')
  //       curPosY = window.pageYOffset
  //     }
  //   }
  // }

  // // buildLogoAndBurger()
  // window.addEventListener('resize', () => {
  //   // buildLogoAndBurger()
  //   buildLogoAndBurger()
  // })

  // window.addEventListener('scroll', () => {
  //   menuWatcher()
  // })

})