const memoryGame = {};
memoryGame.rowNum = 6;
memoryGame.columnNum = 5;
memoryGame.scoreNum = 0;
memoryGame.moves = 0;
memoryGame.picNum = memoryGame.rowNum * memoryGame.columnNum;


memoryGame.start = () => {
    memoryGame.createCards();
    memoryGame.createButton();
    memoryGame.imges();
    memoryGame.score();
};
memoryGame.createButton = () => {
    var button = $('<button/>');
    button.addClass('.buttunNew');
    button.text('New Game');
    $('#newGame').append(button);
    button.click(memoryGame.newGame);
}
memoryGame.newGame = () =>{
    $('#cardsBoard').empty();
    memoryGame.createCards();
    memoryGame.imges();
    memoryGame.scoreNum = 0;
    memoryGame.moves = 0;
    memoryGame.score();

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
    memoryGame.score();
    if (w == 2) {
        if (x.src == y.src) {
            memoryGame.scoreNum++;
            memoryGame.score();
            if (memoryGame.scoreNum == 15) {
                alert('You won!')
            }
            $(x).off('click');
            $(y).off('click');
        }
        else {
            x.style.opacity = '0'
            y.style.opacity = '0'
            $(x).click(memoryGame.clickCard);

        }
        w = 0;
    };
    event.target.style.opacity = '1';
    w++;
    if (w == 1) {
        x = event.target;
        $(x).off('click');
    }
    else {
        y = event.target
    }
    // console.log(event.target.src);
}

memoryGame.start();
