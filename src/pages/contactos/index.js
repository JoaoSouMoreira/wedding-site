import React from 'react';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import strings from '../../client/localizations';
import baseStyles from '../home/home.css';
import styles from './styles.css';

class ContactosPage extends BasePage {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader setLanguage={this.setLanguage.bind(this)}></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar path={this.props.location.pathname}></NavigationBar>
                <div className={baseStyles.content}>
                    <h1>{strings.contactos1}</h1>
                    <p>{strings.contactos2} <a href="mailto:omelhorcasamentode2019@gmail.com">omelhorcasamentode2019@gmail.com</a> {strings.contactos3}</p>
                    <img className={styles.banner} src="/assets/contactos.jpg" />
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default ContactosPage;
