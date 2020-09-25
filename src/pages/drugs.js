import React from 'react';
import { connect } from 'react-redux'
import {
  CardText,
  Card,
  Table,
  Button,
  Input,
  FormGroup,
  Label
} from 'reactstrap';
import { Link } from 'react-router-dom'

import { getProductKimia, getAntibiotik, cartKimia } from '../actions'

class Drugspage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jenis: "",
      netto: 0,
      tempCart: [],
      selectedId: null,
    }
  }

  componentDidMount() {
    this.props.getProductKimia()
  }


  editButton = (index) => {
    this.setState({ selectedId: index })
    console.log(index)
  }

  deleteButton = (index) => {
    let temp = [...this.state.tempCart]
    temp.splice(index, 1)
    console.log('temp', temp)
    this.setState({ tempCart: temp })
  }

  cancelButton = (index) => {
    this.setState({ selectedId: null })
  }

  renderTableHeader = () => {
    return (
      <thead>
        <tr>
          <th>No</th>
          <th>Jenis</th>
          <th>Nama</th>
          <th>Takaran</th>
          <th>Total Netto</th>
          <th>Action</th>
        </tr>
      </thead>
    )
  }


  renderTableBody = () => {
    return this.state.tempCart.map((item, index) => {
      let pIndex = this.props.product.findIndex(value => item.obat == value.id)
      let tIndex = this.props.product.findIndex(value => item.satuan == value.id)
      if (index === this.state.selectedId) {
        return (
          <tbody>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.jenis}</td>
              <td>{this.props.product[pIndex].nama_kimia}</td>
              <td>{this.props.product[tIndex].satuan}</td>
              <td>{item.total}</td>
              <td>
                <Button>OK</Button>
                <Button onClick={() => this.cancelButton(index)}>CANCEL</Button>
              </td>
            </tr>
          </tbody>
        )
      } else {
        return (
          <tbody>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.jenis}</td>
              <td>{this.props.product[pIndex].nama_kimia}</td>
              <td>{this.props.product[tIndex].satuan}</td>
              <td>{item.total}</td>
              <td>
                <Button onClick={() => this.deleteButton(index)}>DELETE</Button>
              </td>
            </tr>
          </tbody>
        )
      }
    })
  }

  buttonAdd = () => {
    let test = this.props.product.findIndex((item) => item.id == this.obat.value)
    console.log(test)
    const body = {
      user_id : this.props.id,
      jenis: this.jenis.value,
      obat: this.obat.value,
      satuan: this.netto.value,
      takaran: this.takaran.value,
      dosis: this.dosis.value,
      total: this.takaran.value * this.dosis.value,
      total_harga : (this.takaran.value * this.dosis.value) * this.props.product[test].harga
    }
    let temp = [...this.state.tempCart]
    temp.push(body)
    this.setState({ tempCart: temp, reload: true })
    console.log(body)
    this.takaran.value = ""
    this.dosis.value = ""
  }


  selectJenis = () => {
    return this.props.product.map((item, index) => {
      return (
        <option value={item.jenis}>{item.jenis_kimia}</option>
      )
    })
  }

  selectObat = () => {
    return this.props.product.map((item, index) => {
      if (item.jenis_kimia === this.state.jenis) {
        return <option value={item.id}>{item.nama_kimia}</option>
      }
    })
  }

  selectTakaran = () => {
    return this.props.product.map((item, index) => {
      if (item.jenis_kimia === this.state.jenis) {
        return <option value={item.satuan_id}>{item.satuan}</option>
      }
    })
  }


  selectButton = () => {
    console.log('jenis', this.jenis.value)
    this.setState({ jenis: this.jenis.value })
  }

  buttonProses = () => {
    console.log('tempnew', this.state.tempCart)
    this.props.cartKimia(this.state.tempCart)
  }

  render() {
    console.log(this.state.totalHarga)
    return (
      <div style={{ marginBottom: '40vh' }}>
        <CardText style={{ marginBottom: '5vh', marginTop: '5vh' }}>
          <h1 style={{ marginLeft: '40.5vw' }}>Selamat Datang</h1>
          <h3 style={{ marginLeft: '39vw' }}>Apa yang kamu butuhkan?</h3>
        </CardText>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20vh' }}>
          <Card style={{ width: '45vw' }}>
            <h3>JENIS OBAT</h3>
            <Input type="select" name="jenis" innerRef={(jenis) => this.jenis = jenis} onChange={() => this.selectButton()}>
              {this.selectJenis()}
            </Input>
            <h3>NAMA OBAT</h3>
            <Input type="select" name="obat" innerRef={(obat) => this.obat = obat} onChange={() => this.selectButton()}>
              {this.selectObat()}
            </Input>
            <div style={{ display: 'flex' }}>
              <FormGroup style={{ width: '10vw', marginTop: '15vh', marginLeft: '1vw' }}>
                <h3>Takaran</h3>
                <Input type="text" name="inputTakaran" placeholder="..." innerRef={(takaran) => this.takaran = takaran} />
              </FormGroup>
              <h3>NETTO</h3>
              <Input type="select" name="takaran" innerRef={(netto) => this.netto = netto} onChange={() => this.selectNetto()}>
                {this.selectTakaran()}
              </Input>
            </div>
            <FormGroup style={{ width: '10vw', marginTop: '5vh', marginLeft: '1vw' }}>
              <Label for="exampleEmail">Total : ex. 12x minum</Label>
              <Input type="email" name="dosis" placeholder="dosis" innerRef={(dosis) => this.dosis = dosis} />
            </FormGroup>

            <Button style={{ marginTop: '5vh', marginBottom: '5vh', backgroundColor: 'black', width: '30vw', marginLeft: '5vw', borderRadius: '60px' }}
              onClick={this.buttonAdd}>Tambah</Button>
          </Card >

          <Card style={{ width: '45vw' }}>
            <Table dark style={{ width: '40vw', backgroundColor: 'black', color: 'white', marginLeft: '2.5vw' }}>
              {this.renderTableHeader()}
              {this.renderTableBody()}
            </Table>

            <Button style={{ marginLeft: '8vw', width: '30vw', backgroundColor: 'black', borderRadius: '60px', marginTop: '15.5vh' }}
              onClick={this.buttonProses}>Proses</Button>

          </Card>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    product: state.kimiaReducer.kimia,
    antibiotik: state.kimiaReducer.kimia_antibiotik,
    id:state.userReducer.id
  }
}

export default connect(mapStateToProps, { getProductKimia, getAntibiotik, cartKimia })(Drugspage);
