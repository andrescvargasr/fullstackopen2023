# Exercises 1.3.-1.5

We continue building the application that we started working on in the previous exercises. You can write the code into the same project, since we are only interested in the final state of the submitted application.

**Pro-tip**: you may run into issues when it comes to the structure of the props that components receive. A good way to make things more clear is by printing the props to the console, e.g. as follows:

```js
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}
```

## 1.3: course information step3

Let's move forward to using objects in our application. Modify the variable definitions of the App component as follows and also refactor the application so that it still works:

```js
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      ...
    </div>
  )
}
```
