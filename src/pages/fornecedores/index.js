import React from 'react';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import strings from '../../client/localizations';
import baseStyles from '../home/home.css';
import styles from './fornecedores.css';

class FornecedoresPage extends BasePage {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader setLanguage={this.setLanguage.bind(this)}></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar path={this.props.location.pathname}></NavigationBar>
                <div className={baseStyles.content}>
                    <h1>{strings.fornecedores1}</h1>
                    <p className={styles.paragraph}>{strings.fornecedores2}: Convento de Sāo Francisco, Vila Franca do Campo</p>
                    <ul className={styles.list}>
                        <li><a href="http://conventosaofrancisco.net/" target="_blank">Website</a></li>
                        <li><a href="https://www.booking.com/hotel/pt/convento-de-sao-francisco-vfc.en-gb.html" target="_blank">Booking</a></li>
                    </ul>
                    <p className={styles.paragraph}>Catering: Servicater</p>
                    <ul className={styles.list}>
                        <li><a href="http://servicater.pai.pt/" target="_blank">Website</a></li>
                        <li><a href="https://www.facebook.com/Servicater/" target="_blank">Facebook</a></li>
                    </ul>
                    <p className={styles.paragraph}>{strings.fornecedores3}: Iolanda Rodrigues</p>
                    <ul className={styles.list}>
                        <li><a href="https://www.facebook.com/iolandarodriguesartesanato/" target="_blank">Facebook</a></li>
                    </ul>
                    <p className={styles.paragraph}>{strings.fornecedores4}: Ricardo Cabral Eventos</p>
                    <ul className={styles.list}>
                        <li><a href="https://www.facebook.com/RicardoCabralEventos" target="_blank">Facebook</a></li>
                    </ul>
                    <p className={styles.paragraph}>{strings.fornecedores5}: Vânia Dilac e Bárbara Azevedo</p>
                    <ul className={styles.list}>
                        <li><a href="https://www.facebook.com/vania.dilac.music/" target="_blank">Facebook Vânia Dilac</a></li>
                    </ul>
                    <p className={styles.paragraph}>{strings.fornecedores5}: Matti (Miguel Cabral)</p>
                    <ul className={styles.list}>
                        <li><a href="https://www.facebook.com/Matti-127882387290315" target="_blank">Facebook</a></li>
                        <li><a href="https://soundcloud.com/djmatti84" target="_blank">Soundcloud</a></li>
                    </ul>
                    <p className={styles.paragraph}>{strings.fornecedores6}: Luísa Starling</p>
                    <ul className={styles.list}>
                        <li><a href="http://luisastarling.com/" target="_blank">Website</a></li>
                        <li><a href="https://www.instagram.com/luisastarlingweddings/" target="_blank">Instagram</a></li>
                    </ul>
                    <h3>{strings.fornecedores12}</h3>
                    <p className={styles.paragraph}>{strings.fornecedores7}: Browns of Totnes</p>
                    <ul className={styles.list}>
                        <li><a href="http://brownsoftotnes.co.uk/" target="_blank">Website</a></li>
                        <li><a href="https://www.facebook.com/brownsoftotnes/" target="_blank">Facebook</a></li>
                    </ul>
                    <p className={styles.paragraph}>{strings.fornecedores8}: And I Wonder</p>
                    <ul className={styles.list}>
                        <li><a href="https://shop.andiwonder.com/" target="_blank">Website</a></li>
                        <li><a href="https://www.facebook.com/andiwonderwedding/" target="_blank">Facebook</a></li>
                    </ul>
                    <p className={styles.paragraph}>{strings.fornecedores9}: Vasco PDL</p>
                    <ul className={styles.list}>
                        <li><a href="https://www.facebook.com/Vasco.Pdl/" target="_blank">Facebook</a></li>
                    </ul>
                    <p className={styles.paragraph}>{strings.fornecedores10}: +mulher (Beatriz Feijó)</p>
                    <ul className={styles.list}>
                        <li><a href="https://www.facebook.com/beatrizfeijomakeup" target="_blank">Facebook</a></li>
                    </ul>
                    <p className={styles.paragraph}>{strings.fornecedores11}: Avó</p>
                    <h3>{strings.fornecedores13}</h3>
                    <p className={styles.paragraph}>Fato: Lojas Prassa</p>
                    <ul className={styles.list}>
                        <li><a href="http://www.prassa.pt/" target="_blank">Website</a></li>
                        <li><a href="https://www.facebook.com/lojaprassa/" target="_blank">Facebook</a></li>
                    </ul>
                    <p className={styles.paragraph}>{strings.fornecedores9}: Vasco PDL</p>
                    <ul className={styles.list}>
                        <li><a href="https://www.facebook.com/Vasco.Pdl/" target="_blank">Facebook</a></li>
                    </ul>
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default FornecedoresPage;