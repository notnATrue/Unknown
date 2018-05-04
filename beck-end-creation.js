function CreateUser(emailu, passu){
    emailu = this.emailu;
    passu = this.passu;
    return console.log(JSON.stringify(emailu) + " " + passu);
};

let user = {
    name:"name",
    pas:"pass",
}

let loggedUser = new CreateUser();

loggedUser.call(user);