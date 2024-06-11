const items = document.querySelector(".items");
const li = document.querySelectorAll(".mes");
function showOptions(state) {
  
        if(state ==="open") {
            
            items.classList.toggle("active");
              items.style.display ="block";

              li.forEach((el)=>{
                el.addEventListener('click',()=>{
                     items.style.display ="none";
                    
                })
           })
        }
        if(state ==="close") {
            items.classList.toggle("active");
              items.style.display ="none"
        }
}


