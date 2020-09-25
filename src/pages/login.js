import React from 'react';
import { connect } from 'react-redux'
import { Col, Button, Form, FormGroup, Label, Input, Card, CardText } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { LoginAction } from '../actions'


class Loginpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password : "",

        }
    }

    handleLogin = () => {
        const body = {
            username : this.username.value,
            password : this.password.value
        }
        this.props.LoginAction(body)
        console.log(this.props.username)

   }

    render() {
        if (this.props.username) {
            return<Redirect to='/'/>
        }

        return (
            
            <Card style={{marginleft:'1vw'}} >
                <CardText style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center', alignItems:'center', justifyItems:'center', justifySelf:'center', fontSize: 40, marginTop: '5vh', marginBottom: '5vh' }}>Masuk</CardText>
                <Form style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center', alignItems:'center', justifyItems:'center', justifySelf:'center', }}>
                    
                        <Col md={7} style={{marginLeft:'8vw'}} >
                            <FormGroup >
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email address" innerRef={(username) => this.username = username}  />
                            </FormGroup>
                        </Col>
                        <Col md={7} style={{marginLeft:'8vw'}}>
                            <FormGroup >
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" 
                                innerRef={(password) => this.password = password}/>
                            </FormGroup>
                        </Col>

                    <FormGroup check style={{marginLeft:'9vw'}}>
                        <Input type="checkbox" name="check" id="exampleCheck" />
                        <Label for="exampleCheck" style={{ marginBottom: 20 }}>Keep me signed in
                        </Label>
                    </FormGroup>
                    <Button style={{ backgroundColor: 'black', width: '40vw' }}onClick={this.handleLogin}>Sign in</Button>
                </Form>
                <CardText style={{ marginBottom: 20, marginTop: 20, justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
                Not a member?
                <Link to='/register' style={{ color: 'black' }}>
                 Sign up.
                </Link >
                </CardText>
            </Card>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username : state.userReducer.username
    }
}


export default connect(mapStateToProps, { LoginAction })(Loginpage);