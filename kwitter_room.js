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

  function addRoom(){
        room_name = document.getElementById("room_name").value
 firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
      }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;     
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location ="kwitter_page.html";
}