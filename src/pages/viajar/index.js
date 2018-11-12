import React from 'react';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import strings from '../../client/localizations';
import baseStyles from '../home/home.css';
import styles from './viajar.css';

class ViajarPage extends BasePage {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader  setLanguage={this.setLanguage.bind(this)}></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar></NavigationBar>
                <div className={baseStyles.content}>
                    <h3>Porto/{strings.viajar1} –> Ponta Delgada</h3>
                    <ul>
                        <li className={styles.item}><a href="https://www.azoresairlines.pt" target="_blank">Azores Airlines</a></li>
                        <li className={styles.item}><a href="https://www.flytap.com" target="_blank">TAP Air Portugal</a></li>
                        <li className={styles.item}><a href="https://www.ryanair.com" target="_blank">Ryanair</a></li>
                    </ul>
                    <h3>London –> Ponta Delgada</h3>
                    <ul>
                        <li className={styles.item}><a href="https://www.azoresairlines.pt" target="_blank">Azores Airlines</a> (Com paragem no Porto/Lisboa)</li>
                        <li className={styles.item}><a href="https://www.flytap.com" target="_blank">TAP Air Portugal</a> (Com paragem no Porto/Lisboa)</li>
                        <li className={styles.item}><a href="https://www.ryanair.com" target="_blank">Ryanair</a> (Voo directo; apenas aos Sábados)</li>
                    </ul>
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default ViajarPage;