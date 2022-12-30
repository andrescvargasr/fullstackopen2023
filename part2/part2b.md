# Exercises 2.6-2.10

## 2.6: The Phonebook Step1

Let's create a simple phonebook. **In this part we will only be adding names to the phonebook**.

Let us start by implementing the addition of a person to phonebook.

You can use the code below as a starting point for the App component of your application:

```javascript
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App
```

The _newName_ state is meant for controlling the form input element.

Sometimes it can be useful to render state and other variables as text for debugging purposes. You can temporarily add the following element to the rendered component:

```js
<div>debug: {newName}</div>
```

It's also important to put what we learned in the [debugging React applications](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps) chapter of part one into good use. The [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) extension especially, is incredibly useful for tracking changes that occur in the application's state.

After finishing this exercise your application should look something like this:

![ex 2.6 show console](images/ex-2_6.png)

Note the use of the React developer tools extension in the picture above!

NB:

- you can use the person's name as value of the key property
- remember to prevent the default action of submitting HTML forms!

## 2.7: The Phonebook Step2

Prevent the user from being able to add names that already exist in the phonebook. JavaScript arrays have numerous suitable [methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for accomplishing this task. Keep in mind [how object equality works](https://www.joshbritz.co/posts/why-its-so-hard-to-check-object-equality/) in Javascript.

Issue a warning with the [alert](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) command when such an action is attempted:

![ex 2.7 display alert](images/ex-2_7.png)

**Hint**: when you are forming strings that contain values from variables, it is recommended to use a [template string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals):

```js
`${newName} is already added to phonebook`
```

If the _newName_ variable holds the value _Arto Hellas_, the template string expression returns the string

```js
`Arto Hellas is already added to phonebook`
```

The same could be done in a more Java-like fashion by using the plus operator:

```js
newName + ' is already added to phonebook'
```

Using template strings is the more idiomatic option and the sign of a true JavaScript professional.

## 2.8: The Phonebook Step3

Expand your application by allowing users to add phone numbers to the phone book. You will need to add a second input element to the form (along with its own event handler):

```js
<form>
  <div>name: <input /></div>
  <div>number: <input /></div>
  <div><button type="submit">add</button></div>
</form>
```

At this point the application could look something like this. The image also displays the application's state with the help of [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi):

![ex 2.8 display React Tools](images/ex-2_8.png)

## 2.9*: The Phonebook Step4

Implement a search field that can be used to filter the list of people by name:

![ex 2.9 search fiel](images/ex-2_9.png)

You can implement the search field as an input element that is placed outside the HTML form. The filtering logic shown in the image is case _insensitive_, meaning that the search term arto also returns results that contain Arto with an uppercase A.

**NB**: When you are working on new functionality, it's often useful to "hardcode" some dummy data into your application, e.g.

```js
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  // ...
}
```

This saves you from having to manually input data into your application for testing out your new functionality.

## 2.10: The Phonebook Step5

If you have implemented your application in a single component, refactor it by extracting suitable parts into new components. Maintain the application's state and all event handlers in the _App_ root component.

It is sufficient to extract three components from the application. Good candidates for separate components are, for example, the search filter, the form for adding new people into the phonebook, a component that renders all people from the phonebook, and a component that renders a single person's details.

The application's root component could look similar to this after the refactoring. The refactored root component below only renders titles and lets the extracted components take care of the rest.

```js
const App = () => {
  // ...

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter ... />

      <h3>Add a new</h3>

      <PersonForm 
        ...
      />

      <h3>Numbers</h3>

      <Persons ... />
    </div>
  )
}
```

**NB**: You might run into problems in this exercise if you define your components "in the wrong place". Now would be a good time to rehearse the chapter [do not define a component in another component](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#do-not-define-components-within-components) from last part.
