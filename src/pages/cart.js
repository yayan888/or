import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, Button } from 'reactstrap';

//import actions
import {
    getCart,
    actionPlus,
    actionMinus,
    editCart,
    checkOutAction,
    deleteAction,
} from '../actions'

class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: null,
            quantity: 0,
            total: null,
        }
    }

    componentDidMount() {
        this.props.getCart()
    }

    buttonEdit = (id) => {
        this.setState({ selectedId: id })
    }

    buttonDelete = (id) => {
        this.props.deleteAction(id, this.props.user_id)
    };

    buttonCancel = () => {
        this.props.getCart()
        this.setState({ selectedId: null })
    }

    buttonPlus = (index, id) => {
        this.props.actionPlus(index)
        this.setState({ selectedId: id })
    }


    buttonMinus = (index, id) => {
        this.props.actionMinus(index)
        this.setState({ selectedId: id })
    }

    buttonSave = (index) => {
        console.log('ok')
        const body = {
            id: this.state.selectedId,
            newQty: this.props.cart[index].qty,
            total: this.props.cart[index].harga * this.props.cart[index].qty,
        }
        this.props.editCart(body)
        this.props.getCart()
        this.setState({ selectedId: null })
    }

    buttonCheckout = () => {
        console.log('checkout')
        this.props.checkOutAction(this.props.orderNumb)
    }

    renderTableHead = () => {
        return (

            <thead style={{ width: "100%" }} >
                <tr>
                    <th>No</th>
                    <th>Nama Barang</th>
                    <th>Quantity</th>
                    <th>Harga</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>

        )
    }

    renderTableBody = () => {
        return this.props.cart.map((item, index) => {
            if (item.id === this.state.selectedId) {
                return (
                        <tbody>
                            <tr>
                                <th scope="row" key={item.id}>{item.id}</th>
                                <td>{item.nama}</td>
                                <td><Button onClick={() => this.buttonMinus(index, item.id)}>-</Button>
                                    {item.qty}
                                    <Button onClick={() => this.buttonPlus(index, item.id)}>+</Button></td>
                                <td>{item.harga}</td>
                                <td>{item.qty * item.harga}</td>
                                <td><Button onClick={() => this.buttonSave(index, item.id)}>OK</Button>
                                    <Button onClick={this.buttonCancel}>CANCEL</Button></td>
                            </tr>
                        </tbody>
                )
            } else {
                return (
                    <tbody>
                        <tr>
                            <th scope="row" key={item.id}>{index + 1}</th>
                            <td>{item.nama}</td>
                            <td>{item.qty}</td>
                            <td>{item.harga}</td>
                            <td>{item.qty * item.harga}</td>
                            <td><Button onClick={() => this.buttonEdit(item.id)}>Edit</Button>
                                <Button onClick={() => this.buttonDelete(item.id)}>Delete</Button></td>
                        </tr>
                    </tbody>
                )
            }
        })
    }


    render() {
        return (
            <div>
                <Table className="col-6" style={{ backgroundColor: 'black', color: 'white' }}>
                    {this.renderTableHead()}
                    {this.renderTableBody()}
                    <Link to="/checkout">
                        <Button onClick={this.buttonCheckout}>CheckOut</Button>
                    </Link>
                    <h2>Total : {this.props.total}</h2>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.orderReducer.cart,
        total: state.orderReducer.total,
        orderNumb: state.orderReducer.order_number,
        user_id: state.userReducer.id
    }
}

export default connect(mapStateToProps,
    {
        getCart,
        actionPlus,
        actionMinus,
        editCart,
        checkOutAction,
        deleteAction
    })(CartPage);


