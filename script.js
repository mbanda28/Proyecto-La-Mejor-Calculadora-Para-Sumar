// solo funciona en 

const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario')
const inp1 = document.querySelector('#cal1');
const inp2 = document.querySelector('#cal2');
const btn = document.querySelector('#calcular');
const presultado = document.querySelector('#resultado');
const f = document.querySelector('#ff')

form.addEventListener('submit',sumarinputsvarios);

function sumarinputsvarios(event) {
    console.log({event})
    event.preventDefault();
    const suma = (Number(inp1.value) + parseInt(inp2.value));
    presultado.innerText = "El resultado de la suma es  " + suma;
}

presultado.addEventListener('mouseover', () => [
    f.innerHTML = "Asi es, solo puede sumar",
])

inp1.addEventListener('focus', function (){
    f.textContent = '';
})