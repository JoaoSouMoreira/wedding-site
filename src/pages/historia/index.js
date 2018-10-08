import React from 'react';

import NavigationBar from '../../client/components/navbar';
import WeddingHeader from '../../client/components/header';

import baseStyles from '../home/home.css';

class HistoriaPage extends React.Component {

    render() {
        return <div className={baseStyles.container}>
            <NavigationBar></NavigationBar>
            <div className={baseStyles.content}>
                <WeddingHeader></WeddingHeader>
                <h2>A nossa história</h2>
                <h3>Isabel</h3>
                <p>Amiga, gentil, cheia de amor para dar. A “emotiva” da relação. Cientista. Adora o que faz, o que a torna por vezes demasiado viciada no trabalho, mas também adora yoga, fotografia e dança. Adora a sua família e os seus amigos, vê o melhor nas pessoas. Preocupada, ansiosa e por vezes “stressadinha”, anda a aprender a ser ela própria e a aceitar as coisas como elas são.</p>
                <h3>Joāo</h3>
                <p>Meigo, sensato, ponderado. O “racional” da relação. Programador. Trabalhador e aplicado. Por vezes demasiado relaxado, o que pode levar a procrastinação não desejada. Apesar por vezes parecer um pouco desligado. é amigo do próximo e tem bom querer para toda a gente. Adora música e tecnologia.</p>
                <p>Fazemos bem um ou outro, tornamo-nos melhores quando estamos juntos.</p>
                <p>Ambos adoramos ir a festivais de música. E ambos adoramos jogos de computador - um fim de semana perfeito por vezes é passado na “ronha” no sofá, juntos, a jogar, ou a ver séries.</p>
                <p>Ambos adoramos viajar, especialmente juntos.</p>
                <p>Gostamos de rir e nos divertir um com o outro. Por isso para fazer o que quer que seja, desde viajar, a festival de música, a coisas banais como ir às compras – bastamos um ao outro, e podemos sempre contar um com o outro.</p>
                <p>Somos ambos de Ponta Delgada, ambos nascidos no Hospital de São José. O João viveu toda a sua infância em São Miguel, até aos 18 anos. A Isabel viveu em dos 0 aos 2 anos em São Miguel com os pais, dos 2 aos 9 anos em Santa Maria com os avós maternos, voltou a São Miguel dos 9 aos 15 anos para viver com o pai, e aos 15 anos foi viver para Leça da Palmeira (Porto).</p>
                <p>Conhecemo-nos em 2005 no festival Maré de Agosto, na ilha de Santa Maria. Apesar de que o João diz que se sentiu logo atraído pela Isabel, ela não lhe liguou nenhuma – achou que era mais um menino bonito “com a mania”. Não podia estar mais errada...</p>
                <p>No início de 2006 o João mandou uma mensagem à Isabel pelo Hi5 (quem ainda se lembra do Hi5???), que levou a que trocássemos contactos e começássemos a falar via MSN Messenger e posteriormente telemóvel. Quando nos vimos pessoalmente novamente aconteceu tudo naturalmente, e rapidamente virou oficial – a 11 de Abril de 2006. A Isabel tinha acabado de fazer 18 anos e o João caminhava para os 17 anos.</p>
                <p>Entretanto a Isabel entrou na universidade (Setembro de 2006), no curso de Análises Clínicas e Saúde Pública, na Escola Superior de Tecnologias da Saúde do Porto (ESTSP), mas o João ainda tinha mais um ano de secundário pela frente, pelo que durante 1 ano e meio namorámos à distância – a Isabel em Leça da Palmeira e o João em São Miguel.</p>
                <p>Em 2007 o João mudou-se para o Porto para ingressar na universidade, mais concretamente para estudar Engenharia Informática no Instituto Superior de Engenharia do Porto (ISEP).</p>
                <p>No início de 2010 estivemos novamente longe um do outro por 3 meses (enquanto a Isabel esteve na Finlândia como estudante ERASMUS), mas o João foi visitar.</p>
                <p>No Verão de 2010 a Isabel terminou a primeira licenciatura, mas não quis ficar por aí e em Setembro foi para Braga para estudar Biologia Aplicada na Universidade do Minho. Em 2012 o João terminou o curso e mudou-se para Braga, onde vivemos juntos pela primeira vez (com amigas), mas foi em 2013 que fomos viver só os 2 (mais a Sacha! A gata da Isabel), após o João ter arranjado o seu primeiro trabalho como programador.</p>
                <p>Em 2014 o João teve uma oferta para vir para Exeter (Reino Unido) trabalhar, e mais uma vez estivemos 1 ano e meio separados – o João em Exeter e a Isabel em Braga. Mais uma vez, víamo-nos fisicamente de 3 em 3 meses.</p>
                <p>Em 2015 a Isabel terminou o mestrado em Ciências da Saúde (Neurociências) e juntou-se ao João em Exeter para fazer o doutoramento (Estudos Médicos – estudos de genético na doença de Alzheimer), onde vivemos desde então.</p>
                <p>Em 2017 o Deago (lê-se Diego, mas quem originalmente lhe deu o nome claramente falhou) juntou-se à nossa pequena família (agora somos 3!).</p>
                <p>Em 2017 o João pediu a Isabel em casamento e a 11 de Maio de 2019.</p>
                <p>Ainda não sabemos exactamente para onde vamos a seguir. Temos planos e ambições, mas muito poderá mudar. Tem sido uma aventura gira, em que temos crescido e amadurecido juntos.</p>
                <p>Ao longo dos anos tivemos os nossos problemas, claro (estranho seria se não tivessemos!), mas somos uns apaixonados um pelo outro, e vemo-nos a continuar a construir a nossa história, a construir família, e a envelhecer juntos.</p>
                <p><b>13 anos depois de estarmos juntos, vamos finalmente casar!</b></p>

            </div>
        </div>;
    }
}

export default HistoriaPage;