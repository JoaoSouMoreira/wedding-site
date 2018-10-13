import React from 'react';

import NavigationBar from '../../client/components/navbar';
import WeddingHeader from '../../client/components/header';

import baseStyles from './viajar.css';

class ViajarPage extends React.Component {

    render() {
        return <div className={baseStyles.container}>
            <WeddingHeader></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar></NavigationBar>
                <div className={baseStyles.content}>
                    <p>Viajar!!</p>
                </div>
            </div>
        </div>;
    }
}

export default ViajarPage;