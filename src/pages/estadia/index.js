import React from 'react';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import baseStyles from '../home/home.css';

class EstadiaPage extends BasePage {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader  setLanguage={this.setLanguage.bind(this)}></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar path={this.props.location.pathname}></NavigationBar>
                <div className={baseStyles.content}>
                    <h1>Estadia</h1>
                    <p>Neste momento há muita oferta de estadia em São Miguel. Se vêm de férias por alguns dias recomendamos um airbnb ou hostel no centro de Ponta Delgada, mas se quiserem ficar connosco no local do casamento, por favor vejam a informação abaixo relativa ao Convento de São Francisco. Deixamos outras sugestões abaixo, mas apelamos ao vosso sentido crítico pois como podem imaginar nós não costumamos alugar espaço para ficarmos.</p>
                    <br/>
                    <p><u>Convento de São Francisco</u>, Vila Franca do Campo (local do casamento)</p>
                    <p>Enviar email para <a href="mailto:manuela.m.guerreiro@sapo.pt">manuela.m.guerreiro@sapo.pt</a> para marcações com 10% de desconto relativamente ao preço no <a href="https://www.booking.com/hotel/pt/convento-de-sao-francisco-vfc.en-gb.html" target="_blank">Booking</a></p>
                    <br/>
                    <p><u>Out Of The Blue Hostel</u>, Ponta Delgada</p>
                    <p>Nunca ficámos neste hotel, mas já lá jantámos 2x (noite de sushi) e visitámos o espaço. O staff é super simpático e o jardim é fantástico. Recomendamos darem uma vista de olhos. <a href="https://www.booking.com/hotel/pt/out-of-the-blue.en-gb.html" target="_blank">Booking</a></p>
                    <br/>
                    <p>Qualquer dúvida em que possamos ajudar ou dar uma opinião falem connosco.</p>
                    <p>Independentemente de onde fiquem, recomendamos alugar carro (a nosso ver é mesmo obrigatório para poderem ver a ilha). Algumas sugestões (baseadas em críticas no Google), mas novamente apelando ao vosso sentido crítico porque não costumamos alugar carro na ilha:</p>
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