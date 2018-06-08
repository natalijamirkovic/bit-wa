import React from "react";


export const Header = (props) => {

    return (
        <nav>
            <div className="nav-wrapper">
                <div className="container">
                    <a>Bit Blog</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Home</a></li>
                        <li><a href="badges.html">Authors</a></li>
                        <li><a href="collapsible.html">About</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

