import React from 'react';

import styles from './gang-madrinhal.css';

class RaquelText extends React.Component {

    render() {
        return <div className={styles.description}>
            <h3>Raquel</h3>
            <p>Mariense de gema, é criativa, aplicada, organizada, bondosa. Sempre nos seus afazeres, dá o seu melhor diariamente. Derrete-se com cada ser deste planeta. Se se dispõe e/ou lhe é dada uma responsabilidade, não falha, aplicando-se a fazer o melhor possível!</p>
            <p>Foi em Maio de 1989 que a noiva conheceu a Raquel – desde que ela nasceu na ilha de Santa Maria nos Açores. Conheceram-se como primas, mas rapidamente se tornaram como irmãs. Como seria de esperar em qualquer relação de irmãos, os momentos passados juntas implicaram muita amizade, muita partilha e muita ternura, mas também envolveram umas “brigas” aqui e ali. Apesar dos desentendimentos, nada sabia melhor que aquele abraço de reconciliação depois de responder “sim” ao bilhete com a pergunta “Queres voltar a ser minha amiga?”. Na verdade nunca conseguimos passar muito tempo longe da outra… Mais de 25 anos passaram, a vida deu as voltas que deu, cada uma seguiu o seu caminho, mas ainda somos as “duas pequenas” de outros tempos, em que basta um olhar para sabermos exactamente o que a outra pensa. Existam os quilómetros que existam entre nós, a Raquel terá sempre um pedacinho do coração da Isabel.</p>
            <p>Nenhuma situação importante seria a mesma coisa sem ser partilhada uma com a outra. As situações inexplicáveis, em que só nós sabemos, já vão em muitas, e os casamentos respectivos não poderiam ser excepção. Em Dezembro de 2017 ambas pediram uma à outra para ser madrinha no seu casamento, e em Junho de 2018 a Isabel “amadrinhou” o casamento da Raquel com todo o amor e carinho possíveis. Para o tornar ainda mais especial, por coincidência apanhou o ramo da noiva pela primeira vez na vida – o ramo mais especial que poderia ter alguma vez apanhado (ainda por cima feito pela avó de ambas).</p>
            <p>Em Maio de 2019 a Isabel nunca poderia casar sem a rua Raquel do seu lado (a Margarida para a sua Minnie), como sempre esteve desde 1989.</p>
            <img className={styles.descriptionImage} src="/assets/raquel.png" />
        </div>
    }
}

export default RaquelText;