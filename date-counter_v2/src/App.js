import { useState } from "react";
import "./App.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <span>{step}</span>

      <div>
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>

      <p>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days ahead is `
          : `${Math.abs(count)} days ago is `}
        <span>{date.toDateString()}</span>
      </p>

      {step > 1 || count > 0 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
