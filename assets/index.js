//Credit for getting the memory-game correct: Code with Ania Kubow, https://www.youtube.com/watch?v=tjyDOHzKN0w, Michelle3334 / freaky_memory on GitHub: https://github.com/Michelle3334
// and dandavies23 / smoothie-moves on GitHub: https://github.com/dandavies23/smoothie-moves/blob/master/game.html

//Lego cards in Memory Game - In the future more cards could be added
    const LEGO_CARDS_LIST = [ //cardArray
        {
            name: "couch",
            img: "assets/memory_box_images/ben_unsplash.jpg"
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
            name: "chicken",
            img: "assets/memory_box_images/hello_im_nik_unsplash.jpg"
        },
        {
            name: "unicorn",
            img: "assets/memory_box_images/ines_pimentel_unsplash.jpg"
        },
        {
            name: "beach",
            img: "assets/memory_box_images/zakaria_ahada_unsplash.jpg"
        }
    ];

//The game will wait for the DOM to finish loading before running

document.addEventListener("DOMContentLoaded", () => {

    //Variables and empty arrays
    let grid = document.querySelector(".memory-game");  //memorygame = now grid
    let cardsChosen = []
    let cardsChosenId = []
    let cardsCorrect = []
    let rankMessage = "";
    let finalScore = 0;
    let turns = 0;
    var score = 0;

    // Doubles up cards to generate pairs
    let legoCardsList = [...LEGO_CARDS_LIST, ...LEGO_CARDS_LIST]
    let intervalRef = null;

    // Defines elements on page
    let alertDisplay = document.querySelector("#win-message")
    let alertDisplay = document.querySelector("#result")
    let movesDisplay = document.querySelector("#moves")
    let resetButton = document.querySelector("#reset)"
    resetButton.addEventListener("click");

    //Create Memory-game board
    function createMemory() {
    //Sort the cards random
    legoCardsList.sort(() => 0.5 - Math.random())
        for (let i = 0; i < legoCardsList.length; i++) {
            let card = document.createElement("img");
            card.setAttribute("src", "assets/memory_box_images/yellow_box.png");
            card.setAttribute("data-id", i);
            card.setAttribute("class", "game-card");
            card.addEventListener("click", onTumblerClick); //onTumblerClick = flipCard
            grid.appendChild(card);
        }
    }

    //Check for card-matches
    function checkForMatch() {
        const cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] !== cardsChosenId[1]) {
            cards[optionOneId].removeEventListener("click", flipCard);
            cards[optionTwoId].removeEventListener("click", flipCard);
            cardsCorrect.push(cardsChosen);
            movesCount();
        } else {
            cards[optionOneId].setAttribute("src", "assets/memory_box_images/yellow_box.png");
            cards[optionTwoId].setAttribute("src", "assets/memory_box_images/yellow_box.png");
            movesCount();
        }

        //Clear the cards chosen
        cardsChosen = []
        cardsChosenId = []

        //Increase the score for each correct match
        score.textContent = cardsCorrect.length;

        //Alert message when all matches are found
        if (cardsCorrect.length === cardArray.length/2) {
            document.getElementById("win-message").innerHTML = "Congratulations! You found all the matches!";
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
            setTimeout(checkForMatch, 400);
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
    function movesCount() {
        movesDisplay.innerHTML ++;
        moves ++;
    }

    createMemory()
})

//Contact-form 

//document.getElementById("form").onsubmit = function() {submitMsg()};

//function submitMsg() {
    //document.getElementById("message").innerHTML = "Hi! We appreciate your message. We will get back to you before you can spell L E G O!";
    //document.getElementById("form").reset();
  //}

  function sendMail(contactForm) {
      emailjs.send("service_g3chatm", "ms2-kids-memory-game", {
          "from_name": contactForm.name.value,
          "from_email": contactForm.emailaddress.value,
          "message_request": contactForm.message.value
      })
      .then(
        function (response) {
            alert("Hi! We appreciate your message. We will get back to you before you can spell L E G O!", response);
        },
        function (error) {
            alert("Ups! Something went wrong: ", error);
        }
    );
    return false;  // To block from loading a new page
};