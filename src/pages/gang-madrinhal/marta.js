import React from 'react';

import styles from './gang-madrinhal.css';

class MartaText extends React.Component {

    render() {
        return <div className={styles.description}>
            <h3>Marta</h3>
            <p>Mirandelense, presentemente a abraçar a capital portuguesa, é uma mulher independente, lutadora, e admiravelmente sonhadora e ambiciosa. Naturalmente graciosa e elegante, com um jeito e um sorriso peculiares, é uma verdadeira inspiração. De alheiras a outras delícias, é também uma inspiração na cozinha, onde usa o melhor ingrediente que poderia alguma vez usar – o seu amor e carinho.</p>
            <p>Desde o primeiro dia no curso de Análises Clínicas e Saúde Pública do IPP que se tornaram verdadeiras companheiras, absolutamente inseparáveis. Não há quem se lembre da Isa da faculdade, no Porto, que não se lembre da Marta! Foi “amizade à primeira vista”! De latadas a noites negras, passando por comboios do caloiro; de relatórios, a noitadas, a apoio e motivação para conseguir sair da cama; de caloiras, a finalistas, passando por “doutoras” – foram crescendo lado a lado. Tantas histórias para contar; tantas fotos para recordar; tantos momentos para levar no coração…</p>
            <p>Hoje, depois de (mais) crescidas, apesar da distância e dos caminhos distintos que escolheram e tomaram, a “nutri” e a “neuro” voltam sempre ao ponto de partida para se abraçarem com ternura e reviverem marcantes “velhos” tempos.</p>
            <p>No dia 11, num momento tão especial na sua vida, a Isabel teria obrigatoriamente que ter a sua parceira Marta do seu lado!</p>
            <img className={styles.imageSmall} src="/assets/marta.jpg" />
        </div>
    }
}

export default MartaText;