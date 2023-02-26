import { useState } from 'react'

const Button = ({ name, state, setState }) => {
  return (
    <span>
      <button onClick={() => setState(state + 1)}>{name}</button><span>&nbsp;</span>
    </span>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
            <Button name={button.name} state={button.state} setState={button.setState} onClick={() => button.setState(button.state + 1)} />
          </span>
        })
      }
      <h1>statistics</h1>
      {
        buttons.map(button => {
          return <div>
            <span>{button.name} &nbsp;</span>
            <span>{button.state}</span>
          </div>
        })
      }
    </div>
  )
}

export default App