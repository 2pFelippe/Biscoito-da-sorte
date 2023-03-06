// variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const button = document.getElementById("btn")
const cookie = document.getElementById("cookie")
const main = document.querySelector("main")
let phrase = document.querySelector("#sorte")
let randomNumber = Math.round(Math.random() *10)


// eventos
button.addEventListener('click', screenToggleHideReset)
cookie.addEventListener('click', screenToggleHideTry)
cookie.addEventListener('click', phraseSelector)



//funções
function screenToggleHideTry(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  main.style.height = "height: min(56.4rem, 90%);"
  main.style.padding = "4.8rem 6.4rem 4.8rem";
}

function screenToggleHideReset(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  main.style.height = "height: min(42.8rem, 90%);"
  main.style.padding = "4.8rem 6.4rem 6.4rem";
}

function phraseSelector(){
  switch(randomNumber){
    case 1:
      phrase.textContent = 'A vida trará coisas boas se tiver paciência.'
      break
    case 2:
      phrase.textContent = 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.'
      break
    case 3:
      phrase.textContent = 'Não compense na ira o que lhe falta na razão.'
      break
    case 4:
      phrase.textContent = 'Defeitos e virtudes são apenas dois lados da mesma moeda.'
      break
    case 5:
      phrase.textContent = 'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
      break
    case 6:
      phrase.textContent = 'A maior de todas as torres começa no solo.'
      break
    case 7:
      phrase.textContent = 'Não há que ser forte. Há que ser flexível.'
      break
    case 8:
      phrase.textContent = 'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?'
      break
    case 9:
      phrase.textContent = 'A juventude não é uma época da vida, é um estado de espírito.'
      break
    case 10:
      phrase.textContent = 'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.'
      break
    case 0:
      phrase.textContent = 'Não importa o tamanho da montanha, ela não pode tapar o sol.'
      break
    default:
      screenToggleHideReset()
      break
  }
  randomNumber = Math.round(Math.random() *10)
}

