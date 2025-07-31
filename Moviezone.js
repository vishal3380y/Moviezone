
const EmailVal = document.getElementById("email");
const PswVal = document.getElementById("psw");
const submitButton = document.getElementById("submit")
const thanks = document.getElementsByClassName("thanks");
const button = document.getElementById("but");
const btn = document.getElementsByClassName('btn');
const date = new Date()


submitButton.addEventListener('click', (e) =>{
  e.preventDefault();
  checkInputs();
});


function checkInputs(){
  const eVal = EmailVal.value.trim();
  const pVal = PswVal.value.trim();
  
  if(eVal === ''){
    alert('Email cannot be left blank');
  } else if(!isEmail(eVal)){
    alert('Email is not valid');
  } else if(isEmail(eVal)){
    console.log(true);
  }
  if(pVal === ''){
    alert('Password cannot be left blank');
  } else {
    console.log(true);
  }

    if(isEmail(eVal) == true && pVal !== true){
    alert('Thanks for logging in on ' + date.toDateString());
  }
}