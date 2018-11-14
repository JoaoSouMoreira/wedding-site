import React from 'react';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import strings from '../../client/localizations';
import baseStyles from '../home/home.css';

class FornecedoresPage extends BasePage {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader setLanguage={this.props.setLanguage}></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar path={this.props.location.pathname}></NavigationBar>
                <div className={baseStyles.content}>
                    {/* <h1>{strings.fornecedores1}</h1>
                    <h4>{strings.fornecedores2}</h4>
                    <ul>
                        <li>Convento de Sāo Francisco, Vila Franca do Campo</li>
                        <li>Catering: Servicater</li>
                        <li>Decoraçāo: Iolanda Rodrigues</li>
                        <li>Música e luzes: Miguel Cabral</li>
                        <li>Animaçāo: Vânia Dilac e Bárbara Azevedo</li>
                    </ul>
                    <h4>{strings.fornecedores3}</h4>
                    <ul>
                        <li>Luísa Starling</li>
                    </ul>
                    <h4>{strings.fornecedores4}</h4>
                    <ul>
                        <li>Vestido: Browns of Totnes</li>
                        <li>Sapatos: And I Wonder</li>
                        <li>Cabelo: Vasco PDL</li>
                        <li>Maquilhagem: +mulher (Beatriz Feijó)</li>
                        <li>Ramo: Avó</li>
                    </ul>
                    <h4>{strings.fornecedores5}</h4>
                    <ul>
                        <li>Fato: Lojas Prassa</li>
                        <li>Cabelo: Vasco PDL</li>
                    </ul> */}
                    <h1>{strings.fornecedoresBrevemente}</h1>
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default FornecedoresPage;