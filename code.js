// Get the modal
 var modal = document.getElementById('id01');
 document.querySelector('.passwdF').addEventListener('click', passwdborder)
 document.querySelector('.passwdF').addEventListener('mouseout', passwdout)
 document.querySelector('.lnr').addEventListener('click', eyePsw)

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function passwdborder (){
  document.querySelector('.passwdF').style.border = '1px solid  #ffc632'
  document.querySelector('.passwdF').style.boxShadow = '0px 0px 0px 2px #FFDE88'
  document.querySelector('.changeImg').src = 'assets/images/eye-focus.svg'

}


function passwdout () { 
  document.querySelector('.passwdF').style.border = '1px solid #868686'
  document.querySelector('.passwdF').style.boxShadow = 'none'
  document.querySelector('.changeImg').src = 'assets/images/eye.svg'

}

function eyePsw (){
    const x = document.getElementById('passwd');
    if (x.type == "password") {
      x.type = "text";
    } else  {
      x.type = "password";
    }

}