var totalNum = 0;

	function clearAnswer() {
		document.getElementById('answer').value = '';
	}

	function backSpace() {
		var text = document.getElementById('answer').value;
		text = text.slice(0,text.length-1);
		document.getElementById('answer').value = text;
	}

	function evaluate() {
		eval(document.getElementById('answer').value);
	}