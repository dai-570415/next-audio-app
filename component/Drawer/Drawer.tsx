import { FC } from 'react';
import Link from 'next/link';
import Styles from './css/Drawer.module.css';

export const Drawer: FC = () => {
    return (
        <>
            <input type="checkbox" className={Styles.openSidebarMenu} id="openSidebarMenu"/>
            <label htmlFor="openSidebarMenu" className={Styles.sidebarIconToggle}>
                <div className={Styles.spinner + ' ' + Styles.diagonal + ' ' + Styles.part1}></div>
                <div className={Styles.spinner + ' ' + Styles.horizontal}></div>
                <div className={Styles.spinner + ' ' + Styles.diagonal + ' ' + Styles.part2}></div>
            </label>
            <div className={Styles.sidebarMenu}>
                <ul>
                    <li><Link href="">メニュー1</Link></li>
                    <li><Link href="">メニュー2</Link></li>
                    <li><Link href="">メニュー3</Link></li>
                    <li><Link href="">メニュー4</Link></li>
                    <li><Link href="">メニュー5</Link></li>
                    <li><Link href="">メニュー6</Link></li>
                    <li><Link href="">メニュー7</Link></li>
                    <li><Link href="">メニュー8</Link></li>
                </ul>
            </div> 
        </>
    );
}
