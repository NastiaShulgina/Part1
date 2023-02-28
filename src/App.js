import { useState } from 'react'

const Button = ({ name, state, good, bad, setState, setAverage, all, setAll, setPositive }) => {
  const handleClicks = () => {
    const updatedState = state + 1
    setState(updatedState)
    const updatedAll = all + 1
    setAll(updatedAll)
    if (name === "good") {
      setAverage((updatedState - bad) / updatedAll)
      setPositive(updatedState * 100 / updatedAll)
    }
    else if (name === "bad") {
      setAverage((good - updatedState) / updatedAll)
      setPositive(good * 100 / updatedAll)
    }
  }

  return (
    <span>
      <button onClick={handleClicks}>{name}</button><span>&nbsp;</span>
    </span>
  );
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

const Statistics = ({ buttons, all, average, positive }) => {
  return (
    <div>
      {all === 0 ? <p>No feedback given</p> :
        <table>
          {
            buttons.map(button => {
              return <StatisticLine text={button.name} value={button.state} />
            })
          }
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={`${positive} %`} />
        </table>}
    </div>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [all, setAll] = useState(0)
  const [positive, setPositive] = useState(0)

  const buttons = [
    {
      name: "good",
      state: good,
      setState: setGood
    },
    {
      name: "neutral",
      state: neutral,
      setState: setNeutral
    },
    {
      name: "bad",
      state: bad,
      setState: setBad
    }]

  return (
    <div>
      <h1>give feedback</h1>
      {
        buttons.map(button => {
          return <span>
            <Button name={button.name} state={button.state} good={good} bad={bad} setState={button.setState}
              all={all} setAll={setAll} setAverage={setAverage} setPositive={setPositive} />
          </span>
        })
      }
      <Statistics buttons={buttons} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App