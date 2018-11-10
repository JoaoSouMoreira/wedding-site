import React from 'react';

import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import baseStyles from '../home/home.css';

class SugestoesPage extends React.Component {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar></NavigationBar>
                <div className={baseStyles.content}>
                    <h2>Sugestões dos Noivos</h2>
                    <p>Estamos a planear fazer um pequeno programa para a Quarta-Feira e Quinta-Feira (8 e 9 de Maio) antes do casamento para fazermos algo por São Miguel com os convidados se queiram juntar a nós. O que estamos a pensar neste momento seria um dos dias por Ponta Delgada, que poderia incluir um passeio de barco (Whale Watching, por exemplo), e o outro dia nas Furnas (cozido das Furnas, bolos lêvedos, Poça da Dona Beija). Os custos seriam assegurados individualmente, como poderão compreender.</p>
                    <p>Mais detalhes em breve.</p>
                    <p>À parte desses 2 dias, vejam as nossas sugestões gerais abaixo, que temos construído ao longo dos anos e com contribuição de amigos.</p>
                    <p>
                        3 aplicações essenciais:
                        <ul>
                            <li>
                                <a href="http://www.spotazores.com/" target="_blank">SpotAzores</a>
                                <ul>
                                    <li>Onde é possível ver, em tempo real, através de câmaras, como está o tempo em todas as partes da ilha, o que é óptimo porque isso permite definir a zona para onde ir diariamente;</li>
                                    <li>Ver diariamente/várias vezes ao dia;</li>
                                    <li>Consegue-se ver do telemóvel;</li>
                                    <li>Infelizmente agora tem publicidade, mas basta fechar.</li>
                                </ul>
                            </li>
                            <li>
                                <a href="http://walkmeportugal.com/en/azores/trails-list/" target="_blank">Walk Me</a>
                                <ul><li>Trilhos</li></ul>
                            </li>
                            <li>
                                Ferraria - <a href="https://play.google.com/store/apps/details?id=kruk.azores.hotsprings.ferraria&hl=en" target="_blank">Android</a> ou <a href="https://itunes.apple.com/pt/app/ferraria-hot-springs/id1243807675?l=en&mt=8" target="_blank">iOS</a>
                                <ul><li>Para visitar a ponta da Ferraria, e saber as marés para poder entrar na água.</li></ul>
                            </li>
                        </ul>
                    </p>
                    <p>
                        Na mala:
                        <ul>
                            <li>Fatos de banho / biquínis (um, pelo menos, mais velho para algumas águas que mancham e alargam os elásticos pelas temperaturas altas, como no Parque Terra Nostra, na Poça Dona Beija e na Caldeira Velha)</li>
                            <li>Toalhas de cor escura – mesma razão de cima</li>
                            <li>Botas / sapatilhas para caminhada</li>
                            <li>Protector solar e chapéu</li>
                            <li>Impermeável - No geral estar preparado/a que no mesmo dia pode tanto fazer sol num momento, como chover no minuto a seguir (De manhã pode estar um dia de verão e de tarde uma tempestade!!)</li>
                            <li>Sapatos / sandálias de plástico para o fundo do ilhéu</li>
                            <li>Espaço na mala para levar comida da boa!</li>
                        </ul>
                    </p>
                    <p>Sugestões de dias (ser flexível em alterar a ordem dos dias é essencial, convém aproveitar as zonas que estão boas para visitar de acordo com as câmaras – particular atenção para a Lagoa do Fogo e as 7 cidades que estão frequentemente encobertas / com nevoeiro e que valem a pena quando o céu está limpo!):</p>
                    <p>
                        <b>DIA 1: Ponta Delgada</b> (e outras coisas para outros dias, nomeadamente restaurantes)
                        <ul>
                            <li>Avenida (Passeio ao longo da avenida)</li>
                            <li>Portas do Mar / marina</li>
                            <li>Portas da cidade</li>
                            <li>Câmara Municipal</li>
                            <li>Matriz</li>
                            <li>Mercado da Graça</li>
                            <li><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g189135-d12663995-Reviews-Cafe_Central_Ponta_Delgada-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">Café Central</a> (a sopa de peixe é muito boa; tem nova gerência)</li>
                            <li><a href="https://www.tripadvisor.pt/Attraction_Review-g189135-d8515271-Reviews-Louvre_Michaelense-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">Louvre Micaelense</a></li>
                            <li>A noiva pessoalmente é fã do restaurante <a href="https://www.tripadvisor.pt/Restaurant_Review-g189135-d6696858-Reviews-A_Tasca-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">“A Tasca”</a>. A tarte de inhame é muito boa. Para almoçar/jantar só com reserva (está sempre cheio!). Pelos vistos também é fixe para um chá ou café, mas nunca lá fomos senão para refeição.</li>
                        </ul>
                    </p>
                    <p>
                        <b>DIA 2: Sete Cidades</b>
                        <ul>
                            <li>Miradouro Pico do Carvão</li>
                            <li>Lagoa das Empadadas</li>
                            <li>Lagoa do Canário</li>
                            <li>Mata do Canário</li>
                            <li>Miradouro da Boca do Inferno</li>
                            <li>Miradouro Vista do Rei, que tem vista sobre a Lagoa das Sete Cidades. Uma das lagoas é azul e outra verde e é possível notar claramente esse contraste</li>
                            <li>Ao lado do Miradouro há um hotel abandonado, o Hotel Monte Palace (não tenho a certeza se já está em obras, mas está a ser reconstruído)</li>
                            <li>Descida para a Lagoa das Sete Cidades de carro, parar o carro e contornar a lagoa azul (a maior) a pé. Se houver merenda, fazer um piquenique na beira da lagoa</li>
                            <li>Mosteiros, onde há piscinas naturais. O mar tem partes com um azul incrível que contrasta com o preto das rochas e branco da espuma das ondas</li>
                            <li>Termas da Ferraria, um SPA Termal com várias piscinas – uma delas ao ar livre, em cima do mar - jacuzi, massagens, banho turco… Dá para tomar banho no mar, mas tem que se ver na app qual é a melhor altura (há uma termal que sai no mar e se a maré está muito baixa fica demasiado quente, se a maré está muito alta não se sente e é frio)</li>
                        </ul>
                    </p>
                    <p>
                        <b>DIA 3: Ribeira Grande e Lagoa do Fogo</b> (Se estiver muito nevoeiro, mais vale deixar para outro dia porque não se vê nada)
                        <ul>
                            <li>Miradouro da Serra da Barrosa, que fica no conselho de Vila Franca do Campo</li>
                            <li>Descer a pé para a Lagoa do Fogo (2 km até à lagoa), por um trilho considerado difícil, cerca de 1 hora ir e vir, mas vale a pena</li>
                            <li>Depois, descer de carro para a Caldeira Velha, 5 Km para baixo (pelo caminho encontram-se vários outros miradouros)</li>
                            <li>A Caldeira Velha (entrada 2€ para adultos, 4€ para famílias e 1€ para crianças) é um monumento natural que faz parte da Reserva da Biosfera. Tem imensa vegetação exótica, uma poça de água quente e uma cascata também quente para banhos termais (castanhas, devido ao ferro). É um cenário que poderia ser paradisíaco, mas é pouco selvagem e com muita gente. A Caldeira está localizada na cratera do Vulcão do Fogo, tem fumarolas e uma nascente de água termal. Tem chuveiros de água fria e vestiários, para quem quiser experimentar as poças</li>
                            <li>Praia de Santa Bárbara; <a href="https://www.tripadvisor.pt/Restaurant_Review-g616221-d4025720-Reviews-Tukatula_Bar-Ribeira_Grande_Sao_Miguel_Azores.html" target="_blank">Bar Tuká Tulá</a></li>
                            <li>Fábrica de Licores Mulher do Capote</li>
                            <li>Fábrica de Chá de Porto Formoso ou Gorreana (ainda só conseguimos ir à da Gorreana)</li>
                            <li>Trilho do Salto do Prego (4,5 Km). Demora cerca de 2h00, a meio tem uma cascata linda – mas fria – onde é possível tomar banho. Termina na Aldeia do Sanguinho, uma aldeia em (re)construção que parece saída de um conto de fadas</li>
                            <li><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g616221-d1809565-Reviews-Alabote-Ribeira_Grande_Sao_Miguel_Azores.html" target="_blank">Restaurante Alabote na Ribeira Grande</a></li>
                            <li>Miradouro do Castelo na Ribeira Grande</li>
                            <li>Poços de São Vicente Ferreira - excelentes para tomar banho num dia bonito</li>
                        </ul>
                    </p>
                    <p>
                        <b>DIA 4: Furnas</b>
                        <ul>
                            <li>Ir de carro ao Miradouro do Pico do Ferro com vistas sobre a Lagoa das Furnas</li>
                            <li>Ir de carro pela costa sul para a Lagoa das Furnas e parar o carro no lado das fumarolas – 0,50€ – para fazer o trilho à volta da lagoa, que demora cerca de 2h00 / 2h30</li>
                            <li>No lado sul da lagoa, a meio do trilho, a rodear a Ermida de Nossa Senhora das Vitórias, aparece a Mata Jardim José do Canto (a visita custa 2€)</li>
                            <li>Pelas 12h30 vale a pena estar novamente nas fumarolas para ver tirar o cozido. As panelas são colocadas pelas 6h da manhã nas caldeiras, pelos restaurantes e particulares, e ficam a cozinhar até ao meio dia. Qualquer pessoa pode cozinhar aqui, desde que leve, claro, a panela com o cozido de casa. O custo para cozinhar nas caldeiras são 3€. A caldeira tem de ser fechada com uma tampa de madeira, coberta com terra e não pode ser aberta até o cozido estar pronto</li>
                            <li>Para almoçar o cozido recomendamos os restaurantes Tony´s ou Miroma</li>
                            <li>Bolos Levedos - Gloria Moniz</li>
                            <li><a href="http://www.pocadadonabeija.com/" target="_blank">Poça da Dona Beija</a> – 3€ a entrada, água a 38-40ºC. A água está carregada de minerais essenciais. Balneários disponíveis, com água quente e fria</li>
                            <li>Parque Terra Nostra (o bilhete custa 6€). Logo à entrada tem um tanque de água termal onde se pode tomar banho. A água é quente e alaranjada (não se vê o fundo) e está a 35 / 40 graus, o provoca uma sensação de relaxamento maravilhosa. A água está carregada de minerais essenciais. Existem outras duas piscinas pequenas e o parque tem balneários disponíveis</li>
                            <li>Passar pelo Miradouro Salto do Cavalo, a 760 metros de altitude, onde se vê uma vasta vista sobre o vale da Povoação e as suas sete lombas. Ao fundo, até ao horizonte, surge o mar</li>
                            <li>Ir até à Praia da Ribeira Quente, onde a existência de nascentes hidrotermais submarinas tornam a água do mar quente</li>
                            <li>Regressar pela costa norte</li>
                        </ul>
                    </p>
                    <p>
                        <b>DIA 5: Vila Franca do Campo</b>
                        <ul>
                            <li><a href="http://cnvfc.net/cruzeiro/" target="_blank">Ilhéu de Vila Franca</a> – agora aparentemente pode-se comprar os bilhetes online, anteriormente tínhamos que ir super cedo para lá porque só vendem 400 bilhetes por dia. Podem ir passar a manhã ou a tarde no ilhéu. Em maré baixa tem uma praia pequenita, senão ficam nas zonas de rocha. Tomar banho no ilhéu é uma experiência muito gira. Recomendamos levar sapatos de plástico para andar nas rochas já que o fundo do ilhéu é rocha e pode ser desconfortável</li>
                            <li>Fábrica do Morgado – queijadas da Vila Franca</li>
                            <li>Praias de Água d’Alto</li>
                            <li>Cascata do Segredo</li>
                            <li>Miradouro do Pisão</li>
                            <li>Caloura e praia da Caloura (come-se bem no <a href="https://www.tripadvisor.pt/Restaurant_Review-g1900300-d3519463-Reviews-Bar_Caloura-Lagoa_Sao_Miguel_Azores.html" target="_blank">bar Caloura</a>)</li>
                        </ul>
                    </p>
                    <p>
                        <b>Outras sugestões</b>
                        <ul>
                            <li>A costa Norte por norma é sempre mais bonita que a costa Sul (miradouros, viagem, etc.), por isso se estiver um dia bonito aconselhamos dar prioridade</li>
                            <li><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g189135-d1239140-Reviews-Cais_20-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">Cais 20</a> (recomendamos o absurdo - cerveja e camarões, e o gelado de canela)</li>
                            <li><a href="https://www.tripadvisor.co.uk/Attraction_Review-g189135-d3610253-Reviews-Arco_8-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">Arco 8</a> (tomar um copo)</li>
                            <li><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g189135-d2723664-Reviews-Beach_Bar_Grill-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">Beach Bar & Grill</a> (come-se muito bem e não é caro)</li>
                            <li><a href="https://www.tripadvisor.co.uk/Attraction_Review-g189135-d7592378-Reviews-Arruda_Pineapple_Plantation-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">Estufas de Ananás</a></li>
                            <li><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g189135-d7898494-Reviews-Quinta_dos_Acores-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">Quinta dos Açores</a> (o que vale a pena são as saladas e os gelados! Os crepes também são bons)</li>
                            <li><a href="https://www.tripadvisor.com/Restaurant_Review-g189135-d6425672-Reviews-Casa_Do_Bife_O_Galego-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">Restaurante o Galego</a>(o melhor bife)</li>
                            <li><a href="http://www.restauranteaasm.com/pt/" target="_blank">Restaurante da Associação Agrícola</a> (sinceramente nunca lá fomos, mas tem muita reputação)</li>
                        </ul>
                    </p>
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default SugestoesPage;