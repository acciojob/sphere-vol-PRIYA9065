const form = document.getElementById('MyForm');
function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	let r = Number(form.radius.value);
	let volume = (4 * Math.PI * r ** 3) / 3;
	form.volume.value = volume.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
