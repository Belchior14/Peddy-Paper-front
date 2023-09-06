import React, { useState } from "react";
import emailjs from "@emailjs/browser"
import "./sendEmail.css"

function SendEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");


  function sendEmail (e) {
    e.preventDefault()

    if(name && email && text) {

        const templateParams = {
            from_name: name, 
            message: text,
            email:email
        }

        emailjs.send("service_2bn4ocd","template_xkjqx3o", templateParams, "R4mdVzD_jLVKQOpjj")
        .then((response) => {

            console.log("email enviado", response.status, response.text)
            setName("")
            setEmail("")
            setText("")

        })
        .catch((err) => console.log(err))

      

    }

    
  }

  return (
    <div className="container">
      <h1 className="title">Contacto</h1>

        <form className="form" onSubmit={sendEmail}>
            <div>
            {/* <label>Nome:</label> */}
            <input type="text" className="input" placeholder="Escreva o seu nome" onChange={(e) => {setName(e.target.value)}} value={name} />
            </div>
            <div>
            {/* <label>E-mail:</label> */}
            <input type="text" className="input" placeholder="Escreva o seu e-mail" onChange={(e) => {setEmail(e.target.value)}} value={email} />
            </div>
            <div>
           {/*  <label>Texto:</label> */}
            <textarea className="textarea" placeholder="Escreva a sua mensagem" onChange={(e) => {setText(e.target.value)}} value={text} />
            </div>
          
          <input type="submit"  className="btn-lrg submit-btn" value="Enviar"/>


        </form>


    </div>
  );
}

export default SendEmail;
