
function appearSkillList() {
  let skillsList = document.querySelector('.skills-list');
  let buttonHome = document.querySelector('.buttonHome')
  let introSkillsPositionList = skillsList.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.23;

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

  if(introProjectsPositionList < screenPosition) {
    projectsList.classList.add('projects-appear')

  }else if(introProjectsPositionList > screenPosition) {
    projectsList.classList.remove('projects-appear')

  }
}

function appearAboutSection() {
  let aboutDescription = document.querySelector('.about-center');
  let aboutSectionPositionList = aboutDescription.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/2;

  if(aboutSectionPositionList < screenPosition) {
    aboutDescription.classList.add('about-appear')

  }else if(aboutSectionPositionList > screenPosition) {
    aboutDescription.classList.remove('about-appear')
  }
}

// let educationButton = document.querySelector('.education-button')
// let educationBox = document.querySelector('.education-box')
//
// educationButton.addEventListener('click', function() {
//   educationBox.classList.toggle('appear-education-box')
// })


// ################### SIDE-BAR-EFFECT ###################

let sideBarButton = document.querySelector('.navbar-hamburguer__logo')
let sideBarAppear = document.querySelector('.side-bar')
let mainContainer = document.querySelector('.main-container')

sideBarButton.addEventListener('click', function() {
  sideBarAppear.classList.toggle('appear-sidebar');
})

mainContainer.addEventListener('click', function() {
  sideBarAppear.classList.remove('appear-sidebar')
})

// ################### SIDE-BAR-SUBMENU-EFFECT ###################

let siderSubMenuButton = document.querySelector('.sider-bar__submenuButton');
let siderBarSubMenu = document.querySelector('.sider-bar_submenu-list');
let siderSubMenuButton2 = document.querySelector('.sider-bar__submenuButton2');
let siderBarSubMenu2 = document.querySelector('.sider-bar_submenu-list2');
let siderSubMenuButton3 = document.querySelector('.sider-bar__submenuButton3');
let siderBarSubMenu3 = document.querySelector('.sider-bar_submenu-list3');

siderSubMenuButton.addEventListener('click', function() {
  siderBarSubMenu.classList.toggle('sider-bar__submenu-effect')
})
siderSubMenuButton2.addEventListener('click', function() {
  siderBarSubMenu2.classList.toggle('sider-bar__submenu-effect2')
})
siderSubMenuButton3.addEventListener('click', function() {
  siderBarSubMenu3.classList.toggle('sider-bar__submenu-effect3')
})

// ################### END SIDE-BAR-SUBMENU-EFFECT ###################
// ################### END SIDE-BAR-EFFECT ###################

// ################### NAVBAR-SCROLL-EFFECT ###################

let prevScroll = window.pageYOffset;
let navbar = document.querySelector('.navbar');
window.onscroll = function() {
  let currentScroll = window.pageYOffset;
  if(prevScroll > currentScroll) {
    navbar.style.top = "0";
  }else if(currentScroll === 0) {
    navbar.style.top = "0";
  }else {
    navbar.style.top = "-70px"
  }

  prevScroll = currentScroll;
}

// ################### END NAVBAR-SCROLL-EFFECT ###################

window.addEventListener('scroll', appearAboutSection)
window.addEventListener('scroll', appearSkillList)
window.addEventListener('scroll', appearProjectsList)

// let skillsList = document.querySelector('#skills-list-effect');
