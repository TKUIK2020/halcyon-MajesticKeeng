const input = document.getElementById('input')
let mail = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
let loc
function change() {
	if (input.value.replace(/ /g, "").match(mail)) {
		localStorage.setItem("e-mail", input.value)
		document.getElementById('input').className = 'success'
	}else {
		document.getElementById('input').className = 'error'
	}
}

let exist = localStorage.getItem("e-mail")

if (exist != null) {
    input.value = exist;
}