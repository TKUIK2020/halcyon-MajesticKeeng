<<<<<<< HEAD
function creation(){
    class Cont{
        constructor(src, title, info){ this.src = src; this.title = title; this.info = info;}}
    let adress = new Cont("css/pin.png", "ADDRESS", "Level 6, 23 Pitt St, Sydney")
    let phoneNumber = new Cont("css/phone.png", "PHONE", "+61 9 211 3741")
    let email = new Cont("css/message.png", "EMAIL", "hey@halcyon.com.au")
    let contact_array = [adress, phoneNumber, email]
    let contact = document.getElementById('contact');
    contact_array.forEach(
        function(elem){
                let html = `<div class="contacts_block">
                <img src="${elem.src}">
                <p class="contact_title">${elem.title}</p>
                <p class="contact_text">${elem.info}</p></div>`
                let crt = document.createElement('div');
                crt.innerHTML = html;
                contact.appendChild(crt);
            })
}
=======
function creation(){
    class Cont{
        constructor(src, title, info){ this.src = src; this.title = title; this.info = info;}}
    let adress = new Cont("css/pin.png", "ADDRESS", "Level 6, 23 Pitt St, Sydney")
    let phoneNumber = new Cont("css/phone.png", "PHONE", "+61 9 211 3741")
    let email = new Cont("css/message.png", "EMAIL", "hey@halcyon.com.au")
    let contact_array = [adress, phoneNumber, email]
    let contact = document.getElementById('contact');
    contact_array.forEach(
        function(elem){
                let html = `<div class="contacts_block">
                <img src="${elem.src}">
                <p class="contact_title">${elem.title}</p>
                <p class="contact_text">${elem.info}</p></div>`
                let crt = document.createElement('div');
                crt.innerHTML = html;
                contact.appendChild(crt);
            })
}
>>>>>>> dbdcff874240a3383a6c68d2de381995b8e1b07f
creation()