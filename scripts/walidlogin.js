class LoginWalidation{
    constructor(){
        document.addEventListener("click", e=> {
            if(e.target == document.getElementById("login"))
                this.validate(document.querySelector("form"));     
        });
    }
    validate(form){
        const MAIL = document.getElementById("email");
        const PASSWORD = document.getElementById("password");
        const ERROR = document.getElementById("error");
        form.addEventListener("submit", e => {
            e.preventDefault();
            if(PASSWORD.value.length >= 8 && MAIL.value.trim() && PASSWORD.value.trim())
                form.submit();
            else{
                MAIL.value = "";
                PASSWORD.value = "";
                ERROR.innerText = "Wypełnij wszystkie pola :/"
            }
        })
    }
}
new LoginWalidation();
