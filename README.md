# Rcovery-Mailer
![node-current](https://img.shields.io/node/v/latest)  ![license](https://img.shields.io/badge/license-mit-yellow)  ![hackable](https://img.shields.io/badge/hackable%3F-yes-red)  ![backend](https://img.shields.io/badge/backend%3F-no-blue)  ![language](https://img.shields.io/badge/language%3F-english-pink)   ![country](https://img.shields.io/badge/country%3F-br-green)   
A Hackable email sender directly from javascript (no backend is needed).
## Table of contents
* [Technologies](#technologies)
* [Setup](#setup)
* [Credits](#credits)  
* [License](#license)  

## General info
This project provides a function that sends email, which can be easily implemented on your front-end. Without the need for a server, using a free server, specific to this repository, you can simply create a specific button that will send your form email.  
## Technologies
Project is created with:  
* Javascript: 47.1%  
* Css3: 32.6%  
* Html: 20.3%  
## Setup  
To run this project, install it locally:
Download the [rcoveryMail.js](https://github.com/marssaljr/rcovery-mailer/blob/main/src/front/rcoveryMail.js) and put it on the path of your project
Create a button and implement the trigger like the example:
```
<script type="text/javascript" src="rcoveryMail.js"></script>
<input type="button" class="input_style" value="Send" onclick="sendMail('emailForm', 'youremail@email.com', {subject_min: 2, text_min: 10})"/>
```
Really easy! the form is already!

## Credits  
- [Rcovery](https://github.com/rcovery)  
- [nodemailer](https://github.com/nodemailer/nodemailer)  
- [Marssaljr](https://github.com/marssaljr)  
### License

Rcovery is licensed under the **MIT license**

---
