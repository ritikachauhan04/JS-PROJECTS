let mainvaluebtn = document.querySelector('#title');
let decrementbtn = document.querySelector('#decrement');
let incrementbtn = document.querySelector('#increment');
let resetbtn = document.querySelector('#reset');
let currentval  ="0";

incrementbtn.addEventListener('click',()=>{
    currentval++;
    mainvaluebtn.innerHTML=currentval;     // we can also write .textContent instead of innerHTML
})

    decrementbtn.addEventListener("click", () => {
    if (currentval > 0) {
      currentval--;
      mainvaluebtn.textContent = currentval;
    } else {
      alert("Value cannot be decreased more than 0");
    }
  });
resetbtn.addEventListener('click',()=>{
    currentval = 0;
    mainvaluebtn.textContent = currentval;
});