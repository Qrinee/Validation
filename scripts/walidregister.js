class RegisterWalidation{
    constructor(form){
        this.validate(form);
    }
    validate(form){
        const EMAIL = document.getElementById("email");
        const NICK = document.getElementById("nick");
        const PASSWORD = document.getElementById("password");
        const PASSWORD_REPEAT = document.getElementById("passwordRepeat");
        const BIRTH = document.getElementById("birth");
        const ACCEPT = document.getElementById("accept");
        const ERROR = document.getElementById("error");
        const YEARS = new Date().getFullYear() - new Date(BIRTH.value).getFullYear();  

        const CLEAR = () => {
            EMAIL.value = '';
            PASSWORD.value = '';
            PASSWORD_REPEAT.value = '';
            BIRTH.value = '';
            ACCEPT.checked = false;
            NICK.value = '';
        }
        
        form.addEventListener("submit", e => {
            e.preventDefault();
            if(EMAIL.value != '' && NICK.value != '' &&  PASSWORD.value != '' && PASSWORD_REPEAT.value != '' && BIRTH.value != '' && ACCEPT.checked)
                if(YEARS >= 18)
                    if(new RegExp(/^[A-Za-z0-9]*$/).test(NICK.value))
                        if(PASSWORD.value.length >= 8){
                            if(PASSWORD.value === PASSWORD_REPEAT.value){
                                if(PASSWORD.value.match(/[!@#$%^&*(),.?":{}|<>]/))
                                    if(PASSWORD.value.match(/[A-Z]/))
                                        form.submit();
                                    else{
                                        ERROR.innerText = "Hasło musi zawierać conajmniej jedną wielką literę";
                                        CLEAR();
                                    }
                                else{
                                    ERROR.innerText = "Hasło musi zawierać conajmniej jeden znak specjalny";
                                    CLEAR();
                                }
                            }
                            else{
                                ERROR.innerText = "Podane hasła się różnią";
                                CLEAR();
                            }
                        }else{
                            ERROR.innerText = "Hasło musi zawierać conajmniej 8 znaków!";
                            CLEAR();
                        }
                    else{
                        ERROR.innerText = "Wypełnij pola prawidłowo";
                        CLEAR();
                    }
                else{
                    ERROR.innerText = "Nie spełniasz wymagań regulaminu";
                    CLEAR();
                }
            else{
                ERROR.innerText = "Wypełnij brakujące pola";
                CLEAR();
            }
        })
    }
}
new RegisterWalidation(document.querySelector("form"));