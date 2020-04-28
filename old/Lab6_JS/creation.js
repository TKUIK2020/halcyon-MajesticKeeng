function creation() {
    class Cards {
        constructor(image, head, text) {
            this.image = image
            this.head = head
            this.text = text
        }
    }
    let div_cards = document.getElementById('cards')
    const sourse_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero"

    let cards_arr = [
        new Cards("picture/mind.png", "CREATIVE MINDS", sourse_text),
        new Cards("picture/think.png", "THINK ALIVE", sourse_text),
        new Cards("picture/dog.png", "PIXEL PERFECTION", sourse_text)
    ]

    cards_arr.forEach((elem) => {
        let html = `
    <div class="card-box">
        <img class="card-image" src="${elem.image}" alt="">
    </div>
    <div class="card-title">${elem.head}</div>
    <div class="line"></div>
    <div class="card-text">${elem.text}</div>`
        let new_div = document.createElement('div')
        new_div.className = "card"
        new_div.innerHTML = html
        div_cards.appendChild(new_div)
    })
}
creation()