//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDCp8oAWI-3-vy6a0AMWHiyK8ZkHWiwf7E",
      authDomain: "kwitter-1c32e.firebaseapp.com",
      databaseURL: "https://kwitter-1c32e-default-rtdb.firebaseio.com",
      projectId: "kwitter-1c32e",
      storageBucket: "kwitter-1c32e.appspot.com",
      messagingSenderId: "375468766834",
      appId: "1:375468766834:web:061fc1e74d434f478cf4eb"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Your web app's Firebase configuration
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}
function send(){
      var msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name, message = msg, like: 0
      });
}