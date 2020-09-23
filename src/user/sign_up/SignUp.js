import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Button, Form, Icon, Input } from 'semantic-ui-react'
import { performAction } from '../../redux/user/actions'

//TODO  REFACTOR WITH USE FORM HOOK AND YUP
function SignUp({ createUser }){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [type, setType] = useState('password')
    const [confirmType, setConfirmType] = useState('password')

    const { register, handleSubmit } = useForm();
    const onSubmit = () => createUser({ username, password, email})

    return (
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Input
                  label='Username'
                  placeholder='Username'
                  name='username'
                  onChange={(e, {value}) => setUsername(value)}
                  ref={register({ required: true })}
                />
                <Form.Input
                  label='Email'
                  placeholder='Email'
                  name='email'
                  onChange={(e, {value}) => setEmail(value)}
                  ref={register({ required: true })}
                  />
                <Form.Input
                  label='Password'
                  placeholder='Password'
                  name='password'
                  onChange={(e, { value }) => setPassword(value)}
                  type={type}
                  icon={<Icon 
                    name='eye' 
                    onClick={() => type === 'password' ? setType('') : setType('password')} 
                    inverted circular />}
                  ref={register({ required: true})}
                  />
                <Form.Input
                  label='Confirm password'
                  placeholder='Confirm password'
                  name='confirmPassword'
                  onChange={(e, {value}) => setConfirmPassword(value)}
                  type={confirmType}
                  icon={<Icon 
                    name='eye'
                    onClick={() => confirmType === 'password' ? setConfirmType('') : setConfirmType('password')}
                    inverted circular />}
                  ref={register({ required: true })}
                />
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Button type='submit'>Sign Up</Button>       
            </Form>
    )
}

function mapDispatchToProps(dispatch){
    return {
        createUser: (data) => dispatch(performAction('create', data))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)