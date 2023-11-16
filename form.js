const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const password = document.getElementById('password');
const confirm = document.getElementById('cpassword');

form.addEventListener('submit', (e)=>{
	e.preventDefault();
	validateInputs();
})
function validateInputs(){
	const usernameVal = username.value.trim();
	const emailVal = email.value.trim();
	const mobileVal = mobile.value.trim();
	const passwordVal = password.value.trim();
	const confirmVal = confirm.value.trim();
	//username
	var name = /^[a-zA-Z]+$/;
	if(username.value.match(name)){
		setsuccess(username)
	}
	else{
		seterror(username,'Username not valid')
	}
	//email
	if(emailVal === ''){
		seterror(email,'email is required')
	}
	else{
		setsuccess(email)
	}
	//phone number
	var phoneno = /^\d{10}$/;
	if (mobile.value.match(phoneno))
		{setsuccess(mobile)}
	else
		{seterror(mobile,'Given mobile number is not a valid one')}
	//password
	if (passwordVal === ''){
		seterror(password,'password is required')	
	}
	else if(passwordVal.length<8){
		seterror(password,'password should be atleast 8 charecters long')
	}
	else{
		setsuccess(password)
	}
	//confirm password
	if (confirmVal === ''){
		seterror(confirm,'seems like you forget to enter confirm password')
	}
	else if (confirmVal !== passwordVal){
		seterror(confirm,'passwords does not matched')
	}
	else{
		setsuccess(confirm)
	}}
function seterror(element,message){
	const inputgroup = element.parentElement;
	const errorElement = inputgroup.querySelector('.error');
	errorElement.innerText = message;
	inputgroup.classList.add('error')
	inputgroup.classList.remove('success')
}
function setsuccess(element){
	const inputgroup = element.parentElement;
	const errorElement = inputgroup.querySelector('.error');
	errorElement.innerText = '';
	inputgroup.classList.add('success')
	inputgroup.classList.remove('error')
}