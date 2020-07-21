window.addEventListener('load', () => {
  const sections = document.querySelectorAll('section')

  for (let i = 1; i < sections.length - 1; i++) {
    let buttons = sections[i].querySelectorAll('.slide__buttons a')
    buttons[0].setAttribute('href', `#${sections[i - 1].id}`)
    buttons[1].setAttribute('href', `#${sections[i + 1].id}`)
  }
})