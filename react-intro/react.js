const Header = () => {
    return <h1> hi from bit </h1>

}

const Body = () => {
    return (
    <div>
        <p> this is sl1 </p>
        <ShoppingList name = "lista 1" isActive={true}/>      // name ce se nalaziti u objektu koji prima ova funkcija - props u funkciji ShoppingList
        <p> this is sl2 </p>
        <ShoppingList name="lista 2" />
        </div>
    )
}

const Footer = () => {
    return <h4> h4 naslov </h4>
}

const App = () => {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const ShoppingList = (props) => {
    return (
        <div>
            <h1>{props.name} </h1>
            <ul>
                <li>Apple</li>
                <li>Orange</li>
                <li>Blueberry</li>
            </ul>
        </div>
    )
}


const rootElement = document.querySelector(".root");


ReactDOM.render(              // render metoda prima 2 parametra, render metoda sta zelimo da prikazemo, i druga gde zelimo da je prikazemo
    <App />,                 //sta zelimo da prikazemo
    rootElement             // gde zelimo da prikazemo
)