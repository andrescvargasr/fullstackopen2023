# HTML Basics

Review the basics of HTML by reading this tutorial from Mozilla: [HTML tutorial](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics).

_This exercises is not submitted to GitHub, it's enough to just read the tutorial_.

## So what is HTML?

HTML is a markup language that defines the structure of your content.

### Anatomy of an HTML element

![Anatomy](images/grumpy-cat-small.png)

The main parts of our element are as follows:

1. **The opening tag**.
2. **The closing tag**.
3. **Then content**.
4. **The element**.

Elements can also have attibutes that look like the following:

![Attribute](images/grumpy-cat-attribute-small.png)

Attributes contain extra information about the element that you don't want to appear in the actual content. Here, _class_ is the attribute _name_ and _editor-note_ is the attribute _value_.

An attribute should always have the following:

1. A space between it and the element name (or the previous attribute, if the element already has one or more attributes).
2. The attribute name followed by an equal sign.
3. The attribute value wrapped by opening and closing quotation marks.

**Note**: Simple attribute values that don't contain ASCII whitespace (or any of the characters " ' ` = < >) can remain unquoted, but it is recommended that you quote all attribute values, as it makes the code more consistent and understandable.

### Nesting elements

You can put elements inside other elements too - this is called **nesting**.

The elements have to open and close correctly so that they are clearly inside or outside one another. If they overlap, then your web browser will try to make the best guess at what you were trying to say, which can lead to unexpected results. **So don't do it!**.

### Empty elements

Some elements have no content and are called **empty elements**:

```html
<img src="images/firefox-icon.png" alt="My test image" />
```

This contain two attributes, but there is no closing **</img>** tag and no inner content.

### Anatomy of an HTML document

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image" />
  </body>
</html>
```

Here, we have the following:

- `<!DOCTYPE html>` - [doctype](https://developer.mozilla.org/en-US/docs/Glossary/Doctype). It is a required preamble. In the mists of time, when HTML was young (around 1991/92), doctypes were meant to act as links to a set of rules that the HTML page had to follow to be considered good HTML, which could mean automatic error checking and other useful things. However these days, they don't do much and are basically just needed to make sure your document behaves correctly. That's all you need to know for now.
- `<html></html>` - the `$<html>` element. This element wraps all the content on the entire page and is sometimes known as the root element. It also includes the lang attribute, setting the primary language of the document.
- `<head></head>` — the `<head>` element. This element acts as a container for all the stuff you want to include on the HTML page that isn't the content you are showing to your page's viewers. This includes things like keywords and a page description that you want to appear in search results, CSS to style our content, character set declarations, and more.
- `<meta charset="utf-8">` — This element sets the character set your document should use to UTF-8 which includes most characters from the vast majority of written languages. Essentially, it can now handle any textual content you might put on it. There is no reason not to set this and it can help avoid some problems later on.
- `<meta name="viewport" content="width=device-width">` — This viewport element ensures the page renders at the width of viewport, preventing mobile browsers from rendering pages wider than the viewport and then shrinking them down.
- `<title></title>` — the `<title>` element. This sets the title of your page, which is the title that appears in the browser tab the page is loaded in. It is also used to describe the page when you bookmark/favorite it.
  `<body></body>` — the `<body>` element. This contains all the content that you want to show to web users when they visit your page, whether that's text, images, videos, games, playable audio tracks, or whatever else.

## Tags

| Tag      | Anatomy                                                   | Description                                                                                                                                                                                               |
| :------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Image    | `<img src="images/firefox-icon.png" alt="My test image">` | It embeds an image into out page in the position it appears.<br /> - **src** - source: contain the path to the image.<br /> - **alt** - alternative: Descriptive text for users who cannot see the image. |
| Headings | `<h1> - <h6>`. Ex.: `<h1> text </h1>`                     | Allow you to specifiy that certain parts of your content are headings                                                                                                                                     |
| Comment  | `<!-- Comment -->`                                        | The browser ignores comments as it renders the code.                                                                                                                                                      |
| Paragraphs | `<p>A paragraph</p>` | `<p>` elements are for containing paragraphs of text. |
| Lists | - **Unordered lists**: `<ul></ul>`. <br /> - **Ordered lists**: `<ol></ol>`. <br /> - **Item for list**: `<li>Item list.</li>`. <br /> Ex. <ul><li>Item list.</li></ul>. | Marking up lists always consists of a least 2 elements, unordered/ordered tag and list item tag. |
| Links | 


## HTML cheatsheet:

- [HTML cheatsheet in pdf](docs/htmlcheatsheet.pdf).

![HTML Cheatsheet](images/html5-cheat-sheet-tags.png)
