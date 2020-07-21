window.addEventListener('load', ()=>{
  const cur = document.querySelectorAll('.slide__numof .slide__cur')
  const numOf = document.querySelectorAll('.slide__numof .slide__of')
  const amountOfSection = document.querySelectorAll('section').length
  
  for(let i = 0; i < amountOfSection; i++){
    cur[i].innerHTML = `${i + 1}`
    numOf[i].innerHTML = `/ ${amountOfSection}`
  }
})