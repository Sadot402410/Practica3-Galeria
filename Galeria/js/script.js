const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const correoelectronico = document.getElementById('correolectronico');
const comentarios = document.getElementById('comentarios');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const nombreValue = nombre.value.trim();
	const apellidosValue = apellidos.value.trim();
	const correoelectronicoValue = correoelectronico.value.trim();
	const comentariosValue = comentarios.value.trim();
	
	if(nombreValue === '') {
		setErrorFor(nombre, 'No puede dejar el nombre en blanco');
	} else {
		setSuccessFor(nombre);
	}
	
	if(apellidosValue === '') {
		setErrorFor(apellidos, 'No puede dejar el apellido en blanco');
	} else if (!isapellidos(apellidosValue)) {
		setErrorFor(apellidos, 'No ingreso el apellido ');
	} else {
		setSuccessFor(apellidos);
	}
	
	if(correoElectronicoValue === '') {
		setErrorFor(correoelectronico, 'Correo no debe ingresar en blanco.');
	} else {
		setSuccessFor(correoelectronico);
	}
	
	if(comentariosValue === '') {
		setErrorFor(comentarios, 'comentarios no debe estar en blanco');
	} else if(comentariosValue !== comentariosValue) {
		setErrorFor(comentarios, 'comentarios coinciden');
	} else{
		setSuccessFor(comentarios);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}