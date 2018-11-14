import React from 'react';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import strings from '../../client/localizations';
import baseStyles from '../home/home.css';

class EstadiaPage extends BasePage {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader  setLanguage={this.setLanguage.bind(this)}></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar path={this.props.location.pathname}></NavigationBar>
                <div className={baseStyles.content}>
                    <h1>{strings.estadia1}</h1>
                    <p>{strings.estadia2}</p>
                    <br/>
                    <p><u>Convento de São Francisco</u>, Vila Franca do Campo ({strings.estadia3})</p>
                    <p>{strings.estadia4} <a href="mailto:manuela.m.guerreiro@sapo.pt">manuela.m.guerreiro@sapo.pt</a> {strings.estadia5} <a href="https://www.booking.com/hotel/pt/convento-de-sao-francisco-vfc.en-gb.html" target="_blank">Booking</a></p>
                    <br/>
                    <p><u>Out Of The Blue Hostel</u>, Ponta Delgada</p>
                    <p>{strings.estadia6} <a href="https://www.booking.com/hotel/pt/out-of-the-blue.en-gb.html" target="_blank">Booking</a></p>
                    <br/>
                    <p>{strings.estadia7}</p>
                    <p>{strings.estadia8}</p>
                    <ul>
                        <li>
                            <a href="https://wayzor.pt/pt" target="_blank">Wayzor</a>
                        </li>
                        <li>
                            <a href="https://gorentacar.pt/" target="_blank">Go Rent-a-car</a>
                        </li>
                        <li>
                            <a href="https://www.ilhaverde.com/pt/" target="_blank">Ilha Verde</a>
                        </li>
                        <li>
                            <a href="https://www.autocunha.net/" target="_blank">Auto Cunha</a>
                        </li>
                        <li>
                            <a href="https://www.letsrent.pt/" target="_blank">Let's Rent-a-car</a>
                        </li>
                    </ul>
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default EstadiaPage;