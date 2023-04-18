
const Square = ({colorValue, hexValue, isDarkText }) => {
    return (
        <section
        className="square"
        style={{
            backgroundColor: colorValue,
            color: isDarkText ? "#000" : "#fff"
        }}
        >
            <p>{colorValue ? colorValue : "I change color like I'm a chameleon"} </p>
            <p>{ hexValue ? hexValue : null }</p>

        </section>
    )
}

export default Square