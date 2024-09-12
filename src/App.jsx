import React, { useState } from 'react';
import { marked } from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == \\\`\\\`\\\` && lastLine == \\\`\\\`\\\`) {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also links, and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [isEditorMaximized, setIsEditorMaximized] = useState(false);
  const [isPreviewerMaximized, setIsPreviewerMaximized] = useState(false);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const toggleEditorMaximized = () => {
    setIsEditorMaximized(!isEditorMaximized);
  };

  const togglePreviewerMaximized = () => {
    setIsPreviewerMaximized(!isPreviewerMaximized);
  };

  return (
    <div className={`container-fluid ${isEditorMaximized ? 'editor-maximized' : ''} ${isPreviewerMaximized ? 'previewer-maximized' : ''}`}>
      <div className="row h-100">
        <div className={`col ${isEditorMaximized ? 'col-12' : 'col-6'} p-0 h-100`}>
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Editor</h5>
              <button onClick={toggleEditorMaximized} className="btn btn-light">
                <i className={`bi ${isEditorMaximized ? 'bi-arrows-angle-contract' : 'bi-arrows-angle-expand'}`}></i>
              </button>
            </div>
            <div className="card-body p-0">
              <textarea
                className="form-control h-100"
                value={markdown}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={`col ${isPreviewerMaximized ? 'col-12' : 'col-6'} p-0 h-100`}>
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Previsualización</h5>
              <button onClick={togglePreviewerMaximized} className="btn btn-light">
                <i className={`bi ${isPreviewerMaximized ? 'bi-arrows-angle-contract' : 'bi-arrows-angle-expand'}`}></i>
              </button>
            </div>
            <div className="card-body p-3">
              <div
                dangerouslySetInnerHTML={{ __html: marked(markdown) }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
