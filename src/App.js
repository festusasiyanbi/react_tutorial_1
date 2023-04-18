import Input from './Input'
import Square from './Square'
import { useState } from 'react'

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)
  return (
    <div className="App">
      <div className="App-container">
        <Square 
          colorValue={colorValue}
          hexValue={hexValue}
          isDarkText={isDarkText}
        />
        <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
      </div>
    
</div>
  );
}

export default App;

