# CSS basics

CSS (Cascading Style Sheets) is the code that styles web content. CSS basics walks through what you need to get started.

## What is CSS?

Like HTML, CSS is not a programming language. It's not a markup language either. CSS is a style sheet language. CSS is what you use to selectively style HTML elements. For example, this CSS selects paragraph text, setting the color to red:

```css
p {
  color: red;
}
```

To make the code work, we still need to apply this CSS (above) to your HTML document. Otherwise, the styling won't change the appearance of the HTML.

- Open your **index.html** file. Paste the following line in the head (between the **<head></head>** tags):

```html
<link href="styles/style.css" rel="stylesheet" />
```

## Anatomy of a CSS ruleset

![Anatomy of a CSS ruleset](images/css-declaration-small.png)

The whole structure is called a **ruleset**. (The term _ruleset_ is often referred to as just _rule_). Note the names of the individual parts:

- **Selector**: It defines the element(s) to be styled (in this example, `<p>` elements). To style a different element, change the selector.
- **Declaration**: This is a single rule like **color: red;**. It specifies which of the element's **properties** you want to style.
- **Properties**: These are ways in which you can style an HTML element. (In this example, **color** is a property of the `<p>` elements). In CSS, you choose which properties you want to affect in the rule.
- **Property value**: This choose one out of many possible appearances for a given property. (For example, there are many **color** values in addition to red).

To modify multiple property values in one ruleset, write them separated by semicolons, like this:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

### Selecting multiple elements

Separate multiple selectors by commas. For example:

```css
p,
li,
h1 {
  color: red;
}
```

### Different types of selectors

There are many different types of selectors. The examples above use **element selectors**, which select all elements of a given type. Here are some of the more common types of selectors:

| Selector name                                              | What does it select                                                                                              | Example                                                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Element selector (sometimes called a tag or type selector) | All HTML elements of the specified type.                                                                         | p <br /> selects `<p>`                                                                 |
| ID selector                                                | The element on the page with the specified ID. On a given HTML page, each id value should be unique.             | #my-id <br /> selects `<p id="my-id">` or `<a id="my-id">`                             |
| Class selector                                             | The element(s) on the page with the specified class. Multiple instances of the same class can appear on a page.  | .my-class <br /> selects `<p class="my-class">` and `<a class="my-class">`             |
| Attribute selector                                         | The element(s) on the page with the specified attribute.                                                         | img[src] <br /> selects `<img src="myimage.png">` but not `<img>`                      |
| Pseudo-class selector                                      | The specified element(s), but only when in the specified state. (For example, when a cursor hovers over a link.) | a:hover <br /> selects <a>, but only when the mouse pointer is hovering over the link. |
