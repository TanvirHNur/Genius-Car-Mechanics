import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddService from './pages/AddService/AddService';
import Booking from './pages/Booking/Booking/Booking';
import Home from './pages/Home/Home';
import Services from './pages/Home/Services/Services';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import ManageServices from './pages/ManageServices/ManageServices';
import NotFound from './pages/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
          </PrivateRoute>
          
          <Route path="/login">
              <Login></Login>
          </Route>
          <Route path="/addservice">
              <AddService></AddService>
          </Route>
          <Route path="/manageServices">
              <ManageServices/>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
