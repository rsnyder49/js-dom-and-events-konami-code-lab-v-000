const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  const input = document.body;
  let index = 0;
  input.addEventListener('keydown', function(e) {
 
	let key = parseInt(e.detail);
	 
  if (key === code[index]) {
    index++;
    if (index === code.length) {
      alert("Hurray!");
      index = 0;
      }
    }
    else {
       index = 0;
    }
  });
}