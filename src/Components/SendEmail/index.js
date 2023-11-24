import React, { useState } from "react";
import emailjs from "@emailjs/browser"
import "./sendEmail.css"


function SendEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [needAll , setNeedAll] = useState(false)
  const [contactoSent , setContactoSent] = useState(false)


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
            setNeedAll(false)
            setContactoSent(true)

        })
        .catch((err) => console.log(err))

      

    } else {
      setNeedAll(true)
      setContactoSent(false)
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

          <div className= {needAll ? "needAll" : "hidden"} >
              <span>Obrigatório preencher todos os campos.</span>
            </div>

            <div className= {contactoSent ? "sent" : "hidden"} >
              <span>E-mail enviado, irá ser respondido o mais rápido possível :) </span>
            </div>

        </form>


    </div>
  );
}

export default SendEmail;
