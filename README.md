# Webpack Argument Retriver
This is a library for handling argument retrieving in an Webpack application.

<br/>

## Usage
To use this library, you should print the HTML file in server side like the following format.
```html
<body>
<!-- Args -->
<input id="args::file-path" type="hidden" value="/asdf"/>
<input id="args::authors" type="hidden" value="casper,tom,cat,mary"/>  


<div id="app"></div>
<script type="text/javascript" src="./client.min.js" charset="utf-8"></script>
</body>
```

Then, import the library in your main app js file.
```js
import React from "react";  
import ReactDOM from "react-dom";  
import AppMain from 'app/AppMain';

// Register the argument retrieve function.
import {regArgRetrieveFuncs} from 'components/ArgRetrieve'; regArgRetrieveFuncs(); 
```

Finally, retrieve the args.
```js
console.log(document.getAllArgs());
```
