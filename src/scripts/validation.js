const formsToValidate = document.querySelectorAll(".needs-validation");
// const password = document.getElementById("password").value;

formsToValidate.forEach(function(forms){
  forms.addEventListener("submit", function(event){
    if (!forms.checkValidity()){
    event.preventDefault();
    event.stopPropagation();
    
    }

    forms.classList.add("was-validated");
  }, false )
})
