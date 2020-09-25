import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { CardText } from 'reactstrap'

import { URL } from '../actions'

class Verificationpage extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {
            verified : false
        }
    }
    async componentDidMount () {
        const token = this.props.location.search.substring(1)
        try {
            const res = await Axios.post(URL + '/users/verification', { token })
            console.log(res.data)
            this.setState({ verified : true })

        } catch (err) {
            console.log(err)
        }
    }

    render () {
        console.log('location : ', this.props.location)
        console.log('token : ', this.props.location.search.substring(1))
        return (
            <div>
                {
                    this.state.verified ? 
                    <Link to="/login">
                        <Button style={{backgroundColor: 'black', borderColor:'black',justifyContent:'center', justifyItems:'center', justifySelf:'center',alignContent:'center',alignSelf:'center',alignItems:'center', marginLeft:'40vw',marginBottom:'30vh', marginTop:'30vh', height:'20vh', width:'20vw'}}>You can login now :)</Button>
                    </Link>
                    :
                    <CardText style={{justifyContent:'center', justifyItems:'center', justifySelf:'center',alignContent:'center',alignSelf:'center',alignItems:'center', marginLeft:'44vw',marginBottom:'30vh', marginTop:'30vh'}}>
                    <h1>Loading . . .</h1>
                    </CardText>
                }
            </div>
        )
    }
}

export default Verificationpage