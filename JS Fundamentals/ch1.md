<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

# Hello, World! <i class="fas fa-globe"></i>

This part of the tutorial is about core JavaScript, the language itself.

But we need to a working environment to run our scripts and, since this book is online, the browser is a good choice. We'll keep the amount of browser-specific commands (like `alert`) to a minimum so that you don't spend time on them if you plan to concentrate to another environment (like Node.js). We'll focus on JavaScript in the browser in the next part of the tutorial.

So first, let's see how we attach a script to a webpage. For server-side environment (like Node.js), you can execute the script with a command like `"node my.js"`.

# The "script" tag 

JavaScript programs can be inserted almost anywhere into an HTML document using the `<Script>` tag.

For instance:

```html
<!DOCTYPE html>
<html>
    <body>
        <p> Before the script...</p>
        <script>
            alert("Hello, World!");
        </script>

        <p> ... After the script...</p>
    </body>
</html>
```

The `<script>` tag contains JavaSxript code which is automatically executed when the browser processes the tag.

# Modern markup

The `<script>` tag has a few attributes that are rarely used nowadays but can still be found in old code:

**The `type` attribute**: `script type=...>`

The old HTML standard, HTML4, required a script to have a `type`. Usually it was `type="text/javascript"`. It;s not required anymore. Also, the modern HTML standatd totally changes the meaning of this attribute. Now, it can be used for JavaScript modules. But that's an advanced topic, we'll talk about modules in another part of the tutorial.

**The `language` attribute:** `script language=...>`

This attribute was meant to show the language of the script. This attribute no longer makes sense because JavaScript is a default language. There is no need to use it.

**Comments before and after scripts.**

In really ancient books and guides, you may find comments inside the `<script>` tags, like this:

```html
<script type="text/javascript"><!--
    alert("Hello, World!");
// --></script>
```

This trick isn't used in modern JS. These comments hide JS code from old browsers that didn't know how to process `<script>` tag. Since browsers release in the last 15 years don't have this same issue, this kind of comment can help you identify really old code.

# External scripts

If we have a lot of JS code, we can put it into a separate file.

Script files are attached to HTML with the `src` attribute:

```html
<script src="/path/to/script.js"></script>
```

Here, `/path/to/script.js` is an absolute path to the script from the site root. One can also privide a relative path from the current page. For instance, `src="script.js"`, just like `src="./script.js"`, would mean a file "script.js" in the current folder.

We can give a full URL as well. For instance:

```html
<script src="https://example.com/script.js"></script>
```

To attach several scripts, use multiple tags:

```html
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
```

> <i class="fa-solid fa-circle-info"></i> Please note:
>
> As a rule, only the simplest scripts are put into HTML. More complex ones reside in seperate files. 
>
> The benefit of a seperate file is that the browser will download it and store in its cache.
>
> Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once.
> 
> That reduces traffic and makes pages faster.

### If `src` is set, the script content is ignored.

A single `<script>` tag can't have both `src` attribute and inline code.    

This won't work:

```html
<script src="/path/to/script.js">
    alert("Hello, World!"); // the content is ignored because src is set
</script>
```

We must choose either an external `<script src="...">` or a regular `<script>` with code.

The example above can be split into two scripts to work:

```html
<script src="/path/to/script.js"></script>
<script>
    alert("Hello, World!"); // this will work
</script>
```

## Summary
- We can use a `<script>` tag ti add JavaScript code to a page.
- The `type` and `language` attributes are not required.
- A script in an external file can be inserted with `<script src="path/to/script.js"></script>`.

There is much more to learn about browser scripts and their interaction with the webpage. But let's keep in mind that this part of the tutorial is devoted to the JavaScript language, so we shouldn't distract ourselves with browser-specific implementations of it. We'll be using the browser as a way to run JS, which is very convenient, for online reading, but only one of many.

## Exercise

**1. Show an alert**

Create a page that shows a message "I'm JavaScript!".

**2. Show an alert with an external script**

Take the solution of the previous task. odify it by extracting the script content into an external file `alert.js`, residing in the same folder.

Open the page, ensure that the alert works.

