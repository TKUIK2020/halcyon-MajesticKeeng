let check_1 = true
let check_2 = true
function learn() {
	if (check_1) {
    let div_cards = document.getElementById('easter_egg')
        let html = `<img src="picture/learn.jpg">`
        let new_div = document.createElement('div')
        new_div.className = "easter_egg-img"
        new_div.innerHTML = html
        div_cards.appendChild(new_div)	
    check_1 = false
	}
}

function qq() {
    if (check_2) {
    let div_cards = document.getElementById('easter_egg')
        let html = `<img src="picture/qq.jpg">`
        let new_div = document.createElement('div')
        new_div.className = "easter_egg-img"
        new_div.innerHTML = html
        div_cards.appendChild(new_div)  
    check_2 = false
    }
}