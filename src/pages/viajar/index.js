import React from 'react';

import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import baseStyles from '../home/home.css';
import styles from './viajar.css';

class ViajarPage extends React.Component {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar></NavigationBar>
                <div className={baseStyles.content}>
                    <h3>Porto/Lisboa –> Ponta Delgada</h3>
                    <ul>
                        <li className={styles.item}><a href="https://www.azoresairlines.pt">Azores Airlines</a></li>
                        <li className={styles.item}><a href="https://www.ryanair.com">Ryanair</a></li>
                    </ul>
                    <h3>London –> Ponta Delgada</h3>
                    <ul>
                        <li className={styles.item}><a href="https://www.ryanair.com">Ryanair</a></li>
                    </ul>
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default ViajarPage;