import { Switch, Route, Redirect } from 'wouter'
import { useContext } from 'react'
import UserContext from 'contexts/UserContext'

import Home from 'pages/home'
import Contacto from 'pages/contact';
import Alumno from 'pages/alumno';
import Menu from 'pages/menu';
import SignUp from 'pages/signup';

import './App.css';

function App() {
  const { user } = useContext(UserContext)
  const { jwt } = user

  return (
    <Switch className="App">
      <Route path="/" component={Home} />
      <Route path="/contacto" component={Contacto}></Route>
      <Route path="/alumno/login" >{!jwt ? <Alumno /> : <Redirect to='/alumno/menu' />}</Route>
      <Route path="/alumno/menu" >{jwt ? <Menu /> : <Redirect to='/alumno/login' />}</Route>
      <Route path="/alumno/signup" component={SignUp}></Route>
    </Switch>
  );
}

export default App;
