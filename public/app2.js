//(----------------------------------------------CONTACT US FORM FIREBASE INTEGRATION STARTS---------------------------------------------)

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCR9bE8WtOfj84_TKfuPH3T1G_A-QJf2a4",
    authDomain: "redivivuscontact-e57d7.firebaseapp.com",
    projectId: "redivivuscontact-e57d7",
    storageBucket: "redivivuscontact-e57d7.appspot.com",
    messagingSenderId: "939713207192",
    appId: "1:939713207192:web:51a723ae11aa02401ae9ed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Till here everything permanent.

// Reference contactInfo collections
var contactInfo = firebase.database().ref("contactqueries");

//Listening submission
document.querySelector(".contact-form").addEventListener("submit",submitForm);

function submitForm(e)
{
    e.preventDefault();
    
    //Getting input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;    
    let message = document.querySelector(".message").value;
    console.log(name,email,message);

    saveContactInfo(name, email, message);
}

// Save Infos to Firebase 
function saveContactInfo(name, email, message)
{
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
        name: name,
        email: email,        
        message: message,
    });
}
