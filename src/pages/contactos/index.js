import React from 'react';

import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import baseStyles from '../home/home.css';

class ContactosPage extends React.Component {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar></NavigationBar>
                <div className={baseStyles.content}>
                    <h1>Contactos</h1>
                    <p>Qualquer dúvida contactem-nos através do email isabeljoao@omelhorcasamentode2019.com ou enviem-nos uma mensagem para o WhatsApp (número inglês; os número portugueses não estão activos) ou Messenger.</p>
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default ContactosPage;