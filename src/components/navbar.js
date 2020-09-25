import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
import { Button, FormControl, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { LogoutAction } from '../actions'

class Navbarcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }


    handleLogout = () => {
        localStorage.removeItem('id')
        localStorage.removeItem('token')
        this.props.LogoutAction()
    }

    onBtOpen = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }


    render() {
        return (

            <div>
                <Navbar color="black" light expand="md">
                    <NavbarBrand href="/" style={{ fontSize: '3vw', marginRight: '1vw' }}>Harapan Mulya</NavbarBrand>
                    <NavbarText style={{ marginRight: '10vw', marginBottom: '5vh', marginTop: '5vh', fontSize: '150%' }}></NavbarText>
                    <NavbarToggler onClick={this.onBtOpen} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar style={{ alignSelf: 'center', justifyContent: 'center', justifyItems: 'center', alignItems: 'center', justifySelf: 'center' }}>
                            <NavItem style={{ textDecoration: 'none', marginLeft: '2vw', marginRight: '2vw' }}>
                                <Link to='/category' style={{ color: 'black', textDecoration: 'none' }} >
                                    <h3 >
                                        Category
                                </h3>
                                </Link>
                            </NavItem>
                            <NavItem style={{ textDecoration: 'none', color: 'black', marginLeft: '2vw', marginRight: '2vw' }}>
                                <Link to='/drugs' style={{ color: 'black', textDecoration: 'none' }}>
                                    <h3>Drugs</h3>
                                </Link>
                            </NavItem>
                            <NavItem style={{ textDecoration: 'none', color: 'black', marginLeft: '2vw', marginRight: '2vw' }}>
                                <Link to='/news' style={{ color: 'black', textDecoration: 'none' }}>
                                    <h3>News</h3>
                                </Link>
                            </NavItem>
                            <Form inline style={{ marginLeft: '5vw' }}>
                                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                                <Button style={{ backgroundColor: 'black', textDecoration: 'none', borderColor: 'black' }}>Cari</Button>
                            </Form>
                            {
                                this.props.username ?

                                    <UncontrolledDropdown nav inNavbar style={{ marginLeft: '5vw' }}>
                                        <DropdownToggle nav caret>
                                            <h4 style={{ backgroundColor: 'none' }}>{this.props.username.charAt(0).toUpperCase()}</h4>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <NavItem>
                                                    <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}>
                                                        Profile
                                                </Link>
                                                </NavItem>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavItem style={{}}>
                                                    <Link to='/' onClick={this.handleLogout} style={{ textDecoration: 'none', color: 'black' }}>
                                                        Log out
                                                 </Link>
                                                </NavItem>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    :
                                    <UncontrolledDropdown nav inNavbar style={{ marginLeft: '5vw' }}>
                                        <DropdownToggle nav caret style={{ borderColor: 'black', borderRadius: '20px', width: '5vw' }}>

                                            <h5 style={{ color: 'black' }}>Masuk</h5>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <NavItem>
                                                    <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>
                                                        Login
                                                </Link>
                                                </NavItem>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <NavItem style={{}}>
                                                    <Link to='/register' style={{ textDecoration: 'none', color: 'black' }}>
                                                        Register
                                                 </Link>
                                                </NavItem>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                            }

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.username
    }
}

export default connect(mapStateToProps, { LogoutAction })(Navbarcomponent);