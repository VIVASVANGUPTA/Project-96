var firebaseConfig = {
      apiKey: "AIzaSyBdnXXhoLwmTA8IGcmrcO5SqnQLSz7i7WE",
      authDomain: "letchat-web-app.firebaseapp.com",
      databaseURL: "https://letchat-web-app-default-rtdb.firebaseio.com",
      projectId: "letchat-web-app",
      storageBucket: "letchat-web-app.appspot.com",
      messagingSenderId: "57570877349",
      appId: "1:57570877349:web:0c56272f39e82a731a924c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function logout ()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code

} });  }); }
getData();

function send()
{
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
   });

   document.getElementById("msg").value = "";

}

//End code
function logout ()
{
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}