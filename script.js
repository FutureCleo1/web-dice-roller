

function rollDice() {

    // Generate a random number between 1 and 6.
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    const die3 = Math.floor(Math.random() * 6) + 1;
    const die4 = Math.floor(Math.random() * 6) + 1;
    const die5 = Math.floor(Math.random() * 6) + 1;


    // Display the random values.
    document.getElementById("die1").value = die1;

    document.getElementById("die2").value = die2;

    document.getElementById("die3").value = die3;

    document.getElementById("die4").value = die4;

    document.getElementById("die5").value = die5;
}