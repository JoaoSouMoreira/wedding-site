import React from 'react';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import strings from '../../client/localizations';
import baseStyles from '../home/home.css';

class PrendasPage extends BasePage {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader setLanguage={this.setLanguage.bind(this)} />
            <div className={baseStyles.container}>
                <NavigationBar path={this.props.location.pathname} />
                <div className={baseStyles  .content}>
                    <p>{strings.prendas1}</p>
                </div>
            </div>
            <WeddingFooter />
        </div>;
    }
}

export default PrendasPage;
