import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import {
    Card,
    Button,
    CardImg,
    CardTitle,
    CardText,
    CardGroup,
    CardBody
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom'
import { URL } from '../actions'

// import actions 
import { addCart } from '../actions'

class Productdetailpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            qty: 0,
            status : false
        }
    }

    componentDidMount() {
        Axios.get(URL + `/productId${this.props.location.search}`)
            .then(res => {
                console.log("data", res.data)
                this.setState({ product: res.data[0] })
            })
            .catch(err => console.log(err))
    }

    buttonPlus = () => {
        this.setState({ qty: this.state.qty + 1 })

    }
    buttonMinus = () => {
        if (this.state.qty === 0) {
            return
        } else {
            this.setState({ qty: this.state.qty - 1 })
        }
    }

    buttonCart = () => {
        const body = {
            qty: this.state.qty,
            total: this.state.product.harga * this.state.qty,
            user_id: this.props.id,
            product_id: this.state.product.id
        }
        console.log(body)
        this.props.addCart(body)
        this.setState({ status : true})
    }

    renderCardDetail = () => {
        const { nama, image } = this.state.product
        return (
            <div style={{ marginLeft: '2vw', marginRight: '2vw', marginBottom: '20vh' }}>
                <CardText style={{ marginLeft: '38.5vw', marginTop: '5vh', marginBottom: '5vh', fontSize: 48 }}>
                    Product Detail
                    </CardText>
                <div>
                    <CardGroup style={{}}>
                        <Card style={{ width: '94vw' }}>
                            <CardImg top style={{ width: '30vw', height: '50vh', marginTop: '6vh', marginLeft: '2vw' }} src={image} />
                            <CardTitle style={{ marginLeft: '50vw' }}>{nama}</CardTitle>
                            <CardBody>
                                <CardText>Demam adalah kondisi meningkatnya suhu tubuh hingga lebih dari 380C.
                                                Demam menandakan adanya penyakit atau kondisi lain di dalam tubuh.</CardText>
                                <Link to='/category/demam' style={{ textDecoration: 'none', color: 'black', width: '30vw' }}>

                                </Link>
                                <Button onClick={this.buttonPlus}>+</Button>
                                <Button onClick={this.buttonMinus}>-</Button>
                                <p>Jumlah : {this.state.qty}</p>
                                
                                    <Button onClick={this.buttonCart}>Go To Cart</Button>
                
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        )
    }

    render() {
        if(this.props.redirect) {
            return(
                <Redirect to="/cart"/>
            )
        }
        return (
            <div>
                {this.renderCardDetail()}
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.userReducer.id,
        loading : state.orderReducer.loading,
        redirect : state.orderReducer.redirect
    }
}

export default connect(mapStateToProps, { addCart })(Productdetailpage);





