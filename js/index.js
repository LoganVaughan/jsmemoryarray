
const spellBook = ['Expelliarmus', 'Accio', 'Expecto Patronum', 'Wingardium Leviosa'];
let mannaPoints = 50;

const castSpell = () =>{
    console.log('huzzah! a spell has been cast')
    // choose a random spell from the array 
    const randomIndex = Math.floor(Math.random() * spellBook.length);
    console.log('randomIndex', randomIndex);
    const randomSpell = spellBook[randomIndex];
    console.log(randomSpell);

    // show the user the spell on the screen 
    const spellElement = document.getElementById('spell');
    const message = `You cast the ${randomSpell} spell`;
    spellElement.textContent = message;

    // subtract 5 manna points from the total 
    mannaPoints = mannaPoints -5;
    console.log('mannaPoints', mannaPoints)

    // show user new manna points on screen
    const mannaElement = document.getElementById('manna');
    mannaElement.textContent = mannaPoints;
}