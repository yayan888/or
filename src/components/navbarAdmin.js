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
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { LogoutAction } from '../actions'
// import Logo from '../assets/logo.jpg'

class NavbarAdmincomponent extends React.Component {
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

            <div >
                <Navbar color="black" light expand="md">
                    <NavbarBrand href="/" style={{marginLeft: '1vw' }}>
                    {/* <img src={Logo} style={{width:'15vw', height:'30vh'}}/> */}
                    </NavbarBrand>
                    <NavbarText style={{ marginRight: '10vw', marginBottom: '5vh', marginTop: '5vh', fontSize: '150%' }}></NavbarText>
                    <NavbarToggler onClick={this.onBtOpen} />
                    <Collapse isOpen={this.state.isOpen} navbar>


                        <Nav className="mr-auto" navbar style={{ alignSelf: 'center', justifyContent: 'center', justifyItems: 'center', alignItems: 'center', justifySelf: 'center' }}>
                            <NavItem style={{ textDecoration: 'none', marginLeft: '1vw', marginRight: '2vw' }}>
                                <Link to='/admin/pesanan' style={{ color: 'black', textDecoration: 'none' }} >
                                    <h3 >
                                        Pesanan
                                </h3>
                                </Link>
                            </NavItem>
                            <NavItem style={{ textDecoration: 'none', color: 'black', marginLeft: '2vw', marginRight: '1vw' }}>
                                <Link to='/admin/transaksi' style={{ color: 'black', textDecoration: 'none' }}>
                                    <h3>Riwayat Transaksi</h3>
                                </Link>
                            </NavItem>
                            <NavItem style={{ textDecoration: 'none', color: 'black', marginLeft: '2vw', marginRight: '1vw' }}>
                                <Link to='/admin/pengguna' style={{ color: 'black', textDecoration: 'none' }}>
                                    <h3>Data Pengguna</h3>
                                </Link>
                            </NavItem>
                            <NavItem style={{ textDecoration: 'none', color: 'black', marginLeft: '2vw', marginRight: '2vw' }}>
                                <Link to='/admin/stock' style={{ color: 'black', textDecoration: 'none' }}>
                                    <h3>Update Stock</h3>
                                </Link>
                            </NavItem>


                            {/* <Form inline style={{ marginLeft: '5vw' }}>
                                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                                <Button style={{ backgroundColor: 'black', textDecoration: 'none', borderColor: 'black' }}>Cari</Button>
                            </Form> */}


                            {

                                this.props.username ?

                                    <UncontrolledDropdown nav inNavbar style={{ marginLeft: '5vw' }}>
                                        <DropdownToggle nav caret>
                                            <h4 style={{ backgroundColor: 'none', color: 'black' }}>{this.props.username.charAt(0).toUpperCase()}</h4>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <Link to='/profil' style={{ textDecoration: 'none', color: 'black' }}>
                                                    <NavItem>
                                                        Profil
                                                </NavItem>
                                                </Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link to='/keranjang' style={{ textDecoration: 'none', color: 'black' }}>
                                                    <NavItem>
                                                        Keranjang
                                                </NavItem>
                                                </Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link to='/riwayattransaksi' style={{ textDecoration: 'none', color: 'black' }}>
                                                    <NavItem>
                                                        Transaksi
                                                </NavItem>
                                                </Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link to='/' onClick={this.handleLogout} style={{ textDecoration: 'none', color: 'black' }}>
                                                    <NavItem style={{}}>
                                                        Keluar
                                                </NavItem>
                                                </Link>
                                            </DropdownItem>
                                            {/* <DropdownItem divider /> */}
                                            {/* <DropdownItem>
                                        Reset
                </DropdownItem> */}
                                        </DropdownMenu>
                                    </UncontrolledDropdown>



                                    :

                                    <UncontrolledDropdown nav inNavbar style={{ marginLeft: '5vw' }}>
                                        <DropdownToggle nav caret style={{ borderColor: 'black', borderRadius: '20px', width: '5vw' }}>

                                            <h5 style={{ color: 'black' }}>Masuk</h5>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>
                                                <Link to='/masuk' style={{ textDecoration: 'none', color: 'black' }}>
                                                    <NavItem>
                                                        Masuk
                                                </NavItem>
                                                </Link>
                                            </DropdownItem>
                                            <DropdownItem>
                                                <Link to='/daftar' style={{ textDecoration: 'none', color: 'black' }}>
                                                    <NavItem style={{}}>
                                                        Daftar
                                                </NavItem>
                                                </Link>
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

export default connect(mapStateToProps, { LogoutAction })(NavbarAdmincomponent);