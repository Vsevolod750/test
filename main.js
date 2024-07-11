document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
      alert("привет");
    });

    const test = document.querySelectorAll(".test");
    test.forEach(element => {
      element.addEventListener("click", () => {
        alert("привет1");
        console.log(element);
      });
    });
    
    
    const allTests = document.querySelectorAll(".test");
    console.log(allTests);

    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementsByClassName("close")[0]
   
    openModalBtn.onclick = function() {
        modal.style.display = "block"
    }

    closeModalBtn.onclick = function() {
        modal.style.display = "none"
    }

    window.onclick = function(event) {
if(event.target == modal) {
      modal.style.display = "none"
}
    }
  });