import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navbar.css';

class NavigationBar extends React.Component {

    navItems = [
        { title: 'Página Principal', display: true, href: '/' },
        { title: 'A Nossa História', display: true, href: '/nossa-historia' },
        { title: 'O Pedido', display: true, href: '/pedido' },
        { title: 'Gang Madrinhal', display: true, href: '/gang-madrinhal' },
        { title: 'Padrinho', display: true, href: '/padrinho' },
        { title: 'O Casamento', display: true, href: '/casamento' },
        { title: 'Viajar Para Sāo Miguel', display: true, href: '/viajar' },
        { title: 'Estadia', display: true, href: '/estadia' },
        { title: 'Sugestões dos Noivos', display: true, href: '/sugestoes' },
        { title: 'Fotos', display: true, href: '/fotos' },
        { title: 'Contactos', display: true, href: '/contactos' },
        { title: 'RSVP', display: true, href: '/rsvp' },
    ];

    constructor(props) {
        super(props);
    }

    render() { 
        const navElements = this.navItems
            .filter((navItem) => navItem.display)
            .map((navItem) => (<li key={navItem.title} className={styles.item}>
                    <NavLink to={navItem.href}>{ navItem.title }</NavLink>
                </li>));

        return <ul className={styles.items}>{ navElements }</ul>;
    }
}

export default NavigationBar;