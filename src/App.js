
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import AddnewService from './Pages/AddNewService/AddnewService';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Notfound from './Pages/NotFound/Notfound';
import Footer from './Pages/Footer/Footer';
import Myorder from './Pages/MyOrder/Myorder';

function App() {
  return (
    <div>
      <AuthProvider>

        <Router>
          <Header>
          </Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route path="/home">
              <Home></Home>

            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addservice">
              <AddnewService></AddnewService>
            </Route>
            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <Myorder></Myorder>
            </PrivateRoute>

            <Route path="*">
              <Notfound></Notfound>
            </Route>

          </Switch>
          <Footer></Footer>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
