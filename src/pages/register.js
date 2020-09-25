import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card,CardText } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { RegisterAction } from '../actions'

class Registerpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  
  handleRegister = () => {
    const body = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      confpassword: this.confpassword.value
    }
    console.log(body)
    this.props.RegisterAction(body)
  }


  render() {
    if (this.props.status) { 
      return <Redirect to ="/login"/>
    }
    return (
      <Card >
        <CardText style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center', fontSize: 40, marginTop: '5vh', marginBottom: '5vh' }}>Register</CardText>

        <Form style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
          <Row form>
            <Col md={5} style={{ marginLeft: '12vw' }}>
              <FormGroup>
                <Input type="email" name="email" id="exampleEmail" placeholder="Username" innerRef={(username) => this.username = username}/>
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={5} style={{ marginLeft: '12vw' }}>
              <FormGroup>
                <Input type="email" name="email" id="exampleEmail" placeholder="Email Address" innerRef={(email) => this.email = email}/>
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={5} style={{ marginLeft: '12vw' }}>
              <FormGroup>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" innerRef={(password) => this.password = password} />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={5} style={{ marginLeft: '12vw' }}>
              <FormGroup>
                <Input type="password" name="password" id="examplePassword" placeholder="Confirm password" innerRef={(confpassword) => this.confpassword = confpassword}/>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup check style={{ marginLeft: '3vw' }}>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" style={{ marginBottom: 20 }}>By creating an account, you agree to HM Privacy Policy and Terms of Use.
          </Label>
          </FormGroup>
          <Button style={{ backgroundColor: 'black', width: '40vw' }}  onClick={this.handleRegister}>Sign up</Button>
        </Form>
        <CardText style={{ marginBottom: 20, marginTop: 20, justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
                <h9 >Already a member?</h9>
                <Link to='/login' style={{  color: 'black' }}>
                <h9> Sign in.</h9>
                </Link >
                </CardText>
        {/* <Button>ef</Button> */}
      </Card>
    );
  }


}

const mapStateToProps = (state) => {
  return {
    status : state.userReducer.register_status
  }
}


export default connect(mapStateToProps, {RegisterAction})(Registerpage);