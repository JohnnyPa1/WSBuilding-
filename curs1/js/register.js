class User{
    constructor(username, password, email){
        this.name = username;
        this.pass = password;
        this.email = email;
    }
}

let registerButton = document.getElementById('register');


registerButton.addEventListener('click',function(event){
    event.preventDefault();
    let form = document.getElementById('registerForm');
    let data = new FormData(form);
    let newUser = new User(data.get("name"),data.get("password"),data.get("email"));
    let user = JSON.stringify(newUser);
    localStorage.setItem(newUser.name,user);
    let successAlert = document.getElementById('successAlert');
    successAlert.style.display = "block";
    setTimeout(() => {
        removesuccessfulRegister();
    }, 6000);
    form.reset();
    form.classList.remove("was-validated");
})

function removesuccessfulRegister(){
    let successAlert = document.getElementById('successAlert');
    successAlert.style.display = "none";
}
