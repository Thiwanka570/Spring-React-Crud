import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './UserController/User';
import NavigationBar from './component/NavigationBar';


function App() {
  return (

    <div className="container" >
      <NavigationBar />
      <div className=" mt-4">
        <User />
      </div>
    </div>
  );
}

export default App;
