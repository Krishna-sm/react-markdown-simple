import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import Main from './Main';
const App = () => {
  const [text,setText] = useState('Welcome to krishna tech');
  return (
    <>
    <h1 align='center'>Markdown Editior</h1>
      <div className="center-div">
        <textarea value={text} onChange={(e)=>setText(e.target.value)} className='left-side'></textarea>
        <div className='right-side'><ReactMarkdown>{text}</ReactMarkdown></div>
      </div>
      <Main/>
    </>
  )
}

export default App
