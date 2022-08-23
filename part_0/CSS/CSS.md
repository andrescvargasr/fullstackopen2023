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
| Pseudo-class selector                                      | The specified element(s), but only when in the specified state. (For example, when a cursor hovers over a link.) | a:hover <br /> selects `<a>`, but only when the mouse pointer is hovering over the link. <br /> `a[href="https://example.com"] { }` |
| Pseudo-elements selector                                      | The specified element(s), but only a certain part of the  element than the element itself. (For example, first line of the element.) | a::first-line <br /> selects first line of `<a>`, acting as if a `<span>` was wrapped aorund the first formatted line and then select. |
| Combinators | Combine others selectors in order to target elements within the document. | `article > p {}` <br /> selects paragraphs that are directly children of `<article>` elements using the child combinator (`>`). |

For a complete list of selectors, see [CSS selectors references](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

## Fonts and text

Now that we've explored some CSS fundamentals, let's improve the appearance of the example by adding more rules and information to the style.css file.

1. First, find the [output from Google Fonts](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#font). Add the `<link>` element somewhere inside your **index.html**'s head (anywhere between the `<head>` and `</head>` tags).
2. Add the following lines (shown below), replacing the **font-family** assignment with your font-family selection. The property **font-family** refers to the font(s) you want to use for text. This rule defines a global base font and font size for the whole page. Since `<html>` is the parent element of the whole page, all elements inside it inherit the same font-size and font-family.

```css
html {
  font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high  */
  font-family: "Open Sans", sans-serif; /* this should be the rest of the output you got from Google fonts */
}
```

**Note**: Anything in CSS between `/*` and `*/` is a CSS comment. The browser ignores comments as it renders the code. CSS comments are a way for you to write helpful notes about your code or logic.

3. Now let's set font sizes for elements that will have text inside the HTML body (`<h1>`, `<li>`, and `<p>`). We'll also center the heading. Finally, let's expand the second ruleset (below) with settings for line height and letter spacing to make body content more readable.

```css
h1 {
  font-size: 60px;
  text-align: center;
}

p, li {
  font-size: 16px;
  line-height: 2;
  letter-spacing: 1px;
}
```

## CSS: All about boxes

CSS layout is mostly based on the box model. Each box taking up space on your page has properties like:

- **padding**, the space around the content. In the example below, it is the space around the paragraph text.
- **border**, the solid line that is just outside the padding.
- **margin**, the space around the outside of the border.

![CSS-boxes](images/box-model.png)

In this section we also use:

- **width** (of an element).
- **background-color**, the color behund an element's content and padding.
- **color**, the color of an element's content (usually text).
- **text-shadow** sets a drop shadow on the text inside an element.
- **display** sets the display mode of an element. (keep reading to learn more).

To continue, let's add more CSS. Keep adding these new rules at the bottom of **style.css**. Experiment with changing values to see what happens.

### Changing the page color

```css
html {
  background-color: #00539F;
}
```

This rule sets a bacground color for the entire page.

### Styling the body

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #FF9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

There are several declarations for the `<body` element. Let's go through these line-by-line:

- **width: 600px;** This forces the body to always be 600 pixels wide.
- **margin: 0 auto;** When you set two values on a property like **margin** or **padding**, the first value affects the left _and_ right side. (Here, **auto**) is a special value that divides the available horizontal space evenly between left and right). You can also use one, two, three, or four values, as documented in [Margin Syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/margin#syntax).
- **backgorund-color: #FF9500;** This sets element's background color. This project uses a reddish orange for the body background color, as oppposed to dark blue for the `<html>` element.
- **padding: 0 20px 20 px 20px;** This sets four values for padding. The goal is to put some space around the content. In this example, there is no padding on the top of the body, and 20 pixels on the right, bottom and left. The values set top, right, bottom, left, in that order. As with **margin**, you can use one, two, three, or four values, as documented in [Padding Syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/padding#syntax).
- **border: 5 px solid black;** This sets values for the widht, style and color of the border. In this case, it's a five-pixel-wide, solid black border, on all sides of the body.

### Positioning and styling the main page title

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539F;
  text-shadow: 3px 3px 1px black;
}
```

**text-shadow** applies a shadow to the text content of the element. Its four values are:

- The first pixel value sets the **horizontal offset** of the shadow from the text: how far it moves across.
- The second pixel value sets the **vertical offset** of the shadow from the text: how far it moves down.
- The third pixel value sets **blur radius** of the shadow. A larger value produces a more fuzzy-looking shadow.
- The fourth value sets the base color of the shadow.

### Centering the image

```css
img {
  display: block;
  margin: 0 auto;
}
```

We can use the **margin: 0 auto;** trick again as we did for the body. BUt there are differences that require an additional setting to make the CSS work.

The `<body>` is a **block** element, meaning it takes up space on the page. The marging applied to a  block element will be respected by other elements on the page. In contrast, images are **inline** elements, for the auto margin trick to work on this image, we must give it block-level behavior using **displau: block;**.

**Note**: The instructions above assume that you're using an image smaller than the width set on the body. (600 pixels) If your image is larger, it will overflow the body, spilling into the rest of the page. To fix this, you can either: 1) reduce the image width using a graphics editor, or 2) use CSS to size the image by setting the **width** property on the `<img>` element with a smaller value.

**Note**: Don't be too concerned if you don't completely understand **display: block;** or the differences between a block element and an inline element. It will make more sense as you continue your study of CSS. You can find more information about different display values on MDN's [display reference page](https://developer.mozilla.org/en-US/docs/Web/CSS/display).