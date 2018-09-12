import React from 'react';
import { hot } from 'react-hot-loader';

import styles from './navbar.css';

class NavigationBar extends React.Component {

    navItems = [
        { title: 'Página Principal', display: true },
        { title: 'A Nossa História', display: true },
        { title: 'O Pedido', display: true },
        { title: 'Gang Madrinhal', display: true },
        { title: 'Padrinho', display: true },
        { title: 'O Casamento', display: true },
        { title: 'Viajar Para Sāo Miguel', display: true },
        { title: 'Estadia', display: true },
        { title: 'Sugestões dos Noivos', display: true },
        { title: 'Fotos', display: true },
        { title: 'Contactos', display: true },
        { title: 'RSVP', display: true },
    ];

    constructor(props) {
        super(props);
    }

    render() {
        const navElements = this.navItems
            .filter((navItem) => navItem.display)
            .map((navItem) => (<li key={navItem.title} className={styles.item}>
                    <a href="#">{ navItem.title }</a>
                </li>));

        return <ul className={styles.items}>{ navElements }</ul>;
    }
}

export default NavigationBar;