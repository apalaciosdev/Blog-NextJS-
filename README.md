# NextJS blog with [MDX]
This is a template blog created with NextJS using MDX.
<br />

<img src="/public/ignore/componentExample.png" alt="example" width="600"/>



## Advantages of using this project

### 1.- Add reutilizable components in your posts🚀
With MDX, you can use components directly in markdown.

If you want to include components in your posts, invoke them in your MDX file like this:
```
<Podcast episode="2Nke3gndQfRHI1835BKlpL?utm_source=generator" size="compact"/>
```

And then add them in `/components/MDXComponents.js`.

This is the result:
<img src="/public/ignore/componentExample.png" alt="example" width="300"/>

<br /><br />

### 2.- Customize✔️
Make it your own by adjusting the blog config file. Customize whatever you want.

This project has styles created with Styled-Components and pure CSS.
<br /><br />

### 3.- Appearance and design🎨
This project contains a theme toggler which you can change the theme color between dark and light mode.
(poner gif)

Also, all this blog has created with responsive design.
(poner imagen de iphone)

Add more icons in the /public/images/icons directory to show in the Post List Item component.
<br /><br />

### 4.- Add Syntax highlighting
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
<br /><br />


## Write your fist post ✏️
To write a new post, create a new .mdx file in `/data` directory.

If you would like to add more data to your posts, such as author information or other meta data, add more fields to the front matter in your mdx files and add the field names to the getStaticProps function ubicated in `/pages/articles.js` file.


