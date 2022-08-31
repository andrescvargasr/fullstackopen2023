# What are web forms?

**Web forms** are one of the main points of interaction between a user and a web site or application. Forms allow users to enter data, which is generally sent to a web server for processing and storage, or used on the client-side to immediately update the interface in some way (for example, add another item to a list, or show or hide a UI feature).

A web form's HTML is made up of one or more **form controls** (sometimes called **widgets**), plus some additional elements to help structure the overall from -- they are often referred to as **HTML forms**. The controls can bee single or multi-line text fields, dropdown boxes, buttons, checkboxes, or radio buttons, and are mostly created using the `<input>` element, although there are some other elements to learn about too.

Form controls can also be programmed to enforce specific formats or values to be entered (**form validation**), and paired with text labels that describe their purpose to both sighted and visually impaired users.

## Designing your form

Before starting to code, it's always better to step back and take the time to think about your form. Designing a quick mockup will help you to define the right set of data you want to ask your user to enter. From a user experience (UX) point of view, it's important to remember that the bigger your form, the more  you risk frustrating people and losing users. Keep it simple and stay focused: ask only for the data your absolutely need.

Designing forms is an important step when your are building a site or application. If you want to dig into that topic you should read the following articles:

- Smashing Magazine has some [good article about forms UX](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/), including an older but still relevant [Extensive Guide to Web Form Usability](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/) article.
- UXMatters is also a very thoughtful resource with good advice from [basic best practices](https://www.uxmatters.com/mt/archives/2012/05/7-basic-best-practices-for-buttons.php) to complex concerns such as [multi-page forms](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php).

In this article, we'll build a simple contact form. Let's make a rough sketch.

![sketch](images/form-sketch-low.jpg)

Our form will contain three text fields and one button. We are asking the user for their name, their e-mail and the message they want to send. Hitting the button will send their data to a web server.

## Active learning: Implementing our form HTML

Ok, let's have a go at creating the HTML for our form. We will use the following HTML elements: `<form>`, `<label>`, `<input>`, `<textarea>`, and `<button>`.

### The `<form>` element

All forms start with a `<form>` element, like this:

```html
<form action="/my-handling-form-page" method="post">

</form>
```

This element formally defines a form. It's a container element like a `<section>` or `<footer>` element, but specifically for containing forms; it also supports some specific attributes to configure the way the form behaves. All of its attributes are optional, but it's standard practice to always set at least the **action** and **method** attributes:

- The **action** attribute defines the location (URL) where the form's collected data should be sent when it is submitted.
- The **method** attribute defines which HTTP method to send the data with (usually) **get** or **post**).

We'll look at how those attributes work in our [Sending form data](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data) article later on.

For now, add the above `<form>` element into your HTML `<body>`.

### The `<label>`, `<input>`, and `<textarea>` elements

Our contact for is not complex: the data entry portion contains three text fields, each with a corresponding `<label>`:

- The input field for the name is a single-line text field.
- The input field for the e-mail is an input of type email: a single-line text field that accepts only e-mail addresses.
- The input field for the message is a `<textarea>`; a multiline text field.

In terms of HTML code we need something like the following to implement these form widgets:

```html
<form action="/my-handling-form-page" method="post">
 <ul>
  <li>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name">
  </li>
  <li>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail" name="user_email">
  </li>
  <li>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </li>
 </ul>
</form>
```

The `<li>` elements are there to conveniently structure our code and make styling easier (see later in the article). For usability and accessibility, we include an explicit label for each form control. Note the use of the for attribute on all `<label>` elements, which takes as its value the id of the form control with which it is associated — this is how you associate a form control with its label.

For more utility and accesibility, please look at: [How to structure a web form](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form).

On the `<input>` element, the most important attribute is the type attribute. This attribute is extremely important because it defines the way the `<input>` element appears and behaves. You'll find more about this in the [Basic native form controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls) article later on.

- In our simple example, we use the value **text** for the first input - the default value for this attribute.
- For the second input, we use the vale **email**, which defines a single-line text field that only accepts a well-formed e-mail address. This turns a basic text field into a kind of "intelligent" field that will perform some validation checks on the data typed bu the user. It also causes a more appropriate keyboard layout for entering email addresses (e.g. with an @ symbol by default) to appear on devices with dynamic keyboards, like smartphones. You'll fin out more about form validation in the [client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) article later on.

The last but not least, to define the default value of an `<input>` element you have to use the **value** like this:

```html
<input type="text" value="by default this element is filled with this text">
```

On other hand, if you want to define a default value for a `<textarea>`, you put it between the opening and closing tags of the `<textarea>` element, like this:

```html
<textarea>
by default this element is filled with this text
</textarea>
```

### The `<buttton>` element

The markup for our form is almost complete; we just need to add a button to allow the user to send, or "submit", their data once they have filled out the form. This is done by using the `<button>` element; add the following just above the closing `</ul>` tag:

```html
<li class="button">
  <button type="submit">Send your message</button>
</li>
```

The `<button>` element also accepts a **type** attribut - this accepts one of three values: **submit**, **reset**, or **button**.

- A click on a **submit** button (the default value) sends the form's data to the web page defined by the **action** attribute of the `<form>` element.
- A click on a **reset** button resets all the form widgets to their default value inmediately. From a UX point of view, this is considered bad practice, so you should avoid using this type of button unless you really have a good reason to include one.
- A click on a **button** button does nothing! That sounds silly, but it's amazingly useful for building custom buttons - you can define their chosen functionality with Javascript.

**Note**: You can also use the `<input>` element with the corresponding type to produce a button, for example `<input type="submit">`. The main advantage of the `<button>` element is that the `<input>` element only allows plain text in its label whereas the `<button>` element allows full HTML content, allowing more complex, creative button content.

## Basic form styling

First at all, add `<style>` element to your page, inside your HTML head. It should look like so:

```html
<style>

</style>
```

Inside the **style** tags, add the following CSS:

```css
form {
  /* Center the form on the page */
  margin: 0 auto;
  width: 400px;
  /* Form outline */
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

form li + li {
  margin-top: 1em;
}

label {
  /* Uniform size & alignment */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input,
textarea {
  /* To make sure that all text fields have the same font settings
     By default, textareas have a monospace font */
  font: 1em sans-serif;

  /* Uniform text field size */
  width: 300px;
  box-sizing: border-box;

  /* Match form field borders */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* Additional highlight for focused elements */
  border-color: #000;
}

textarea {
  /* Align multiline text fields with their labels */
  vertical-align: top;

  /* Provide space to type some text */
  height: 5em;
}

.button {
  /* Align buttons with the text fields */
  padding-left: 90px; /* same size as the label elements */
}

button {
  /* This extra margin represent roughly the same space as the space
     between the labels and their text fields */
  margin-left: .5em;
}
```

## Sending form data to your web server

The `<form>` element defines where and how to send the data thanks to the **action** and **method** attributes.

We provide a **name** attribute for each form control. The names are important on both the client- and server-side; they tell the browser which name to give each piece of data and, on the server side, they let the server handle each piece of data by name. The form data is sent to the server as name/value pairs.

In our example, the form will send 3 pieces of data named _"user_name"_, _"user_email"_, and _"user_message"_. That data will be sent to the URL "/my-handling-form-page" using the HTTP POST method.

On the server side, the script at the URL "_/my-handling-form-page_" will receive the data as a list of 3 key/value items contained in the HTTP request. The way this script will handle that data is up to you. Each server-side language (PHP, Python, Ruby, Java, C#, etc.) has its own mechanism of handling form data. It's beyond the scope of this guide to go deeply into that subject, but if you want to know more, we have provided some examples in our [Sending form data](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data) article later on.