function sendMail(formName, yourEmail, options){
	let form = document.forms[formName]
	let formJSON = {
		from: form["from"].value,
		phone: form["phone"].value,
		to: yourEmail,
		subject: form["subject"].value,
		text: form["text"].value
	}
	
	if (options !== undefined) formJSON = Object.assign(formJSON, options)

	console.log(formJSON)
	fetch(`https://rcovery-mailer.herokuapp.com/sendmail/${btoa(unescape(JSON.stringify(formJSON)))}`
	,{method: "POST"})
	.then(response => response.text())
	.then(data => {window.alert(data)})

	form.reset()
}

