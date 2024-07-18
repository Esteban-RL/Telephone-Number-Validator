const input =document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const resultado = document.getElementById("results-div");


//chequeo si es numero de telefono
const isPhone = (input)=>{
  if (input===''){
    alert("Please provide a phone number");
    return
  }
//creo un regex para todos los casos de telefonos en eeuu
const regex= /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/

//testeo el regex y devuelvo un valor
regex.test(input) ? resultado.innerText=`Valid US number: ${input}` : resultado.innerText=`Invalid US number: ${input}`;
}

//ejecuto el chequeador
check.addEventListener("click",()=>{
  isPhone(input.value);
})

//limpio el resultado
clear.addEventListener("click",()=>{
resultado.innerText="";
})
