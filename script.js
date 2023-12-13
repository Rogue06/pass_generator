const copyBtn = document.getElementById('copy');

function getPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 16;
    let password = "";

    // générer le mot de passe
    for(let i = 0; i < passwordLength ; i++){
        let randomNumber = Math.floor(Math.random() * chars.length)

        password += chars.substring(randomNumber , randomNumber +1)

        // Afficher le mot de passe 

        document.getElementById('password').value = password;

        // Changer le style du boutton copier 

        copyBtn.style.background="#6c757d"
        copyBtn.style.color="#fff"
    }
}

// Copier le mot de passe

function copyMdp(){
    var inputPassword = document.getElementById('password');

    // Vérifier la longueur du mot de passe

    if(inputPassword.value.length == 16){
        // Copier le mot de passe
        inputPassword.select();
        document.execCommand("copy");

        // Changer le style du bouton copier 

        copyBtn.style.background = "transparent";
        copyBtn.style.color = "#000"

        // Afficher une alerte

        alert('Mot de pass copié !')
    } else {
        // Si non 
        alert('Veuillez générer un Mot de passe')
    }
}

