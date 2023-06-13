import "./App.css";
import Account from "./components/Account";
import Admin from "./components/Admin";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";

function App() {
  const balance = useSelector((state) => state.account.balance);
  const points = useSelector((state) => state.bonus.points);

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount :{balance} </h3>
      <h3>Total Bonus : {points}</h3>

      <Account></Account>
      <Bonus></Bonus>
      <Admin></Admin>
    </div>
  );
}

export default App;
