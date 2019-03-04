import React from 'react';
import { NavLink } from 'react-router-dom';

import strings from '../../localizations';
import styles from './navbar.css';

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
    }

    getElements() {
        return [
            { title: strings.menu1, display: true, href: '/' },
            { title: strings.menu2, display: true, href: '/nossa-historia' },
            { title: strings.menu3, display: true, href: '/pedido' },
            { title: strings.menu4, display: true, href: '/gang-madrinhal' },
            { title: strings.menu5, display: true, href: '/padrinho' },
            { title: strings.menu6, display: true, href: '/casamento' },
            { title: strings.menu7, display: true, href: '/fornecedores' },
            { title: strings.menu8, display: true, href: '/viajar' },
            { title: strings.menu9, display: true, href: '/estadia' },
            { title: strings.menu10, display: true, href: '/sugestoes' },
            { title: strings.menu11, display: true, href: '/fotos' },
            { title: strings.menu12, display: true, href: '/contactos' },
            { title: strings.menu14, display: true, href: '/prendas' },
            { title: strings.menu13, display: true, href: '/rsvp' },
        ];
    }

    render() {
        const navItems = this.getElements();

        const navElements = navItems
            .filter((navItem) => navItem.display)
            .map((navItem) => {
                const classes = navItem.href === this.props.path ? [styles.item, styles.active] : [styles.item];
                return <li key={navItem.title} className={classes.join(' ')}>
                        <NavLink to={navItem.href}>{ navItem.title }</NavLink>
                </li>;
            });

        return <div className={styles.navbar}>
            <ul className={styles.items}>{ navElements }</ul>
        </div>;
    }
}

export default NavigationBar;
