//Make objects of each character with attack-power, HP, counter-attack-power
var luke = {
    name: "Luke Skywalker",
    attack: 10,
    counter: 15,
    health: 150,
};

var maul = {
    name: "Darth Maul",
    attack: 12,
    counter: 17,
    health: 170,
};

var kenobi = {
    name: "Obi-wan Kenobi",
    attack: 11,
    counter: 16,
    health: 160,
}

var vader = {
    name: "Darth Vader",
    attack: 15,
    counter: 15,
    health: 150,
}

var han = {
    name: "Han Solo",
    attack: 9,
    counter: 12,
    health: 120,
}

var battleStart = false;



//write function for when a character is clicked
selectCharacter = function() {

    $(this).detatch().append("#arena-left");
    //Player character will move to the "#arena-left" div.

    //Change text in "#instructions" div to say "Select an opponent"

}

selectOpponent = function() {
//write a function for when an opponent is clicked

    //Opponent moves to the "#arena-right" div

    //Change instructions text to say, "Click 'Fight!' to begin battle"
}

//Button click event
    
    //opponent health - champion attack
    //update opponent health display
    //update "#game-text" with champion attacked with X damage and opponent defended with Y damage

    //champion attack += champion attack
    //update champion attack display

    //champion health - opponent attack
    //update champion health display

    //update "#game-text" with champion attacked with X damage and opponent defended with Y damage

    //if opponent health = 0, change "#instructions" div to say "Choose another opponent"
        //move opponent to graveyard
    //if champion health = 0, alert "You have died"
        //restart game