import React from 'react';
import {
    Card,
    Button,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
    FormGroup,
} from 'reactstrap';
import { LoginAction } from '../actions'
import { connect } from 'react-redux'
import { RegisterAction } from '../actions'
import { getProfile, URL_IMG, editProfile, upload } from '../actions'

import avatar from '../assets/no-profile.jpg'
class Profilepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            image: null
        }
    }

    componentDidMount() {
        this.props.getProfile()
    }

    handleSave = () => {
        console.log(this.refs)
        const body = {
            address: this.refs.address.value,
            phone: this.refs.phone.value,
            gender: this.refs.gender.value
        }
        this.props.editProfile(body)
        this.setState({ edit: false })
    }

    handleChoose = (e) => {
        console.log('event : ', e.target.files)
        this.setState({ image: e.target.files[0] })
    }

    handleUpload = async () => {
        console.log('image : ', this.state.image)

        const data = new FormData()
        data.append('IMG', this.state.image)
        console.log('form data : ', data.get('IMG'))

        this.props.upload(data)
        this.setState({ image: null })
    }

    render() {
        const { image, address, nama, email } = this.props
        const { edit } = this.state
        return (
            <div>
                <Card style={{ justifyContent: 'center', justifyItems: 'center', justifySelf: 'center', alignContent: 'center', alignSelf: 'center', alignItems: 'center', marginLeft: '30vw', marginBottom: '50vh', marginTop: '10vh', height: '110vh', width: '40vw' }}>
                    <div className="button-profile">
                        <form encType="multipart/form-data">
                            <CardImg src={image ? URL_IMG + image : avatar} alt="Card image cap" style={{ width: '20vw', height: '40vh', marginLeft: '0vw', marginTop: '0vh', borderRadius: '80px' }} ></CardImg>
                            <CardText style={{ marginTop: '5vh', marginBottom: '2vh', marginLeft: '15vw' }}><h1>Hi, {this.props.username}</h1></CardText>
                        </form>
                    </div>
                    <FormGroup
                        defaultValue={nama ? nama : ''}
                        disabled={!edit}
                        ref="gender"
                    ></FormGroup>
                    <FormGroup
                        defaultValue={email ? email : ''}
                        disabled={!edit}
                        ref="phone"
                    />
                    <FormGroup
                        aria-describedby="basic-addon1"
                        defaultValue={address ? address : ''}
                        disabled={!edit}
                        ref="address"
                    />
                    <Card>
                        <h1 style={{ alignSelf: 'center' }}>your bio</h1>
                        <CardBody style={{ marginBottom: '1vh' }}>
                            <CardTitle><h3>Username : {this.props.username}</h3></CardTitle>
                            <CardText><h3>Email : {this.props.email}</h3></CardText>
                            <CardText><h3>Role : {this.props.role}</h3></CardText>
                        </CardBody>
                        <div className="button-container">
                            {!edit ? <Button className="button" onClick={() => this.setState({ edit: true })}>Edit</Button> : null}
                            {edit ? <Button className="button" variant="success" onClick={this.handleSave}>Save</Button> : null}
                            {edit ? <Button className="button" variant="warning" onClick={() => this.setState({ edit: false })}>Cancel</Button> : null}
                        </div>
                    </Card>


                </Card>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.username,
        password: state.userReducer.password,
        email: state.userReducer.email,
        role: state.userReducer.role,
        status: state.userReducer.register_status,
        image: state.profileReducer.image,
        address: state.profileReducer.address,
        gender: state.profileReducer.gender,
        phone: state.profileReducer.phone
    }
}

export default connect(mapStateToProps, { LoginAction, RegisterAction, getProfile, editProfile, upload })(Profilepage);