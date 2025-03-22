
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../../client";
import "./login.css"
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [errorLogin , setErroLogin] = useState("")

  
 const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click")      
        client
             .post("/auth/login" , {
                email,
                user,
             })
             .then((response) => {
               console.log("resposta", response);
               navigate("/products")
             })
             .catch((error) => {
              console.log(error)
              setErroLogin(error.response.data.message)
             
              
            } );
      };


  return (
    <div className="loginDiv">

<header>
        Peddy Paper 2.0 Pai do Paulo
      </header>

      <form className="loginForm" onSubmit={handleSubmit}>


        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="text"
          id="name"
          placeholder="Nome"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <button className="loginbtn" type="onSubmit">
          Login
        </button>

          
      {errorLogin && (
                                <div className="text-danger">{errorLogin}</div>
                            )}

        <p className="signupLink">
          Don't have an account? <Link to="/registo" className="goToRegister">Sign up</Link>
        </p>

      </form>
    </div>
  );
}


export default Login;