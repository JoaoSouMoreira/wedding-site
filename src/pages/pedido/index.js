import React from 'react';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import strings from '../../client/localizations';
import baseStyles from '../home/home.css';
import styles from './pedido.css';

class PedidoPage extends BasePage {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader  setLanguage={this.setLanguage.bind(this)}></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar path={this.props.location.pathname}></NavigationBar>
                <div className={baseStyles.content}>
                    <img className={styles.banner} src="/assets/pedido.jpg" />
                    <h2>{strings.pedido1}</h2>
                    <h5>{strings.pedido2} (01:50, AM)</h5>
                    <h5>{strings.pedido3}</h5>
                    <p>{strings.pedido4}</p>
                    <p>{strings.pedido5}</p>
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default PedidoPage;