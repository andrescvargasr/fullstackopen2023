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
  if(app.parts[0].exercises === 0 & app.parts[1].exercises === 0 & app.parts[2].exercises === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <>
    <StatisticLine text="good" value={app} />
    <StatisticLine text="neutral" value={app} />
    <StatisticLine text="bad" value={app} />
    <StatisticLine text="all" value={app} />
    <StatisticLine text="average" value={app} />
    <StatisticLine text="positive" value={app} />
    </>
  )
}

const StatisticLine = ({ text, value }) => {
  const valueGood = value.parts[0].exercises;
  const valueNeutral = value.parts[1].exercises;
  const valueBad = value.parts[2].exercises;

  switch (text) {
    case "good":
      return (<p>{text} {valueGood}</p>);  
      break;
    case "neutral":
      return (<p>{text} {valueNeutral}</p>);  
      break;
    case "bad":
      return (<p>{text} {valueBad}</p>);  
      break;
    case "all":
      return (<p>{text} {valueGood + valueNeutral + valueBad}</p>);
      break;
    case "average":
      return (<p>{text} { (1 * valueGood + 0 * valueNeutral + (-1) * valueBad) / ( valueGood + valueNeutral + valueBad ) }</p>);
      break;
    case "positive":
      return (<p>{text} { (valueGood * 100) / ( valueGood + valueNeutral + valueBad ) } %</p>);
      break;
    default:
      break;
  }
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