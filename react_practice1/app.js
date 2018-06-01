const songs = [
    "Sabina",
    "Izadji na 5 minuta",
    "Da se opet rodim",
    "Pijem na ex",
    "Lepa do bola"
]

const SongItem = (props) => {
    return (
        <li>{props.song}</li>
    )
}
const SongList = (props) => {
    return (
        <ul>
            {songs.map((pesma, i) => {
                return <SongItem song={pesma} key={i} />
            })}
        </ul>
    )
}


const Header = props => {
    return (
        <header>
            <h1> Emil i Natalija cepaju React </h1>
        </header>
    )
}


const Main = props => {
    return (
        <main>
            <h2>{props.title}</h2>
            <img src={props.url} />
            <h3>***** Top 5 *****</h3>
            <SongList />
        </main>
    )
}


const Footer = props => {
    return (
        <footer>
            <small>Copyrights &copy; Natalija i Emil</small>
        </footer>
    )
}


const App = (props) => {
    return (
        <div>
            <Header />
            <Main title="R.I.P. SINAN" url="http://www.opanak.net/wp-content/uploads/2016/12/sinan-sakic.jpg" />
            <Footer />
        </div>
    )
}




const rootElement = document.querySelector(".root");
ReactDOM.render(<App />, rootElement)