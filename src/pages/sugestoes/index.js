import React from 'react';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import strings from '../../client/localizations';
import baseStyles from '../home/home.css';

class SugestoesPage extends BasePage {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader  setLanguage={this.setLanguage.bind(this)}></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar path={this.props.location.pathname}></NavigationBar>
                <div className={baseStyles.content}>
                    <h2>{strings.sugestoes1}</h2>
                    <p>{strings.sugestoes2}</p>
                    <p>{strings.sugestoes3}</p>
                    <p>{strings.sugestoes4}</p>
                    <p>
                        {strings.sugestoes5}
                        <ul>
                            <li>
                                <a href="http://www.spotazores.com/" target="_blank">SpotAzores</a>
                                <ul>
                                    <li>{strings.sugestoes6}</li>
                                    <li>{strings.sugestoes7}</li>
                                    <li>{strings.sugestoes8}</li>
                                    <li>{strings.sugestoes9}</li>
                                </ul>
                            </li>
                            <li>
                                <a href="http://walkmeportugal.com/en/azores/trails-list/" target="_blank">Walk Me</a>
                                <ul><li>{strings.sugestoes10}</li></ul>
                            </li>
                            <li>
                                Ferraria - <a href="https://play.google.com/store/apps/details?id=kruk.azores.hotsprings.ferraria&hl=en" target="_blank">Android</a> {strings.ou} <a href="https://itunes.apple.com/pt/app/ferraria-hot-springs/id1243807675?l=en&mt=8" target="_blank">iOS</a>
                                <ul><li>{strings.sugestoes12}</li></ul>
                            </li>
                        </ul>
                    </p>
                    <p>
                        {strings.sugestoes13}
                        <ul>
                            <li>{strings.sugestoes14}</li>
                            <li>{strings.sugestoes15}</li>
                            <li>{strings.sugestoes16}</li>
                            <li>{strings.sugestoes17}</li>
                            <li>{strings.sugestoes18}</li>
                            <li>{strings.sugestoes19}</li>
                            <li>{strings.sugestoes20}</li>
                        </ul>
                    </p>
                    <p></p>
                    <p>
                        <b>{strings.DIA} 1: Ponta Delgada</b> {strings.sugestoes21}
                        <ul>
                            <li>{strings.sugestoes22}</li>
                            <li>{strings.sugestoes23}</li>
                            <li>{strings.sugestoes24}</li>
                            <li>{strings.sugestoes25}</li>
                            <li>{strings.sugestoes26}</li>
                            <li>{strings.sugestoes27}</li>
                            <li><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g189135-d12663995-Reviews-Cafe_Central_Ponta_Delgada-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">Café Central</a> {strings.sugestoes28}</li>
                            <li><a href="https://www.tripadvisor.pt/Attraction_Review-g189135-d8515271-Reviews-Louvre_Michaelense-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">Louvre Micaelense</a></li>
                            <li>{strings.sugestoes29} <a href="https://www.tripadvisor.pt/Restaurant_Review-g189135-d6696858-Reviews-A_Tasca-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">“A Tasca”</a>. {strings.sugestoes30}</li>
                        </ul>
                    </p>
                    <p>
                        <b>{strings.DIA} 2: Sete Cidades</b>
                        <ul>
                            <li>{strings.sugestoes31}</li>
                            <li>{strings.sugestoes32}</li>
                            <li>{strings.sugestoes33}</li>
                            <li>{strings.sugestoes34}</li>
                            <li>{strings.sugestoes35}</li>
                            <li>{strings.sugestoes36}</li>
                            <li>{strings.sugestoes37}</li>
                            <li>{strings.sugestoes38}</li>
                            <li>{strings.sugestoes39}</li>
                            <li>{strings.sugestoes40}</li>
                        </ul>
                    </p>
                    <p>
                        <b>{strings.DIA} 3: Ribeira Grande & Lagoa do Fogo</b> {strings.sugestoes41}
                        <ul>
                            <li>{strings.sugestoes42}</li>
                            <li>{strings.sugestoes43}</li>
                            <li>{strings.sugestoes44}</li>
                            <li>{strings.sugestoes45}</li>
                            <li>{strings.sugestoes46} <a href="https://www.tripadvisor.pt/Restaurant_Review-g616221-d4025720-Reviews-Tukatula_Bar-Ribeira_Grande_Sao_Miguel_Azores.html" target="_blank">Bar Tuká Tulá</a></li>
                            <li>{strings.sugestoes47}</li>
                            <li>{strings.sugestoes48}</li>
                            <li>{strings.sugestoes49}</li>
                            <li><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g616221-d1809565-Reviews-Alabote-Ribeira_Grande_Sao_Miguel_Azores.html" target="_blank">{strings.sugestoes50} Alabote</a></li>
                            <li>{strings.sugestoes51}</li>
                            <li>{strings.sugestoes52}</li>
                        </ul>
                    </p>
                    <p>
                        <b>{strings.DIA} 4: Furnas</b>
                        <ul>
                            <li>{strings.sugestoes53}</li>
                            <li>{strings.sugestoes54}</li>
                            <li>{strings.sugestoes55}</li>
                            <li>{strings.sugestoes56}</li>
                            <li>{strings.sugestoes57}</li>
                            <li>Bolos Levedos - Gloria Moniz</li>
                            <li><a href="http://www.pocadadonabeija.com/" target="_blank">{strings.sugestoes58}</a> – {strings.sugestoes59}</li>
                            <li>{strings.sugestoes60}</li>
                            <li>{strings.sugestoes61}</li>
                            <li>{strings.sugestoes62}</li>
                            <li>{strings.sugestoes63}</li>
                        </ul>
                    </p>
                    <p>
                        <b>{strings.DIA} 5: Vila Franca do Campo</b>
                        <ul>
                            <li><a href="http://cnvfc.net/cruzeiro/" target="_blank">{strings.sugestoes64}</a> – {strings.sugestoes65}</li>
                            <li>{strings.sugestoes66}</li>
                            <li>{strings.sugestoes67}</li>
                            <li>{strings.sugestoes68}</li>
                            <li>{strings.sugestoes69}</li>
                            <li>{strings.sugestoes70} <a href="https://www.tripadvisor.pt/Restaurant_Review-g1900300-d3519463-Reviews-Bar_Caloura-Lagoa_Sao_Miguel_Azores.html" target="_blank">bar Caloura</a>)</li>
                        </ul>
                    </p>
                    <p>
                        <b>{strings.sugestoes71}</b>
                        <ul>
                            <li>{strings.sugestoes72}</li>
                            <li><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g189135-d1239140-Reviews-Cais_20-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">Cais 20</a> {strings.sugestoes73}</li>
                            <li><a href="https://www.tripadvisor.co.uk/Attraction_Review-g189135-d3610253-Reviews-Arco_8-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">Arco 8</a> {strings.sugestoes74}</li>
                            <li><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g189135-d2723664-Reviews-Beach_Bar_Grill-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">Beach Bar & Grill</a> {strings.sugestoes75}</li>
                            <li><a href="https://www.tripadvisor.co.uk/Attraction_Review-g189135-d7592378-Reviews-Arruda_Pineapple_Plantation-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">{strings.sugestoes76}</a></li>
                            <li><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g189135-d7898494-Reviews-Quinta_dos_Acores-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">Quinta dos Açores</a> {strings.sugestoes77}</li>
                            <li><a href="https://www.tripadvisor.com/Restaurant_Review-g189135-d6425672-Reviews-Casa_Do_Bife_O_Galego-Ponta_Delgada_Sao_Miguel_Azores.html" target="_blank">{strings.sugestoes78}</a>{strings.sugestoes79}</li>
                            <li><a href="http://www.restauranteaasm.com/pt/" target="_blank">{strings.sugestoes80}</a> {strings.sugestoes81}</li>
                        </ul>
                    </p>
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default SugestoesPage;