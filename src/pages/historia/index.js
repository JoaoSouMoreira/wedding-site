import React from 'react';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import strings from '../../client/localizations';
import baseStyles from '../home/home.css';
import styles from './styles.css';

class HistoriaPage extends BasePage {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader  setLanguage={this.setLanguage.bind(this)}></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar path={this.props.location.pathname}></NavigationBar>
                <div className={baseStyles.content}>
                    <h2>{strings.historia1}</h2>
                    <img className={styles.image} src="/assets/isabel.jpg" />
                    <h3>Isabel</h3>
                    <p>{strings.historia2}</p>
                    <h3>Joāo</h3>
                    <p>{strings.historia3}</p>
                    <img className={styles.image} src="/assets/isabelejoao.jpg" />
                    <h3>Isabel & Joāo</h3>
                    <p>{strings.historia4}</p>
                    <p>{strings.historia5}</p>
                    <p>{strings.historia6}</p>
                    <p>{strings.historia7}</p>
                    <p>{strings.historia8}</p>
                    <p>{strings.historia9}</p>
                    <p>{strings.historia10}</p>
                    <p>{strings.historia11}</p>
                    <p>{strings.historia12}</p>
                    <p>{strings.historia13}</p>
                    <p>{strings.historia14}</p>
                    <p>{strings.historia15}</p>
                    <p>{strings.historia16}</p>
                    <p>{strings.historia17}</p>
                    <p>{strings.historia18}</p>
                    <p>{strings.historia19}</p>
                    <p>{strings.historia20}</p>
                    <p><b>{strings.historia21}</b></p>
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default HistoriaPage;
