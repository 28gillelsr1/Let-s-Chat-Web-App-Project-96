
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCOgwtXhj2K004-kXF31A3nMtjDnf_IB0E",
  authDomain: "let-s-chat-web-app-4d017.firebaseapp.com",
  databaseURL: "https://let-s-chat-web-app-4d017-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-web-app-4d017",
  storageBucket: "let-s-chat-web-app-4d017.appspot.com",
  messagingSenderId: "251847844607",
  appId: "1:251847844607:web:1f465eb9d1fac21d3e62ca"
};

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome, " + user_name ;

    function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="Let's_Chat_page.html";
    };
    function redirectToRoomName(room_name){
      console.log(room_name);
      localStorage.setItem("room_name", room_name);
      window.location="Let's_Chat_page.html";
    }
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


