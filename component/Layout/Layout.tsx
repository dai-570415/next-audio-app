import { FC } from 'react';
import { Children } from '../../types/types';
import { Drawer } from '../Drawer/Drawer';
import { Search } from '../Search/Search';
import Styles from './css/Header.module.css';

export const Layout: FC<Children> = ({ children }) => {
    return (
        <div className="container">
            <header className={Styles.header}>
                <div className={Styles.innerHeader}>
                    <Drawer />
                    <div>Audio App</div>
                    <Search />
                </div>
            </header>
                { children }
            <footer>
                {/* footer */}
            </footer>
        </div>
    );
}
