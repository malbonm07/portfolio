
function appearSkillList() {
  let skillsList = document.querySelector('.skills-list');
  let buttonHome = document.querySelector('.buttonHome')
  let introSkillsPositionList = skillsList.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.23;
    // console.log(screenPosition)
    // console.log(introPositionList)

  if(introSkillsPositionList < screenPosition) {
    skillsList.classList.add('skills-appear')
    buttonHome.classList.add('buttonHome-effect')
  }else if(introSkillsPositionList > screenPosition) {
    skillsList.classList.remove('skills-appear')
    buttonHome.classList.remove('buttonHome-effect')
  }
}

function appearProjectsList() {
  let projectsList = document.querySelector('.projects-center');
  let introProjectsPositionList = projectsList.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.23;
    // console.log(screenPosition)
    // console.log(introPositionList)

  if(introProjectsPositionList < screenPosition) {
    projectsList.classList.add('projects-appear')
    console.log("hecho")
  }else if(introProjectsPositionList > screenPosition) {
    projectsList.classList.remove('projects-appear')
    console.log("removed")
  }
}

let sideBarButton = document.querySelector('.navbar-hamburguer__logo')
let sideBarAppear = document.querySelector('.side-bar')
let mainContainer = document.querySelector('.main-container')

sideBarButton.addEventListener('click', function() {
  sideBarAppear.classList.toggle('appear-sidebar');
})

mainContainer.addEventListener('click', function() {
  sideBarAppear.classList.remove('appear-sidebar')
})

window.addEventListener('scroll', appearSkillList)
window.addEventListener('scroll', appearProjectsList)

// let skillsList = document.querySelector('#skills-list-effect');
