import React from 'react';

import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import baseStyles from '../home/home.css';

class CasamentoPage extends React.Component {

    render() {
        console.log(process.env.GOOGLE_API_KEY);
        return <div className={baseStyles.main}>
            <WeddingHeader></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar></NavigationBar>
                <div className={baseStyles.content}>
                    <h1>O Casamento</h1>
                    <h4>Data: 11/05/2019</h4>
                    <h4>Hora: 14:30</h4>
                    <h4>Local: Convento de São Francisco, Vila Franca do Campo</h4>
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