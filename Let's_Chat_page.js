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
room_name=localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code

//End code
  } });  }); }
getData();
function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value="";
  
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}