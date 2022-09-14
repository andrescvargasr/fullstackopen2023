import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Header = ({header}) => (
  <>
    <h1>{header}</h1>
  </>
)

const Subtitle = ({stats}) => (
  <>
    <h2>{stats}</h2>
  </>
)

const Statistics = ({ app }) => {
  const valueGood = app.parts[0].exercises;
  const valueNeutral = app.parts[1].exercises;
  const valueBad = app.parts[2].exercises;
  if(valueGood === 0 & valueNeutral === 0 & valueBad === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <>
    <Part part={app.parts[0]} />
    <Part part={app.parts[1]} />
    <Part part={app.parts[2]} />

    <p>all {valueGood + valueNeutral + valueBad}</p>

    <p>average { ( 1 * valueGood + 0 * valueNeutral + (-1) * valueBad ) / ( valueGood + valueNeutral + valueBad ) }</p>

    <p>positive { ( valueGood * 100 ) / ( valueGood + valueNeutral + valueBad ) } %</p>
    </>
  )
}

const Part = ({ part }) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // useState definitions
  const [value, setValue] = useState({good: 0, neutral: 0, bad: 0});


  const handleGoodClick = () => {
    setValue({
      ...value,
      good: good + 1
    });
  }

  const handleNeutralClick = () => {
    setValue({
      ...value,
      neutral: neutral + 1
    });
  }

  const handleBadClick = () => {
    setValue({
      ...value,
      bad: bad + 1
    });
  }

  // const-definitions
  // All into object-definitions (part1.b.-ex1.5)
  const app = {
    header: 'give feedback',
    stats: 'statistics',
    parts: [
      {
        name: 'good',
        exercises: good
      },
      {
        name: 'neutral',
        exercises: neutral
      },
      {
        name: 'bad',
        exercises: bad
      }
    ]
  }

  return (
    <div>
      <Header header={app.header} />
      {/* <Button handleClick={() => setValue({ ...value, good: value.good + 1 })} text='good' /> */}
      <Button handleClick={() => {setGood(good + 1)}} text='good' />
      <Button handleClick={() => {setNeutral(neutral + 1)}} text='neutral' />
      <Button handleClick={() => {setBad(bad + 1)}} text='bad' />
      <Subtitle stats={app.stats} />
      <Statistics app={app} />
    </div>
  )
}

export default App;