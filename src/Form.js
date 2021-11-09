// - [x] In `Form.js` build out your markup.
// - [x] Build inputs for `name`, `email` and `role` (backend engineer, frontend engineer, designer, etc. Use your imagination).
// - [x] You will have to decide which component is responsible for maintaining the _state_ of the form (`Form` itself, or its parent `App`). Each approach has advantages and disadvantages.
// - [x] Render your `Form` component in `App`. The `App` component should hand down through props any callback(s) needed for `Form` to do its job (adding new members to your team members state on submit).

import React from 'react'

export default function Form(props){
    const {values, update, submit} = props
    
    const onSubmit = evt =>{
        evt.preventDefault();
        submit();
    }

    const onChange = evt =>{
        const name = evt.target.name;
        const { value } = evt.target;
        update(name, value);
    }

    return(
        <form className="form-container" onSubmit={onSubmit}>
            <div className="form-inputs">
                <label>
                   Name
                   <input 
                        type="text"
                        name = "name"
                        value ={values.name}
                        onChange= {onChange}
                        maxLength= '20' 
                    /> 
                </label>

                <label>
                    Email
                    <input 
                        type="email"
                        name = "email"
                        value ={values.email}
                        onChange= {onChange}
                    /> 
                </label>

                <label>
                    Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">--Select a Role--</option>
                        <option value="Backend">Backend Engineer</option>
                        <option value="Frontend">Frontend Engineer</option>
                        <option value="UX/UI Designer">UX/UI Designer</option>
                    </select> 
                </label>

                <div className='submit'>
                    <button disabled={!values.name || !values.email || !values.role}>submit</button>
                </div>
            </div>
        </form>
    )
}