import React, { useState, useEffect, useContext } from 'react';
import request from 'superagent';
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';



export default function FormRegister(props){

  // const {state, updateContext} = useContext(MyContext);
  const [newFisrtName, setnewFisrtName] = useState('');
  const [newLastName, setnewLastName] = useState('');
  const [newEmail, setnewEmail] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [verifPassword, setverifPassword] = useState('');
  const [newPseudo, setPseudo] = useState('');
  const [newError, setnewError] = useState([false, '']);  

  const handleAddUser = (event) => {
    event.preventDefault() // pour pas que la page se realod
    //on envoie le nouveau tableau de User dans le backend

    request
      .post('http://127.0.0.1:3000/register')
      .send({ 
        firstName: newFisrtName,
        lastName: newLastName,
        email: newEmail, 
        password: newPassword,
        verifPassword: verifPassword,
        pseudo: newPseudo
      })
      .then(response => {
        if (response.body[0] == false) {
          setnewError(response.body[0], null)
        } else {
          setnewError(response.body[0], response.body[1])
          console.log('why ?',  response.body[1])
          
        }
      })
      .catch(error => {
        setnewError(true, 'merci d\'appeler un membre du staff');
      });

  }

  const handleChange = (event) => {
    switch (event.target.alt) {
      case 'newFisrtName':
        setnewFisrtName(event.target.value);        
        break;
      case 'newLastName':
        setnewLastName(event.target.value);
        break;
      case 'newEmail':
        setnewEmail(event.target.value);
        break;
      case 'newPassword':
        setnewPassword(event.target.value);
        break;
      case 'verifPassword':
        setverifPassword(event.target.value);
        break;
      case 'newPseudo':
        setPseudo(event.target.value);
        break;
      default:
        setnewError(true);
        break;
    }
  }

  return (
    <div>
      {newError[1] == null ? <Navigate to={"/Auth/Profil"} replace={true} /> : ''}
      {/* {newError[1] == null ? console.log('marche') : console.log('marche pas')} */}
      <form action="submit" onSubmit={handleAddUser}>
      <input type="text"
        value={newFisrtName}
        onChange={handleChange}
        placeholder="prenom"
        alt='newFisrtName'
        name='newFisrtName'
      />
      <input type="text" 
        value={newLastName}
        onChange={handleChange}
        placeholder="nom"
        alt='newLastName'
      />
      <input type="text" 
        value={newEmail}
        onChange={handleChange}
        placeholder="email"
        alt='newEmail'
      />
      <input type="password" 
        value={newPassword}
        onChange={handleChange}
        placeholder="mot de passe"
        alt='newPassword'
      />
      <input type="password" 
        value={verifPassword}
        onChange={handleChange}
        placeholder="verification du mot de passe"
        alt='verifPassword'
      />
      <input type="text" 
        value={newPseudo}
        onChange={handleChange}
        placeholder="pseudo"
        alt='newPseudo'
      />
      <button type="submit"></button>
      </form>
    </div>
  ); 
}