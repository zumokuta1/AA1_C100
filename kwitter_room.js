
//AGREGA TUS ENLACES DE FIREBASE AQUÍ

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Inicia el código

                  //Finaliza el código
            });
      });
}
getData();

function logout() {
      window.location = "index.html";
}