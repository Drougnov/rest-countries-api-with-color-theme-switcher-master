export default function Home(props){
    return(
        <div className={props.darkMode ? 'dark-mode home':'home'}>
            <div className="input-field">
                <div className="search-bar">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search for a country..."/>
                </div>
                <select name="countries" id="countries">
                    <option value="" disabled selected hidden>Filter by Region</option>
                    <optgroup>
                        <option id="countries__all" value="All">All</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </optgroup>
                </select>
            </div>
        </div>
    )
}