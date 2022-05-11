console.log('hello');

const body = document.body;

let winsize = {width: window.innerWidth, height: window.innerHeight};
window.addEventListener('resize', () => {
	winsize = {width: window.innerWidth, height: window.innerHeight};
});