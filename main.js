let side = 1 /* class="side"*/

const rollDice = () => {
    side = Math.floor(Math.random() * 6) + 1;



    const dice = document.querySelector('#dice');

    if (side === 1) {
        dice.className = 'side-1';

    } else if (side === 2) {
        dice.className = 'side-2';

    } else if (side === 3) {
        dice.className = 'side-3';

    } else if (side === 3) {
        dice.className = 'side-3';

    } else if (side === 4) {
        dice.className = 'side-4';

    } else if (side === 5) {
        dice.className = 'side-5';

    } else if (side === 6) {
        dice.className = 'side-6';

    } else {
        return false;
    }


}