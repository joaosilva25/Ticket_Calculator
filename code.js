let ticket= document.querySelector('.ticket');
let credit= document.querySelector('.credit');
let h3=document.querySelector('h3');
let botao= document.querySelector('.calculadora');
let newbutton= document.querySelector('.newButton')


function calculate() {
    let ticketInput=parseFloat(ticket.value);
    let creditInput=parseFloat(credit.value);
    let calc= Math.floor(creditInput/12)*10;
    let sub=(ticketInput-calc);

    h3.innerHTML=`<h3>O link deverá ser criado no valor de <span>R$${calc},00</span>. 
    No entanto, ainda falta pagar <span>R$${sub},00</span> para completar o valor total.</h3>`;

    if (ticket.value =='' || credit.value =='') {
        h3.innerText =`Preencha os campos para prosseguir`;
    }

    botao.style.display = 'none';
    newbutton.innerHTML = `<button onclick="refresh()"><ion-icon class="icon" name="trash-outline"></ion-icon></button>`;
    ticket.disabled='true';
    credit.disabled='true';
}


function refresh() {
    window.location.reload()
}