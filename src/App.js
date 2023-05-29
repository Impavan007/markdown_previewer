import './App.css';
import { useState } from 'react';
import { marked } from 'marked';
//a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
//

function App() {
  const [content, setContent] = useState(`# H1
## H2
[title](https://www.example.com)
\`code\`
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
- First item
- Second item
- Third item
> blockquote
**bold text**
![alt text](image.jpg)`);
marked.setOptions({
  breaks:true
})
  return (

    <div className="App">
       <textarea id="editor" onChange={(event)=>{setContent(event.target.value);}} value={content}>

       </textarea>
  
       <div id="preview" dangerouslySetInnerHTML={{
        __html: marked(content),
        }}></div>
    </div>
  );
}

export default App;
