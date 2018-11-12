import React from 'react';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import baseStyles from '../home/home.css';

class FornecedoresPage extends BasePage {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader setLanguage={this.props.setLanguage}></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar></NavigationBar>
                <div className={baseStyles.content}>
                    <h1>Disponível Brevemente!</h1>
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default FornecedoresPage;