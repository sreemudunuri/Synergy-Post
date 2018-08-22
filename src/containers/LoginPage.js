import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import BookmarkAdapter from '../api/BookmarkAdapter';

class LoginForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleEmail= (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Failed to login')
      })
      .then(json => {
        localStorage.setItem("token", json.access_token);
      })
      .then(() => {
          this.props.history.push('/news')
      })
      .catch(err => {
        console.warn('You have been warned.', err);
      })
  }

  handleClickForSignUp = () => {
    this.props.history.push('/register')
  }

  render (){
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
          <Image src='/logo.png' /> Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left'
            placeholder='E-mail address'
            value={this.state.email}
            onChange={this.handleEmail}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={this.state.password}
              onChange={this.handlePassword}
            />

              <Button color='teal' fluid size='large'
              onClick={this.handleSubmit}
              >
                Login
              </Button>

          </Segment>
        </Form>
        <Message>
          New to us?
          <a
          onClick={this.handleClickForSignUp}
          >Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)
}
}

export default LoginForm
