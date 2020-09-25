import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {connect} from 'react-redux'
import {getProductAntiseptik} from '../actions'


class Antiseptikpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
       this.props.getProductAntiseptik()
       console.log(this.props.getProductAntiseptik())
    }

    renderCard = () => {
        return this.props.products.map((item, index) => {
            return (
                <Card key={index} style={styles.card}>
                <CardBody>
                    <img width="60%" src={item.image} alt="card images" style={styles.image}/>
                    <CardTitle>{item.nama}</CardTitle>
                    <CardSubtitle style={{fontSize:'30px', marginBottom:'10vh'}}>Harga : {item.harga}</CardSubtitle>
                    <CardSubtitle> Deskripsi : {item.deskripsi}</CardSubtitle>
                </CardBody>
            </Card>
            )
        })
    }
    render() {
        
        return (
            <div style={styles.root}>
            <h1 style={styles.title}>ANTISEPTIK</h1>
            <div style={styles.cardContainer}>
                {this.renderCard()}
            </div>
        </div>
            );
        
    } 
}

const styles = {
    root : {
        height : 'auto',
        width : '100%',
        backgroundColor : '#f2f2f2',
        padding : '2% 7%'
    },
    title : {
        fontSize : 50,
        fontWight : 600,
        margin : '2% 0px'
    },
    cardContainer : {
        width : '100%',
        display : 'flex',
        flexWrap : 'wrap',
        justifyContent : 'flex-start'
    },
    card : {
        flexBasis : '19%',
        minWidth : '300px',
        marginBottom : '1%',
        marginRight : '1%'
    },
    image : {
        marginLeft : 75

    }

}

const mapStateToProps = (state) => {
    return {
        products : state.productReducer.productAntiseptik
    }
}

export default connect(mapStateToProps,{getProductAntiseptik})(Antiseptikpage);