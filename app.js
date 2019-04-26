
function appearSkillList() {
  let skillsList = document.querySelector('.skills-list');
  let introPositionList = skillsList.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.4;
    // console.log(screenPosition)
    // console.log(introPositionList)

  if(introPositionList < screenPosition) {
    skillsList.classList.add('skills-appear')
    console.log("hecho")
  }else if(introPositionList > screenPosition) {
    skillsList.classList.remove('skills-appear')
    console.log("removed")
  }
}

window.addEventListener('scroll', appearSkillList)

// let skillsList = document.querySelector('#skills-list-effect');
