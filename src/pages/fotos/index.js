import React from 'react';
import Gallery from 'react-grid-gallery';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import strings from '../../client/localizations';
import baseStyles from '../home/home.css';

class FotosPage extends BasePage {

    getImages() {
        const images = [];
        for (let i = 0; i < 12; i++) {
            images.push({
                src: '/assets/fotos' + (i + 1) + '.jpg',
                thumbnail: '/assets/fotos' + (i + 1) + '.jpg',
                thumbnailWidth: 320,
                thummbnailHeight: 174,
                isSelected: false,
            });
        }
        return images;
    }

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader  setLanguage={this.setLanguage.bind(this)}></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar path={this.props.location.pathname}></NavigationBar>
                <div className={baseStyles.content}>
                    <h2>
                        {strings.fotos2}
                        <a href="https://luisastarling.pixieset.com/casamentoisabelandjoo" target="_blank">{strings.fotos3}</a>
                    </h2>
                    <h2>{strings.fotos1}</h2>
                    <Gallery images={this.getImages()} />
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default FotosPage;
