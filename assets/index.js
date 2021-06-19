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
    var cardChosen = []

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
    function flipcard() {
        var cardId = this.getAttribute("data-id")
        cardChosen
    }

    //Flip Card


    createMemory()
