import React from 'react';

import NavigationBar from '../../client/components/navbar';
import WeddingHeader from '../../client/components/header';

import baseStyles from '../home/home.css';

class BrevementePage extends React.Component {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar></NavigationBar>
                <div className={baseStyles.content}>
                    <h1>Disponível Brevemente!</h1>
                </div>
            </div>
        </div>;
    }
}

export default BrevementePage;