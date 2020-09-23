import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Login.css";
import { connect } from 'react-redux'

import { store } from '../../redux/store.js';
import { getToken } from '../../redux/token/actions.js';
import { getCurrentUser } from '../../redux/user/actions.js';
import { instance } from '../../axios/axios.js'

// handle validation
function Login({ getToken, getCurrentUser, cookies }) {
  const [formUsername, setFormUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return formUsername.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await getToken({username: formUsername, password})

    const { access, refresh } = store.getState().token
    instance.defaults.headers.common['Authorization'] = `Bearer ${access}`

    await getCurrentUser()

    localStorage.setItem('access', access)
    localStorage.setItem('refresh', refresh)
    const { data } = store.getState().user
    localStorage.setItem('user', JSON.stringify(data))
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <FormControl
            autoFocus
            value={formUsername}
            onChange={e => setFormUsername(e.target.value)}
            placeholder="Enter email or username..."
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Type your password here..."
          />
        </FormGroup>
        <Button block disabled={!validateForm()} variant="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch){
  return {
    getToken: (logInData) => dispatch(getToken(logInData)),
    getCurrentUser: () => dispatch(getCurrentUser()),
  }
}


export default connect(null, mapDispatchToProps)(Login)