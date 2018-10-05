import React from 'react';

import NavigationBar from '../../client/components/navbar';
import WeddingHeader from '../../client/components/header';

import styles from './viajar.css';

class ViajarPage extends React.Component {

    render() {
        return <div className={styles.container}>
            <NavigationBar></NavigationBar>
            <div className={styles.content}>
                <WeddingHeader></WeddingHeader>
                <p>Viajar!!</p>
            </div>
        </div>;
    }
}

export default ViajarPage;