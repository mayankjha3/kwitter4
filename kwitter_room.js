
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD0JRZkrFNAkUJQEcT9rWETvKmJ0ef60Qc",
      authDomain: "kwitter-ea763.firebaseapp.com",
      databaseURL: "https://kwitter-ea763-default-rtdb.firebaseio.com",
      projectId: "kwitter-ea763",
      storageBucket: "kwitter-ea763.appspot.com",
      messagingSenderId: "399697872399",
      appId: "1:399697872399:web:fbb143e9bc9b889dec457a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;
room_name = localStorage.getItem("room_name");


function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class ='room_name' id= " + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            messege:msg,
            like:0
      });
      document.getElementById("msg").innerHTML = "";
}