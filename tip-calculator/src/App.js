import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [billVal, setBillVal] = useState("");
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const tipOptions = [
    {
      option: "Dissatisfied",
      tip: 0,
    },
    {
      option: "It was okay",
      tip: 5,
    },
    {
      option: "It was good",
      tip: 10,
    },
    {
      option: "Absolutely amazing!",
      tip: 20,
    },
  ];

  return (
    <div>
      <BillInput billVal={billVal} onBillVal={setBillVal} />
      <SelectPercentage tipOptions={tipOptions} tip={tip} onSelect={setTip}>
        <label>How did you like the service?</label>{" "}
      </SelectPercentage>
      <SelectPercentage
        tipOptions={tipOptions}
        tip={friendTip}
        onSelect={setFriendTip}
      >
        <label>How did your friend like the service?</label>
      </SelectPercentage>
      {billVal > 0 && (
        <>
          <Output billVal={billVal} tip={tip} friendTip={friendTip} />
          <Reset
            onBillVal={setBillVal}
            onTip={setTip}
            onFriendTip={setFriendTip}
          />
        </>
      )}
    </div>
  );
}

function BillInput({ billVal, onBillVal }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={billVal}
        placeholder="Bill Value"
        onChange={(e) => onBillVal(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, tipOptions, tip, onSelect }) {
  return (
    <div>
      {children}
      <select value={tip} onChange={(e) => onSelect(Number(e.target.value))}>
        {tipOptions.map((tipOption, i) => (
          <option
            key={i}
            value={tipOption.tip}
          >{`${tipOption.option} (${tipOption.tip}%)`}</option>
        ))}
      </select>
    </div>
  );
}

function Output({ billVal, tip, friendTip }) {
  const averageTip = Math.round((tip + friendTip) / 2);
  const totalTip = Math.round((averageTip / 100) * billVal);

  return (
    <div>
      <h2>
        You pay ${totalTip + billVal} (${billVal} + ${totalTip} tip)
      </h2>
    </div>
  );
}

function Reset({ onBillVal, onFriendTip, onTip }) {
  function handleReset() {
    onBillVal("");
    onFriendTip(0);
    onTip(0);
  }
  return <button onClick={handleReset}>Reset</button>;
}
