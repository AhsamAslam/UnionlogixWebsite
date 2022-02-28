
    const contactForm = document.querySelector('.contact-form');
    
	    let name = document.getElementById('Name');
		let email = document.getElementById('Sender');
		let subject = document.getElementById('Subject');
		let message = document.getElementById('Message');

	contactForm.addEventListener('submit', (e)=>{
		e.preventDefault();
		
		let formData = {
			name: name.value,
			email: email.value,
			subject: subject.value,
			message: message.value
		}
		debugger;
		let xhr = new XMLHttpRequest();
		xhr.open('POST', '/');
		xhr.setRequestHeader('content-type', 'application/json');
		xhr.onload = function(){
			debugger;
			console.log(xhr.responseText);
			if(xhr.responseText == 'success'){
				alert('Email send');
				name.value = '';
				email.value = '';
				subject.value = '';
				message.value = '';
			}else{
				alert('Something is wrong');
			}
		}

		xhr.send(JSON.stringify(formData));
	})
