import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { prism  } from 'react-syntax-highlighter/dist/esm/styles/prism';
const Main = () => {
    const codeString = '(num) => num + 1';
    return (
      <SyntaxHighlighter language="javascript" style={prism }>
        {codeString}
      </SyntaxHighlighter>
    );
  };
  export default Main;