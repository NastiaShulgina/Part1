import { useState } from 'react'

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
            <button onClick={() => button.setState(button.state + 1)}>{button.name}</button><span>&nbsp;</span>
          </span>
        })
      }
      <h1>statistics</h1>
      {
        buttons.map(button => {
          return <div>
            <p>{button.name}</p>
            <span>{button.state}</span>
          </div>
        })
      }
    </div>
  )
}

export default App