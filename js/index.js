const memoryGame = {};
memoryGame.rowNum = 6;
memoryGame.columnNum = 5;
memoryGame.scoreNum = 0;
memoryGame.moves = 0;
memoryGame.picNum = memoryGame.rowNum * memoryGame.columnNum;


memoryGame.start = () => {
    memoryGame.createCards();
    memoryGame.newGame();
    memoryGame.score();
    memoryGame.imges();
};
memoryGame.newGame = () => {
    var button = $('<button/>');
    button.addClass('.buttunNew');
    button.text('New Game');
    $('#newGame').append(button);
    // button.attr('click', )
}
memoryGame.score = () => {
    $('#score').text(`Moves: ${memoryGame.moves}, Matches: ${memoryGame.scoreNum}`)
}
memoryGame.createCards = () => {
    var counter = 0
    for (let i = 0; i < memoryGame.columnNum; i++) {
        for (let j = 0; j < memoryGame.rowNum; j++) {
            var newCard = $('<div><img><div/>');
            newCard.addClass('card');
            newCard.addClass(`${counter}`);
            // .attr('click', memoryGame.clickCard);
            
            $('#cardsBoard').append(newCard);
            counter++;
        };
    };
    $('img').click(memoryGame.clickCard);
    $('img').css({ "opacity": "0" });
};
memoryGame.imges = () => {
    var x = 0;
    var arr = [];
    var y = 0;
    for (let i = 0; i < memoryGame.picNum; i++) {
        x = Math.floor((Math.random() * memoryGame.picNum));
        while (arr.includes(x) === true) {
            x = Math.floor((Math.random() * memoryGame.picNum));
        }
        if (y > 14) {
            y = 0;
        }
        $(`.${x} img`).attr("src", `./images/${y}.png`);
        y++
        arr.push(x);
    }
}
var w = 0;
memoryGame.clickCard = (event) => {
    memoryGame.moves++;
    if (w == 2) {
        if(x.src == y.src){
            memoryGame.scoreNum++;
            // console.log(memoryGame.scoreNum);
            
        }
        // if()
        $('img').css({ "opacity": "0" });
        w = 0;
    };
    event.target.style.opacity = '1';
    w == 1 ? x = event.target : y = event.target
    w++;
    // console.log(event.target.src);
}

memoryGame.start();
