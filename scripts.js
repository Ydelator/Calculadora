let numero1 = document.getElementById('numero1')
let numero2 = document.getElementById('numero2')
let select = document.getElementById('select')
const total = document.getElementById('total')

const calcular = () =>{
    if (numero1.value == '' || numero2.value == ''){
        window.alert("Campo vacio")
    }else if(select.value == '+'){
        total.innerHTML = `El resultado de la suma ${numero1.value} + ${numero2.value} es: ${parseFloat(numero1.value)+parseFloat(numero2.value)}` 
    }else if(select.value == '-'){
        total.innerHTML = `El resultado de la resta ${numero1.value} - ${numero2.value} es: ${parseFloat(numero1.value)-parseFloat(numero2.value)}`
    }else if(select.value == '*'){
        total.innerHTML = `El resultado de la multiplicacion ${numero1.value} * ${numero2.value} es: ${parseFloat(numero1.value)*parseFloat(numero2.value)}`
    }else{
        total.innerHTML = `El resultado de la division ${numero1.value} / ${numero2.value} es: ${parseFloat(numero1.value)/parseFloat(numero2.value)}`
    }
}