# NextJS blog with [MDX]
This is a template blog created with NextJS using MDX.
<br />

<img src="/public/gifia-preview.gif?" alt="example" width="600"/>


## Advantages of using this project

### Add reutilizable components in your posts
With MDX, you can use components directly in markdown.

If you want to include components in your posts, invoke them like this:
```
<MyComponent text="this is a prop" size="30px"/>

```

And then add them in `/components/MDXComponents.js`.


### Customize
Make it your own by adjusting the blog config file. Customize whatever you want.

This project has styles created with Styled-Components and pure CSS.


### Appearance and design
This project contains a theme toggler which you can change the theme color between dark and light mode.
(poner gif)

Also, all this blog has created with responsive design.
(poner imagen de iphone)

Add more icons in the /public/images/icons directory to show in the Post List Item component.


### Add Syntax highlighting
Syntax highlighting with Prism React Renderer.

You can add a Sintax highlight code in your articles.

For do this, add the next lines in your MDX file (without /* */):

```
/*
```jsx
const text = 'Hello world!';

console.log(text);
```  */
```

If you want to customize the palette color, modify this file: `/styles/css/prism-night-owl`.



## Write your fist post
To write a new post, create a new .mdx file in `/data` directory.

If you would like to add more data to your posts, such as author information or other meta data, add more fields to the front matter in your mdx files and add the field names to the getStaticProps function ubicated in `/pages/articles.js` file.


