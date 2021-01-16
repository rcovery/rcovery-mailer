const mailer = require('nodemailer')
const b64 = require('base-64')

var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var phone_regex = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/

const transporter = mailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'email_gmail',
		pass: 'pass_email_gmail'
	}
})

function send(obj){
	if (!obj.to) return false

	let messageModel = `\n
${"-".repeat(25) + "·CONTACT·" + "-".repeat(25)}

>>---> Contact email: ${obj.from}
>>---> Contact phone: ${obj.phone}

${"-".repeat(68)}

++++++++++[>+>+++>+++++++>++++++++++<<<<-]>>>++++++++++++.---------------.>+++++++++++.+++++++.-----------------.+++++++++++++.+++++++.
e m a i l _ s e r v i c e`;

	transporter.sendMail({
		to: obj.to,
		subject: obj.subject,
		text: obj.text + messageModel
	})

	return true

}

module.exports.verify = encoded => {
	let obj = JSON.parse(b64.decode(encoded))

	let opt = {
		sub: obj.subject_min || 15,
		txt: obj.text_min || 30
	}

	if (!email_regex.test(obj.from) && !phone_regex.test(obj.phone)) return "Preencha corretamente os campos de email/telefone!"
	if (obj.subject.length < opt.sub) return `O assunto do email deve possuir no mínimo ${opt.sub} caracteres!`
	if (obj.text.length < opt.txt) return `O texto do email deve possuir no mínimo ${opt.txt} caracteres!`

	if(send(obj)) return "Email enviado!"

	return "Houve um problema no envio do email!"
}


