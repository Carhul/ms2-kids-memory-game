document.addEventListener("DOMContentLoaded", () => {

    //Card Options

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
    ]}

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    var cardChosen = []
    var cardChosenId = []
    var cardsWon = []

    //Create Memory-game board

    function createMemory() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement("img")
            card.setAttribute("src", "assets/memory_box_images/yellow_box.png")
            card.setAttribute("data-id", i)
            card.addEventListener("click", flipcard)
            grid.appendChild(card)
        }
    }

    //Check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll("img")
        const optionOneId = cardChosenId[0]
        const optionTwoId = cardChosenId[1]
        if (cardChosen[0] === cardChosen[1]) {
            alert("You found a match!")
            cards[optionOneId].setAttribute("src", "assets/memory_box_images/yellow_box.png")
            cards[optionTwoId].setAttribute("src", "assets/memory_box_images/yellow_box.png")
            cardsWon.push(cardChosen)
        } else {
            cards [optionOneId].setAttribute("src", "assets/memory_box_images/yellow_box.png")
            cards [optionTwoId].setAttribute("src", "assets/memory_box_images/yellow_box.png")
            alert("Sorry, try again!")
        }
        cardChosen = []
        cardChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay
        }
    }

    //Flip Card
    function flipcard() {
        var cardId = this.getAttribute("data-id")
        cardChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute("src", cardArray[cardId].img)
        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }


    createMemory()
