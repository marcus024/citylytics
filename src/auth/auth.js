  const firebaseConfig = {
    apiKey: "AIzaSyBWEO8zpfEzUNtt8oHzYIq5PzMpW6Efj_I",
    authDomain: "project-citylytics.firebaseapp.com",
    databaseURL: "https://project-citylytics-default-rtdb.firebaseio.com",
    projectId: "project-citylytics",
    storageBucket: "project-citylytics.appspot.com",
    messagingSenderId: "589518230343",
    appId: "1:589518230343:web:41a5daeb85810ea9257262",
    measurementId: "G-V0PWB4WS2G"
  };
  //initialize firebase
firebase.initializeApp(firebaseConfig);

 //reference your database
var regForm = firebaseConfig.database().ref('regForm');

document.getElementById('regForm').addEventListener("submit",submitForm)

function submitForm(e){
  e.preventDefault();
  var email = getElementVal('email');
  var password = getElementVal('reg-password');

  console.log(email, password);

}
const getElementVal = (id) =>{
  return document.getElementById(id).ariaValueMax;
}

