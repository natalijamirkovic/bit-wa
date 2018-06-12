import React from "react"

const Header = (props) => {
    const { layout, state, loadData } = props;
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">React Users</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li> <i className="tiny material-icons" onClick={() => { loadData() }} >refresh</i></li>

                        {
                            state
                                ? <li><i className="tiny material-icons" onClick={() => { layout(state) }}>view_list</i></li>

                                : <li> <i className="tiny material-icons" onClick={() => { layout(state) }} >view_module</i></li>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header