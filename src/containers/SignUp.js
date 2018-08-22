import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
export default class SignUp extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    if (event.target.name === 'name') {
      this.setState({
        [event.target.name]: event.target.value
      })
    } else if (event.target.name === 'email') {
      this.setState({
        [event.target.name]: event.target.value
      })
    } else if (event.target.name === 'password') {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  handleClick = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }),
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Failed to register')
      })
      .then(() => {
          this.props.history.push('/')
      })
      .catch(err => {
        console.warn('You have been warned.', err);
      })
  }

  handleClickForLogin = () => {
    this.props.history.push('/')
  }

  render(){
    return(
      <div className='login-form'>
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Sign up a new account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid
              icon='user'
              iconPosition='left'
              placeholder='Name'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
              />
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
              />
              <Button
              color='teal'
              fluid size='large'
              onClick={this.handleClick}>
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <a onClick={this.handleClickForLogin}
            >Login</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
    )
  }
}
