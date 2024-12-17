import React from "react"

const Header = ({isDarkMode, onDarkModeClick}) => {
    return (
        <div>
            <header>
                <h2>Shopster</h2>
                <button onClick={onDarkModeClick}>
                    {isDarkMode ? "dark":"Light"} Mode
                </button>
            </header>
        </div>
    )
}

export default Header