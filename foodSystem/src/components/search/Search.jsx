import IMG_SEARCH_ICON from "/img/search-icon.png"
import style from "./Search.module.css";
export const Search = () => {
    return (
        <>
            <div className="search">
                <form action="">
                    <div className={style.inputSearch}>
                        <input type="text" placeholder="Search" />
                        <button> <img src={IMG_SEARCH_ICON} alt="Search-Icon" /></button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Search;
