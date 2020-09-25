import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import {connect} from 'react-redux'

import { getCart } from '../actions'

class Receiptpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.getCart()
    }
    
    render() {
        console.log(this.props.payment_id)
        return (
            <div style={{ marginBottom: '20vh' }}>
                <h1 style={{ marginLeft: '47vw' }}>RESI</h1>
                <div>
                    <Link to='/riwayattransaksi'>
                        <Button style={{ width: '30vw', marginLeft: '35vw', marginTop: '20vh', backgroundColor: '#e85661' }}>Selesai</Button>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        payment_id : state.paymentReducer.payment_id,
        order_number : state.orderReducer.order_number
    }
}

export default connect(mapStateToProps, {getCart})(Receiptpage);