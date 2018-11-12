import React from 'react';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import strings from '../../client/localizations';
import baseStyles from '../home/home.css';

class BrevementePage extends BasePage {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader setLanguage={this.setLanguage.bind(this)}></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar></NavigationBar>
                <div className={baseStyles.content}>
                    <h1>{strings.brevemente}</h1>
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default BrevementePage;