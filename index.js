console.log('funguju!');

const skillsHTML = Number(prompt('Jakou úroveň máš v HTML? Zadej číslo od 0 do 100)'));
const skillsCSS = Number(prompt('Jakou úroveň máš v CSS?  Zadej číslo od 0 do 100'));
const skillsJS = Number(prompt('Jakou úroveň máš v JavaScriptu?  Zadej číslo od 0 do 100'));

const updateSkill = (id, level) => {
  const skillElement = document.querySelector(`#${id} .skill__progress`);
  skillElement.style.width = `${level}%`;
};

updateSkill('skill1', skillsHTML);
updateSkill('skill2', skillsCSS);
updateSkill('skill3', skillsJS);
