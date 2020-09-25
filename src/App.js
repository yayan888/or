import React from 'react';
import Homepage from './pages/home';
import './App.css'
import { Route } from 'react-router-dom';
import Navbarcomponent from './components/navbar';
import Registerpage from './pages/register';
import Loginpage from './pages/login';
import Footercomponent from './components/footer';
import Newspage from './pages/news'
import Drugspage from './pages/drugs'
import Profilepage from './pages/profile'
import Verificationpage from './pages/verification'
import Cartpage from './pages/cart'
import Checkoutpage from './pages/checkout'
import Productdetailpage from './pages/productDetail';
import Adminrouterpage from './pagesAdmin/adminRouter';
import Receiptpage from './pages/receipt'
import { connect } from 'react-redux'
import { KeepLogin } from './actions'
import CategoryRouter from './pages/categoryRouter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.props.KeepLogin()
  }
  render() {
    console.log('INI BACA URL :', window.location.href)
    let lokasi = window.location.href
    return (
      <div>
        {lokasi.includes('/admin/transaksi') ?
          <Route path='/admin' component={Adminrouterpage} />
          :
          <div>
            <Navbarcomponent></Navbarcomponent>
            <Route path='/' component={Homepage} exact />
            <Route path='/category' component={CategoryRouter} />
            <Route path='/register' component={Registerpage} />
            <Route path='/login' component={Loginpage} />
            <Route path='/news' component={Newspage} />
            <Route path='/drugs' component={Drugspage} />
            <Route path='/profile' component={Profilepage} />
            <Route path='/verification' component={Verificationpage} />
            <Route path='/productdetail' component={Productdetailpage} />
            <Route path='/cart' component={Cartpage} />
            <Route path='/checkout' component={Checkoutpage} />
            <Route path='/resi' component={Receiptpage} />
            <Footercomponent></Footercomponent>
          </div>
        }
      </div>
    );
  }
}

export default connect(null, { KeepLogin })(App)