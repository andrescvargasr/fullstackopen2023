# Exercises 1.6.-1.14

**WARNING** create-react-app will automatically turn your project into a git-repository unless you create your application inside of an existing git repository. **Most likely you do not want each of your projects to be a separate repository**, so simply run the `rm -rf .git` command at the root of your application.

In some situations you may also have to run the command below from the root of the project:

```js
rm -rf node_modules/ && npm i
```

## 1.6: unicafe step1

Like most companies, Unicafe collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

The application must display the total number of collected feedback for each category. Your final application could look like this:

![Unicafe step1](p1d-unicafe_step1.png)

Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear.

It is advisable to use the same structure that is used in material and previous exercise. File _index.js_ is as follows:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
```

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
You can use the code below as a starting point for the _App.js_ file:

```js
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

export default App
```