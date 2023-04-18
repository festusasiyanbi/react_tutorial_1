import colorNames from 'colornames'
const Input = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText
}) => {
    return (
        <form className="input" onSubmit={(e) => e.preventDefault()}>
            <input 
            autoFocus
            type="text"
            placeholder="Type a color here to see"
            required
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value))
            }}
            />
            <button type='button'
            onClick={() => setIsDarkText(!isDarkText)}>
                Toggle your text
            </button>
        </form>
)}

export default Input