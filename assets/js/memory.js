//Credit for getting the memory-game correct: Code with Ania Kubow, https://www.youtube.com/watch?v=tjyDOHzKN0w, Michelle3334 / freaky_memory on GitHub: https://github.com/Michelle3334
// and dandavies23 / smoothie-moves on GitHub: https://github.com/dandavies23/smoothie-moves/blob/master/game.html

//jshint esversion: 6

///The game will wait for the DOM to finish loading before running

document.addEventListener("DOMContentLoaded", () => {

    //Cards in Memory Game
    const cardArray = [
        {
            name: "couch",
            img: "assets/memory_box_images/ben_unsplash.jpg"
        },
        {
            name: "couch",
            img: "assets/memory_box_images/ben_unsplash.jpg"
        },
        {
            name: "crossing road",
            img: "assets/memory_box_images/daniel_cheung_unsplash.jpg"
        },
        {
            name: "crossing road",
            img: "assets/memory_box_images/daniel_cheung_unsplash.jpg"
        },
        {
            name: "painting",
            img: "assets/memory_box_images/daniel_cheung2_unsplash.jpg"
        },
        {
            name: "painting",
            img: "assets/memory_box_images/daniel_cheung2_unsplash.jpg"
        },
        {
            name: "chicken",
            img: "assets/memory_box_images/hello_im_nik_unsplash.jpg"
        },
        {
            name: "chicken",
            img: "assets/memory_box_images/hello_im_nik_unsplash.jpg"
        },
        {
            name: "unicorn",
            img: "assets/memory_box_images/ines_pimentel_unsplash.jpg"
        },
        {
            name: "unicorn",
            img: "assets/memory_box_images/ines_pimentel_unsplash.jpg"
        },
        {
            name: "beach",
            img: "assets/memory_box_images/zakaria_ahada_unsplash.jpg"
        },
        {
            name: "beach",
            img: "assets/memory_box_images/zakaria_ahada_unsplash.jpg"
        } 
    ];

    //Sort the cards random
    cardArray.sort(() => 0.5 - Math.random());

    //Constants
    const memoryGame = document.querySelector("#memory-game");
    const scoreDisplay = document.querySelector("#score");
    const movesCount = document.querySelector("#moves");
    const reset = document.getElementById("reset");
    let moves = 0;

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsCorrect = [];

    //Create Memory-game board
    function createMemory() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement("img");
            card.setAttribute("src", "assets/memory_box_images/yellow_box.png");
            card.setAttribute("class", "game-card");
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipCard);
            memoryGame.appendChild(card);
        }
    }

    //Check for card-matches
    function checkForMatch() {
        const cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] !== cardsChosenId[1]) {
            cards[optionOneId].removeEventListener("click", flipCard);
            cards[optionTwoId].removeEventListener("click", flipCard);
            cardsCorrect.push(cardsChosen);
            movesCounter();
        } else {
            cards[optionOneId].setAttribute("src", "assets/memory_box_images/yellow_box.png");
            cards[optionTwoId].setAttribute("src", "assets/memory_box_images/yellow_box.png");
            movesCounter();
        }

        //Clear the cards chosen
        cardsChosen = [];
        cardsChosenId = [];

        //Increase the score for each correct match
        score.textContent = cardsCorrect.length;

        //Alert message when all matches are found
        if (cardsCorrect.length === cardArray.length/2) {
            document.getElementById("win-message").innerHTML = "Congratulations! You found all the pairs!";
        }
    }

    //Flip Card
    function flipCard() {
        let cardId = this.getAttribute("data-id");
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);

        //Add image
        this.setAttribute("src", cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    //Reset the game
    reset.addEventListener("click", resetGame);
    function resetGame() {
        memoryGame.innerHTML = "";
        document.getElementById("win-message").innerHTML = "";
        cardArray.sort(() => 0.5 - Math.random());
        createMemory(memoryGame, cardArray);
        cardsCorrect = [];
        scoreDisplay.innerHTML = 0;
        cardsChosen = [];
        cardsChosenId = [];
        movesCount.innerHTML = 0;
        moves = 0;
    }

    //Count each move
    function movesCounter() {
        movesCount.innerHTML ++;
        moves ++;
    }

    createMemory();
});
