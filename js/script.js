
function hideElements(){
	document.getElementById('userEmail').value = ' ';
	document.getElementById('checked').style.visibility = 'hidden';
	document.getElementById('demo').style.display = 'none';
	document.getElementById('demo2').style.display = 'none';
}

function checkEmail() {
	var valid;
	var notValid;
    var email = document.getElementById('userEmail');
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email.value)) {
    	notValid = "wrong e-mail";
	    document.getElementById("demo2").innerHTML = notValid;
	    document.getElementById("demo2").style.color = "#EE262D";
	    document.getElementById('userEmail').style.borderColor = "#EE262D";

	}else{
		valid = "Thank you!"+" ";
	    document.getElementById("demo").innerHTML = valid;
	    document.getElementById("demo").style.color = "#00D224"; 
	    document.getElementById("checked").style.visibility = "visible";
	    document.getElementById("btn").style.background = "linear-gradient(201.32deg, #00D224 0%, #27AE60 100%)";
	    document.getElementById('userEmail').style.borderColor = "#05BF71";
		document.getElementById("demo2").style.display = 'none';
	    document.getElementById("inputLabel").innerHTML = "The notification will be sent to your e-mail when our lounch date approached.";
	    document.getElementById("btn").innerHTML = "Stay In Touch";
		var list = [];
		inptuValue = document.getElementById('userEmail').value;
		list.push(inptuValue);
	}
	return false;
}

