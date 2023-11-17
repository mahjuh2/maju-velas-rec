/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/*muda o comentário de bem-vindo para olá caio e valida o login*/
function logar(){
  event.preventDefault();

  let user = document.getElementById('login').value;
  let pass = document.getElementById('senha').value;

  if(user ="caio" && pass == "caio"){
    alert('Sucesso');
    let buttonlogin = document.querySelector(".professor");
    buttonlogin.textContent = "Olá Caio!";
    
}else{
    alert('Usuario ou senha incorretas');
  }
}