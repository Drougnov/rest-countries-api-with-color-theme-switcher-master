export default function Detail(props){
    return(
        <div className={props.darkMode ? "dark-mode detail":"detail"}>
            <p>This is detail</p>
        </div>
    )
}