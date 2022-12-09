import "../style/Header.css"

const Header = (props) => {
    return (
        <header className="Header">
            <h1>{props.currentPage}</h1>
        </header>
    )
}

export default Header
