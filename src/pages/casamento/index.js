import React from 'react';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import strings from '../../client/localizations';
import baseStyles from '../home/home.css';

class CasamentoPage extends BasePage {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader setLanguage={this.setLanguage.bind(this)}></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar></NavigationBar>
                <div className={baseStyles.content}>
                    <h1>{strings.oCasamento1}</h1>
                    <h4>{strings.oCasamento2}: 11/05/2019</h4>
                    <h4>{strings.oCasamento3}: 14:30</h4>
                    <h4>{strings.oCasamento4}: Convento de São Francisco, Vila Franca do Campo</h4>
                    <iframe
                    width="600"
                    height="450"
                    frameBorder="0" style={{border:0}}
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}
                        &q=Convento+de+Sāo+Francisco,Vila+Franca+do+Campo,Portugal`} allowFullScreen>
                    </iframe>
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default CasamentoPage;