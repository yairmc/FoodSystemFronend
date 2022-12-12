import IMG_SEARCH_ICON from "/img/search-icon.png"
import style from "./Search.module.css";
export const Search = ({ value, filterFunc, onChangeFunc }) => {
    return (
        <>
            <div className="search">
                <form action="">
                    <div className={style.inputSearch}>
                        <input type="text" placeholder="Product name..."
                            defaultValue={value}
                            onKeyDown={filterFunc}
                            onChange={onChangeFunc}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Search;
