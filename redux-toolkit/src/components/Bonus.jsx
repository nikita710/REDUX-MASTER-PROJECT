import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/bonusSlice";

const Bonus = () => {
  //   const [bonus, setBonus] = useState({ points: 0 });
  //   const increment = () => {
  //     console.log("Points : ", bonus.points);
  //     return setBonus({ points: bonus.points + 1 });
  //   };

  const points = useSelector((state) => state.bonus.points);

  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Points:${points}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
      </div>
    </div>
  );
};

export default Bonus;
