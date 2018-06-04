import React from "react"


const Header = (props) => {
    const headline = props.myTitle;
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">{headline}</a>
                </div>
            </nav>
        </header>
    )
}

export default Header