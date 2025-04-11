// Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.
// Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.

const html = Number(prompt('Zadej úroveň znalostí HTML'));
const css = Number(prompt('Zadej úroveň znalostí HTML'));
const js = Number(prompt('Zadej úroveň znalostí HTML'));

const updateSkill = (id, num) => {
  const idElmBar = document.querySelector(`#${id} .skill__progress`);
  const value = document.querySelector(`#${id} .skill__value`);
  idElmBar.style.width = `${num}%`;
  value.textContent = `${num} / 100`;
};

updateSkill('skill1', html);
updateSkill('skill2', css);
updateSkill('skill3', js);
