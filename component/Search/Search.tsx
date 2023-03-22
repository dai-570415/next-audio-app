import Styles from './css/Search.module.css';

export const Search = () => {
    return (
        <div className={Styles.searchWrap}>
            <input 
                type="text" 
                name="serach" 
                className={Styles.searchText}
            />
        </div>
    );
}