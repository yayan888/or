import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Toast, ToastBody, Button, CardImg, CardText } from 'reactstrap'
import BCA from '../assets/BCA.png'
import Mandiri from '../assets/Bank-Mandiri-01.png'
import OVO from '../assets/ovo.png'
import DANA from '../assets/dana.png'

import {AddPayment} from '../actions'

class Checkoutpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payment: 0
        }
    }



    buttonBca = () => {
        console.log('okbca')
        this.setState({ payment: 1})
    }

    buttonMandiri = () => {
        this.setState({payment : 2})
    }

    buttonOvo = () => {
        this.setState({ payment: 3 })
    }

    buttonDana = () => {
        this.setState({ payment: 4 })
    }


    buttonPayment = () => {
        console.log('ajib')
        const body = {
            type : this.state.payment,
            total : this.props.total,
            order_number : this.props.order_number,
            user_id : this.props.user_id
        }
        console.log(body)
        this.props.AddPayment(body)
    }

    render() {
        console.log(this.props.order_number)
        return (
            <div style={{ marginBottom: '20vh' }}>
                <CardText style={{ marginLeft: '44vw', fontSize : 32 }}>
                    Checkout
                </CardText>
                <div className="p-3 bg-danger rounded" style={{ marginTop: '10vh', height: '20vh', display: 'flex' }}>
                    <Toast style={{ marginTop: '4vh', marginRight: '5vw' }}>
                        <ToastBody style={{ fontSize: '25px', alignItems: 'center' }}>
                            Pilih metode pembayaran
                        </ToastBody>
                    </Toast>
                    <Button style={{ backgroundColor: 'transparent', height: '10vh', marginLeft: '0vw', marginTop: '3.5vh' }} onClick={this.buttonBca}>
                        <CardImg src={BCA} style={{ width: '8vw', height: '5vh' }} />
                    </Button>
                    <Button style={{ backgroundColor: 'transparent', height: '10vh', marginLeft: '2vw', marginTop: '3.5vh' }} onClick={this.buttonMandiri}>
                        <CardImg src={Mandiri} style={{ width: '8vw', height: '8.5vh' }} />
                    </Button>
                    <Button style={{ backgroundColor: 'transparent', height: '10vh', marginLeft: '2vw', marginTop: '3.5vh' }} onClick={this.buttonOvo}>
                        <CardImg src={OVO} style={{ width: '6vw', height: '7vh', }} />
                    </Button>
                    <Button style={{ backgroundColor: 'transparent', height: '10vh', marginLeft: '2vw', marginTop: '3.5vh' }} onClick={this.buttonDana}>
                        <CardImg src={DANA} style={{ width: '9vw', height: '6vh', }} />
                    </Button>
                </div>
                <div className="p-3 bg-info my-2 rounded" style={{ marginTop: '10vh', height: '15vh', display: 'flex' }}>
                    <h1>TOTAL : {this.props.total} </h1>
                </div>
                <Link to='/resi'>
                <Button
                    style={{ marginLeft: '70vw', width: 300, backgroundColor: 'black', marginTop: '2vh' }}
                    onClick={this.buttonPayment}
                >Bayar</Button>
                </Link>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        total: state.orderReducer.total,
        order_number : state.orderReducer.order_number,
        user_id : state.userReducer.id
    }
}

export default connect(mapStateToProps, {AddPayment})(Checkoutpage);