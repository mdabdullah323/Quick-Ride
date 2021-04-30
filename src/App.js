import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavigationBar from './components/TopNavigationBar/TopNavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import LogIn from './components/LogIn/LogIn';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import User from './components/User/User';

export const UserContext = createContext();
export const VehicleContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [selectedVehicle, setSelectedVehicle] = useState('');

  return (
    <UserContext.Provider value={[user, setUser]}>
      <VehicleContext.Provider value={[selectedVehicle, setSelectedVehicle]}>
        <Router>
          <TopNavigationBar />

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/destination">
              <Destination />
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <Blog />
            </PrivateRoute>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <PrivateRoute path="/user">
              <User />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </VehicleContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
