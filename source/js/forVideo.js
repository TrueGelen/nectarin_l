window.addEventListener('load', () => {
  const video50 = document.querySelector('#page-wrapper #wrapper .slide50 .template2__video')
  const btn50 = document.querySelector('#page-wrapper #wrapper .slide50 .template2__button')

  btn50.addEventListener('click', () => {
    const path = document.querySelector('#page-wrapper #wrapper .slide50 .template2__video source').getAttribute('data-src')
    video50.src = path
    video50.setAttribute('controls', '')
  })


  const video32 = document.querySelector('#page-wrapper #wrapper .slide32 .template2__video')
  const btn32 = document.querySelector('#page-wrapper #wrapper .slide32 .template2__button')

  btn32.addEventListener('click', () => {
    const path = document.querySelector('#page-wrapper #wrapper .slide32 .template2__video source').getAttribute('data-src')
    video32.src = path
    video32.setAttribute('controls', '')
  })
})