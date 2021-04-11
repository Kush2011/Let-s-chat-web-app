// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBY8_vVayAjfBFWYGkiTKHbxX4eN0KN-gc",
      authDomain: "let-s-chat-web-app-project.firebaseapp.com",
      databaseURL: "https://let-s-chat-web-app-project-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-web-app-project",
      storageBucket: "let-s-chat-web-app-project.appspot.com",
      messagingSenderId: "11693860693",
      appId: "1:11693860693:web:c192c90b4f614c8411f1dc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome"+" "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
          console.log("room_name"+Room_names);
          row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();
function addRoom(){
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "add room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      console.log("name");
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}