const firebaseConfig = {
    apiKey: "AIzaSyDBcuO3iYStdMTgDxEa0cq_kiRO3GBm3Fo",
    authDomain: "kwitter-project-4b368.firebaseapp.com",
    databaseURL: "https://kwitter-project-4b368-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-4b368",
    storageBucket: "kwitter-project-4b368.appspot.com",
    messagingSenderId: "875453371404",
    appId: "1:875453371404:web:917b680c97c2a593220a29"
  };
  
 firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

 function send(){
       msg = document.getElementById("msg").value
       firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
       });
       document.getElementById("msg").value ="";
 }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();


function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}