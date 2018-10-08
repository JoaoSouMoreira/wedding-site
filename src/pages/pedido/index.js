import React from 'react';

import NavigationBar from '../../client/components/navbar';
import WeddingHeader from '../../client/components/header';

import baseStyles from '../home/home.css';

class PedidoPage extends React.Component {

    render() {
        return <div className={baseStyles.container}>
            <NavigationBar></NavigationBar>
            <div className={baseStyles.content}>
                <WeddingHeader></WeddingHeader>
                <h2>O Pedido</h2>
                <h5>Data: 3 de Março de 2017 (01:50, AM)</h5>
                <h5>Local: Praia do Pópulo, São Miguel (Açores)</h5>
                <p>Foi no ano de 2006 (a 29 de Julho de 2006 mais precisamente), primeiro ano de namoro, que o João fez um piquenique na praia para a Isabel (infelizmente não há fotos desse evento). Essa surpresa contou com cúmplices, os pais do João, que vendaram e levaram a Isabel ao local, que não fazia ideia do que a esperava. Apesar do esforço do João, nesse dia ele não teve muita sorte (não fosse o João) porque teve que acarinhar uma Isabel com febre (a Isabel tem frequentemente uma pontaria enorme em ficar doente em alturas muito pouco convenientes).</p>
                <p>Em 2017 o João resolveu repetir a surpresa, desta feita para aproveitar a fazer o pedido de casamento. Obviamente que a Isabel suspeitou, mas 1) já tinham surgido outras oportunidades, 2) o João estava super calmo, e 3) passou-se praticamente 1h até que o João resolveu fazer magia. E ainda conseguiu enganar a Isabel a levantar-se para se poder ajoelhar e pedir a Isabel em casamento. "Queres continuar a fazer-me o homem mais feliz do mundo?".  Foi muito bonito. Houve uma pequena lágrima (da Isabel. claro), beijo, abraço e muitos sorrisos. E, claro, algumas fotos. Por isso aqui fica. Esperemos que tenham gostado de partilhar um pouco do momento connosco. :)</p>
            </div>
        </div>;
    }
}

export default PedidoPage;