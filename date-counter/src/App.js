import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <Counter arg1={step} setCounter={setStep} label="Step" stepVal={1} />
      <Counter
        arg1={count}
        setCounter={setCount}
        label="Count"
        stepVal={step}
      />

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

function Counter({ label, arg1, setCounter, stepVal }) {
  return (
    <div>
      <div>
        <button onClick={() => setCounter((c) => c - stepVal)}>-</button>
        <span>
          {label}: {arg1}
        </span>
        <button onClick={() => setCounter((c) => c + stepVal)}>+</button>
      </div>
    </div>
  );
}
