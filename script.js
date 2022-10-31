const turn = document.getElementById('interruptor');
const lamp = document.getElementById('lamp');
var quebrada = false;

function mudar() {
    if ( ! quebrada ){    
        if (interruptor.src.indexOf ('Off') > -1){
            interruptor.src = './img/interruptorOn.png'
            lamp.src = './img/ligada.jpg'
        }
        else if (interruptor.src.indexOf ('On') > -1) {
            interruptor.src = './img/interruptorOff.png'
            lamp.src = './img/desligada.jpg'
        }
    }else{
        if (interruptor.src.indexOf ('Off') > -1){
            interruptor.src = './img/interruptorOn.png'
        }
        else if (interruptor.src.indexOf ('On') > -1) {
            interruptor.src = './img/interruptorOff.png'
        }
    }   
}
function lampOn() {
    if (! quebrada){
        if (lamp.src.indexOf('desligada') > -1) {
            lamp.src = 'img/ligada.jpg'
        }
    }
}
function lampOff() {
    if (! quebrada){
        if (lamp.src.indexOf('ligada') > -1) {
            lamp.src = 'img/desligada.jpg'
        }
    }
}
function quebrar() {
    lamp.src = 'img/quebrada.jpg'
    quebrada = true
}

turn.addEventListener( 'click', mudar);
lamp.addEventListener( 'mouseover', lampOn);
lamp.addEventListener( 'mouseleave', lampOff);
lamp.addEventListener( 'dblclick', quebrar);