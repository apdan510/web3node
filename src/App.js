import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import KoiiHelp from './commands/KoiiHelp';
import KoiiEpoch from './commands/KoiiEpoch';
import KoiiBlockHeight from './commands/KoiiBlockHeight';
import KoiiValidators from './commands/KoiiValidators';


const TerminalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* height: 100vh;
  min-height: 100vh;
  min-width: 100vw; 
  padding: 10px;
  box-sizing: border-box;
  background-color: #2c001e;
  overflow: hidden;
`;

const OutputContainer = styled.div`
  flex-grow: 1;
  white-space: pre-wrap;
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
  overflow-y: auto;   /* Add scroll if content overflows */
  background-color: #2c001e; 
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
`;


const PromptContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2rem;
`;

const PromptTextBold = styled.span`
  font-weight: bold;
`;

const GreenText = styled(PromptTextBold)`
  color: #4ee44e;
`;

const WhiteText = styled(PromptTextBold)`
  color: #ffffff;
`;

const BlueText = styled(PromptTextBold)`
  color: #1e90ff;
`;

const InputField = styled.input`
  background-color: transparent;
  color: #fff;
  border: none;
  outline: none;
  font-size: 1.2rem;
  margin-left: 5px;
  font-family: 'Courier New', Courier, monospace;
`;

function App() {
  const [input, setInput] = useState('');
  const [outputHistory, setOutputHistory] = useState([]);  // Track history of inputs and outputs
  const inputRef = useRef(null);

  // UseEffect hook to focus input when clicking anywhere on the document
  useEffect(() => {
    const handleDocumentClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();  // Focus the input field
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);  // Cleanup listener
    };
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the new prompt and input display
    const newOutput = (
      <div key={Date.now()}>
        <PromptContainer>
          <GreenText>node@koii</GreenText>
          <WhiteText>:</WhiteText>
          <BlueText>{'/home'}</BlueText>
          <WhiteText>$</WhiteText>
          <span>{input}</span>
        </PromptContainer>
      </div>
    );

    // Handling various commands
    let commandOutput;
    switch(input.trim()) { // Trim input to remove unnecessary spaces
      case "koii help":
        commandOutput = <KoiiHelp key={Date.now() + 1} />;
        break;
      case "koii epoch":
        commandOutput = <KoiiEpoch key={Date.now() + 1} />;
        break;
      case "koii block height":
        commandOutput = <KoiiBlockHeight key={Date.now() + 1} />;
        break;
      case "koii validators":
        commandOutput = <KoiiValidators key={Date.now() + 1} />;
        break;
      case "koii commands":
        commandOutput = (
          <div key={Date.now() + 1}>
            Available commands:
            <br />- koii help
            <br />- koii epoch
            <br />- koii block height
            <br />- koii validators
            <br />- koii commands
          </div>
        );
        break;
      case "clear":
        setOutputHistory([]); // Clear the output history
        setInput(''); // Clear the input field
        return; // Exit early to avoid adding the "clear" command to output
      default:
        commandOutput = <div key={Date.now() + 1}>Invalid command</div>;
        break;
    }

    // Update the output history, keeping only the last three entries
    setOutputHistory((prevHistory) => {
      const newHistory = [...prevHistory, newOutput, commandOutput];
      return newHistory.slice(-3); // Keep only the last three entries
    });

    setInput('');  // Clear the input after submission
  };

  return (
    <TerminalContainer>
      <OutputContainer>
        {outputHistory.map((output, index) => (
          <div key={index}>{output}</div>
        ))}
      </OutputContainer>
      <form onSubmit={handleSubmit}>
        <PromptContainer>
          <GreenText>node@koii</GreenText>
          <WhiteText>:</WhiteText>
          <BlueText>{'/home'}</BlueText>
          <WhiteText>$</WhiteText>
          <InputField
            type="text"
            value={input}
            onChange={handleInputChange}
            autoFocus
            ref={inputRef}  // Set the reference to the input field
          />
        </PromptContainer>
      </form>
    </TerminalContainer>
  );
}

export default App;








//API Call 1 = <>
//API Call 2 = <>
//API Call 3 = <>
//API Call 4 = <>