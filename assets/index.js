document.addEventListener("DOMContentLoaded", () => {

    //Card Options

    //Credit for getting the memory-game correct: Code with Ania Kubow, https://www.youtube.com/watch?v=tjyDOHzKN0w & Michelle3334 / freaky_memory on GitHub: https://github.com/Michelle3334

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
    ]

    //Sort the cards random
    cardArray.sort(() => 0.5 - Math.random());

    //Constants and variables
    const memoryGame = document.querySelector("#memorygame");
    const scoreDisplay = document.querySelector("#score");
    const movesDisplay = document.querySelector("#moves");
    const reset = document.getElementById("reset");
    let moves = 0;

    var cardChosen = []
    var cardChosenId = []
    var cardsCorrect = []

    //Create Memory-game board
    function createMemory() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement("img");
            card.setAttribute("src", "assets/memory_box_images/yellow_box.png");
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipcard);
            memoryGame.appendChild(card);
        }
    }

    //Check for card-matches
    function checkForMatch() {
        var cards = document.querySelectorAll("img");
        const optionOneId = cardChosenId[0]
        const optionTwoId = cardChosenId[1]

        if (cardChosen[0] === cardChosen[1] && cardChosenId[0] !== cardChosenId[1]) {
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
        cardChosen = []
        cardChosenId = []

        //Increase the score for each correct match
        score.textContent = cardsCorrect.length;

        //Alert message when all matches are found
        if (cardsCorrect.length === cardArray.length/2) {
            scoreDisplay.textContent = "Congratulations! You found all the matches!"
        }
    }

    //Flip Card
    function flipcard() {
        var cardId = this.getAttribute("data-id");
        cardChosen.push(cardArray[cardId].name);
        cardChosenId.push(cardId);

        //Add image
        this.setAttribute("src", cardArray[cardId].img);
        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    //Reset the game
    reset.addEventListener("click", resetGame);
    function resetGame() {
        cardArray.sort(() => 0.5 - Math.random());
        createMemory(memoryGame, cardArray);
        cardsCorrect = []
        scoreDisplay.innerHTML = 0;
        cardChosen = []
        cardChosenId = []
        movesCount.innerHTML = 0;
        moves = 0;
    }

    //Count each move
    function movesCounter() {
        movesCount.innerHTML ++;
        moves ++;
    }

    createMemory()
})
