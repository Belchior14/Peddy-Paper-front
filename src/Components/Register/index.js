import React, { useEffect, useState , useContext } from "react";
import { client } from "../../client";
import { Link } from "react-router-dom";
import "./register.css"
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [teamMembers , setTeamMembers] = useState()
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [teamName, setTeamName] = useState("");
    const [team, setTeam] = useState([]) ;
    const [selectedValue, setSelectedValue] = useState();
    const [errorRegister , setErrorRegister] = useState();


  

    const handleSelectChange = (event) => {
        const newValue = Number(event.target.value);
        setTeamMembers(newValue);

        setTeam((prev) => {
            const newArray = Array.from({ length: newValue }, (_, i) => prev[i] || "");
            return newArray;
          });
      };

      const handleInputChange = (index, value) => {
        setTeam((prev) => {
          const newArray = [...prev];
          newArray[index] = value;        
          return newArray;
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click")      
        team.push( name)
        client
             .post("/auth/signup" , {
                email,
                name,
                teamName,
                team
             })
             .then((response) => {
               console.log("resposta", response);
               navigate("/products")
             })
             .catch((error) => {
              console.log(error)
              setErrorRegister(error.response.data.message)
              setTeam([])
              
            } );
      };

return(
    <div>
    <div className="homePage">
      <header>
        Peddy Paper 2.0 Pai do Paulo
      </header>

      <div className="registerForm">
        <form onSubmit={handleSubmit}>
        <input id="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value)}} />
        <input id="name" placeholder="Nome" value={name} onChange={(e) => { setName(e.target.value)}} />
        <input id="teamName" placeholder="Nome da equipa" value={teamName} onChange={(e) => { setTeamName(e.target.value)}}/>
        <label for="teamMembers">Outros membros da equipa</label>
        <select id="teamMembers" name="teamMembers" onChange={handleSelectChange} value={teamMembers} >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        </select>
        <div className="teamMembersName">
        {teamMembers > 0 &&
          team.map((nameM, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Nome ${index + 1}`}
              value={nameM}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
      </div>

      <button className="registerBtn">Registo</button>

      {errorRegister && (
                                <div className="text-danger">{errorRegister}</div>
                            )}

<p className="loginLink">
            Already have an account? <Link to="/login" className="goToLogin">Click here</Link>
          </p>                    


        </form>
     
        


      </div>
    </div>
    </div>
)


}


export default Register;