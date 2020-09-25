import React from 'react';
import { connect } from 'react-redux'
import { Table, Button } from 'reactstrap'

//import actions
import { TransactionHistory, approvePayment, rejectPayment } from '../actions'


class Transaksipage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: null
        }
    }

    componentDidMount() {
        this.props.TransactionHistory()
    }

    buttonAction = (id) => {
        this.setState({ selectedId: id })
    }

    buttonAprrove = (id) => {
        this.props.approvePayment(id)
        this.setState({selectedId : null})
    }
    buttonReject = (id) => {
        this.props.rejectPayment(id)
        this.setState({selectedId : null})
    }

    renderTableHead = () => {
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Order Number</th>
                        <th>Payment Type</th>
                        <th>Total</th>
                        <th>Status Payment</th>
                        <th>Bukti Transfer</th>
                        <th>Actions</th>
                    </tr>
                </thead>
            </Table>
        )
    }

    renderTableBody = () => {
        return this.props.history.map((item, index) => {
            if (item.id === this.state.selectedId) {
                return (
                    <Table dark key={index}>
                        <tbody>
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.order_number}</td>
                                <td>{item.type_payment}</td>
                                <td>{item.total}</td>
                                <td>{item.status_payment}</td>
                                {
                                    !item.bukti_transfer ? <td>BELUM BAYAR</td> : <td>{item.bukti_transfer}</td>
                                }
                                <Button onClick={() => this.buttonAprrove(item.id)}>Approve</Button>
                                <Button onClick={() => this.buttonReject(item.id)}>Reject</Button>
                            </tr>
                        </tbody>
                    </Table>
                )
            } else {
                return (
                    <Table dark key={index}>
                        <tbody>
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.order_number}</td>
                                <td>{item.type_payment}</td>
                                <td>{item.total}</td>
                                <td>{item.status_payment}</td>
                                {
                                    !item.bukti_transfer ? <td>BELUM BAYAR</td> : <td>{item.bukti_transfer}</td>
                                }
                                <Button onClick={() => this.buttonAction(item.id)}>Action</Button>
                            </tr>
                        </tbody>
                    </Table>
                )
            }  
    })
}

render() {
    console.log('history', this.props.history)
    return (
        <div>
            <h1>INI HALAMAN TRANSAKSI</h1>
            {this.renderTableHead()}
            {this.renderTableBody()}
        </div>
    );
}
}

const mapStateToProps = (state) => {
    return {
        history: state.adminReducer.trans_history
    }
}

export default connect(mapStateToProps, { TransactionHistory, approvePayment, rejectPayment })(Transaksipage);