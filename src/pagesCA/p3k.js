import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux'
import { getProductP3K } from '../actions'


class P3Kpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.getProductP3K()
        console.log(this.props.getProductP3K())
    }

    renderCard = () => {
        return this.props.products.map((item, index) => {
            return (
                <Card key={index} style={styles.card}>
                    <CardBody>
                        <img width="40%" src={item.image} alt="card images" style={styles.image} />
                        <CardTitle>{item.nama}</CardTitle>
                        <CardSubtitle style={{ marginBottom: '1vh' }}>Harga : {item.harga}</CardSubtitle>
                        <CardSubtitle> Deskripsi : {item.deskripsi}</CardSubtitle>
                        <ButtonGroup style={{ marginTop: '10vh', marginLeft: '1.75vw' }}>
                            <Button style={{ backgroundColor: 'black', marginRight: '1vw', width: '6vw' }}>-</Button>
                            <Button style={{ backgroundColor: 'black', width: '6vw' }}>+</Button>
                        </ButtonGroup>
                        <p style={{ marginTop: '2vh', marginLeft: '4vw' }}>Jumlah : </p>
                    
                    </CardBody>
                </Card>
            )
        })
    }
    render() {

        return (
            <div style={styles.root}>
                <h1 style={styles.title}>P3K (Pertolongan Pertama Pada Kecelakaan)</h1>
                <div style={styles.cardContainer}>
                    {this.renderCard()}
                </div>
                <Button style={{ marginLeft: '60vw', backgroundColor: 'black' }}>Add to cart</Button>

                
            </div>
        );

    }
}

const styles = {
    root: {
        height: 'auto',
        width: '100%',
        backgroundColor: '#f2f2f2',
        padding: '2% 7%'
    },
    title: {
        fontSize: 50,
        fontWight: 600,
        margin: '2% 0px'
    },
    cardContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    card: {
        flexBasis: '19%',
        minWidth: '300px',
        marginBottom: '1%',
        marginRight: '1%'
    },
    image: {
        marginLeft: 75

    }

}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.productP3K
    }
}

export default connect(mapStateToProps, { getProductP3K })(P3Kpage);