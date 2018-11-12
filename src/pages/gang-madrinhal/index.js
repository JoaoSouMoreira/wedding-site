import React from 'react';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';
import MartaText from './marta';
import RaquelText from './raquel';
import SilviaText from './silvia';
import SofiaText from './sofia';

import baseStyles from '../home/home.css';
import styles from './gang-madrinhal.css';

class GangMadrinhalPage extends BasePage {

    descriptions = [];

    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: null
        };

        this.components = [RaquelText, SofiaText, SilviaText, MartaText];
    }

    getPhotoElements() {
        return this.components.map((component, index) => {
            const classes = [styles.image];
            if (this.state.selectedIndex !== null && index !== this.state.selectedIndex)
                classes.push(styles.disabled)

            const path = `/assets/madrinha${index + 1}.jpg`;
            return <a key={index} onClick={(event) => this.setSelectedIndex(index, event)} href="#"><img draggable="false" className={classes.join(' ')} alt="Madrinha 1" src={path} /></a>
        });
    }

    setSelectedIndex(index, e) {
        e.preventDefault();
        let selectedIndex = index !== null ? index : null;
        if (selectedIndex !== null && selectedIndex === this.state.selectedIndex)
            selectedIndex = null;

        this.setState({ selectedIndex });
    }

    render() {
        const { selectedIndex } = this.state;
        const descriptionElement = selectedIndex !== null ? 
            React.createElement(this.components[selectedIndex], {}) :
            <div className={styles.description}></div>;

        return <div className={baseStyles.main}>
            <WeddingHeader  setLanguage={this.setLanguage.bind(this)}></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar></NavigationBar>
                <div className={styles.content}>
                    <div className={styles.photos}>
                        {this.getPhotoElements()}
                    </div>
                    {descriptionElement}
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default GangMadrinhalPage;