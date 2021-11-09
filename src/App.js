import React, { useState } from 'react'
import './App.css';
import Form from './Form';
import Team from './Team';


const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [teams, setTeams] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues,[inputName]: inputValue})
  }
  const submitForm = () =>{
    const newTeam = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    setTeams([newTeam, ...teams]);
    setFormValues(initialFormValues);
    
  }
  return (
    <div className="App">
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {
        teams.map(team => {
          return (
            <Team key={team.id} details={team} />
          )
        })
      }
    </div>
  );
}

export default App;
