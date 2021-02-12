import './App.css';
import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>Esta es la App del bootcamp fullstack</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='green' message='Estamos trabajando en un curso de React' />
      <Description />
    </div>
  );
}

export default App;