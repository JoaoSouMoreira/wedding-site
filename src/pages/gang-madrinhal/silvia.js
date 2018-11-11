import React from 'react';

import styles from './gang-madrinhal.css';

class SilviaText extends React.Component {

    render() {
        return <div className={styles.description}>
            <h3>Sílvia</h3>
            <p>Minhota, mais precisamente bracarense, vem da “cidade da Juventude”, da "Roma portuguesa", por alguns conhecida pela “cidade dos 3 Ps”. A Sílvia (“Sissi” para os amigos) é um doce e uma querida. Pura e delicada, graciosa, é naturalmente adorável. É impossível não gostar dela!</p>
            <p>Tímida e um pouco reservada, a Sílvia tem um certo mistério encantador e cativante. Se possa parecer um pouco distante por vezes, quem a conhece de perto sabe o quão atenciosa , prestável e considerada ela é. Aquela amiga que está sempre lá, para conversar e partilhar momentos menos bons, mas também para celebrar os bons e muito bons, seja numa mensagem de motivação, com um café, um copo, ou na pista de dança.</p>
            <p>Tudo começou no curso de Análises Clínicas em 2006, mas as duas foram-se aproximando cada vez mais e mais ao longo dos anos. Têm muito em comum, em muitos aspectos, o que faz com que se compreendam e apoiem grandemente. Acabaram por se afastar academicamente e profissionalmente, pois cada uma amadureceu e seguiu os seus sonhos e objectivos, mas nunca permitiram afastar-se como amigas – pelo contrário, manterem-se próximas é uma prioridade!</p>
            <p>De jovens adultas a “velhinhas”, “Isa & Sissi “ é uma história que ainda nem vai a meio, com muitos volumes fascinantes por publicar! Um deles chega às bancas a 11 de Maio de 2019, com a Sílvia a desempenhar o papel importante e fundamental de uma das madrinhas da Isabel.</p>
            <img className={styles.descriptionImage} src="/assets/silvia.jpg" />
        </div>
    }
}

export default SilviaText;