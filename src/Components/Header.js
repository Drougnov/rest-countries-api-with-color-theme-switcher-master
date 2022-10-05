export default function Header(props){
    return(
        <header className={props.darkMode ? 'dark-mode' : ''}>
            <a href="#" className="logo">Where in the world?</a>
            <div className="toggle-theme" onClick={props.toggleDarkMode}>
                <span>{props.darkMode ? <i class="fa-regular fa-moon"></i> : <i class="fa-regular fa-sun"></i>}</span>
                <span>{props.darkMode ? "Dark Mode":"Light Mode"}</span>
            </div>
        </header>
    )
}