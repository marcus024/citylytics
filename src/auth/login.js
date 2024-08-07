// // Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyB3ys0Ci5_YjxouBGaQVQI3vH8VVJTh9mE",
//   authDomain: "citylytics-ins.firebaseapp.com",
//   projectId: "citylytics-ins",
//   storageBucket: "citylytics-ins.appspot.com",
//   messagingSenderId: "547167650047",
//   appId: "1:547167650047:web:fe3a23db8889922b7b0cca"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // Initialize variables
// const auth = firebase.auth()
// const database = firebase.database()

// // Set up our register function
// function register () {
//   // Get all our input fields
//   email = document.getElementById('reg-email').value
//   password = document.getElementById('reg-password').value

//   // Validate input fields
//   if (validate_email(email) == false || validate_password(password) == false) {
//     alert('Email or Password is Outta Line!!')
//     return
//     // Don't continue running the code
//   }
 
//   // Move on with Auth
//   auth.createUserWithEmailAndPassword(email, password)
//   .then(function() {
//     // Declare user variable
//     var user = auth.currentUser

//     // Add this user to Firebase Database
//     var database_ref = database.ref()

//     // Create User data
//     var user_data = {
//       email : email,
//       password : password,
//       last_login : Date.now()
//     }

//     // Push to Firebase Database
//     database_ref.child('users/' + user.uid).set(user_data)

//     // DOne
//     alert('User Created!!')
//   })
//   .catch(function(error) {
//     // Firebase will use this to alert of its errors
//     var error_code = error.code
//     var error_message = error.message

//     alert(error_message)
//   })
// }

// // // Set up our login function
// // function login () {
// //   // Get all our input fields
// //   email = document.getElementById('email').value
// //   password = document.getElementById('password').value

// //   // Validate input fields
// //   if (validate_email(email) == false || validate_password(password) == false) {
// //     alert('Email or Password is Outta Line!!')
// //     return
// //     // Don't continue running the code
// //   }

// //   auth.signInWithEmailAndPassword(email, password)
// //   .then(function() {
// //     // Declare user variable
// //     var user = auth.currentUser

// //     // Add this user to Firebase Database
// //     var database_ref = database.ref()

// //     // Create User data
// //     var user_data = {
// //       last_login : Date.now()
// //     }

// //     // Push to Firebase Database
// //     database_ref.child('users/' + user.uid).update(user_data)

// //     // DOne
// //     alert('User Logged In!!')

// //   })
// //   .catch(function(error) {
// //     // Firebase will use this to alert of its errors
// //     var error_code = error.code
// //     var error_message = error.message

// //     alert(error_message)
// //   })
// // }




// // Validate Functions
// function validate_email(email) {
//   expression = /^[^@]+@\w+(\.\w+)+\w$/
//   if (expression.test(email) == true) {
//     // Email is good
//     return true
//   } else {
//     // Email is not good
//     return false
//   }
// }

// function validate_password(password) {
//   // Firebase only accepts lengths greater than 6
//   if (password < 6) {
//     return false
//   } else {
//     return true
//   }
// }

