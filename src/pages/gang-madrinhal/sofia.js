import React from 'react';

import styles from './gang-madrinhal.css';

class SofiaText extends React.Component {

    render() {
        return <div className={styles.description}>
            <h3>Sofia</h3>
            <p>Responsável, poupada, de bom coração, disposta. Sempre ocupada com mil e uma coisas, mas sempre disponível – por mais cheia que esteja a agenda e a vida da Sofia, ela sempre arranja tempo para um amigo. Sem papos na língua, diz o que pensa sem rodeios. Aos que não a conhecem podem interpretá-la mal; aos que a conhecem sabem que ela é do mais bem possível.</p>
            <p>Foi em 2006 que a noiva e a Sofia se conheceram. Na verdade a noiva “marroninha” não causou muito boa primeira impressão, pois com certeza devia “ter a mania”… De roupas “fluorescentes” e a esforçar-se por estar sempre “em cima do assunto”, fez com que a Sofia, mais “madura” e vestida de preto da cabeça aos pés, levantasse a sobrancelha.  O contrário também não foi ideal, na verdade a Sofia “impunha respeito” e “metia algum medo”. Mas rapidamente as duas se aperceberam que tinham bem mais em comum do que se via à primeira vista, e num ápice se tornaram inseparáveis.  Foram quatro anos inesquecíveis como colegas de curso, mas acima de tudo como amigas para a vida.</p>
            <p>Ao tentar descrever a Sofia sempre vem o provérbio “cão que ladra não morde” ao pensamento da noiva.</p>
            <img className={styles.imageSmall} src="/assets/sofia1.jpg" />
            <p>No entanto, mais importante, vêm também “A verdadeira amizade dura uma eternidade” e “Amigo fiel e prudente, vale muito mais que parente”.</p>
            <img className={styles.descriptionImage} src="/assets/sofia2.jpg" />
            <p>Não faria sentido algum à Isabel casar sem ter a sua Sofia do seu lado.</p>
        </div>
    }
}

export default SofiaText;