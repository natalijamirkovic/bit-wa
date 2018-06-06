import React from "react"

const Header = (props) => {
    const {layout, state} = props;
    return (
        <header>
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo center">React Users</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li> <i className="tiny material-icons" onClick = {() => {layout(state)}} >refresh</i></li>
                 {state ?<li><i className="tiny material-icons" onClick = {() => {layout(state)}}>view_list</i></li>
  
                :<li> <i className="tiny material-icons" onClick = {() => {layout(state)}} >view_module</i></li>}
            </ul>
            </div>
         </nav>
     </header>
    )
}

export default Header