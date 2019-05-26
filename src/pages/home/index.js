import React from 'react';
import * as moment from 'moment';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import strings from '../../client/localizations';
import styles from './home.css';

class HomePage extends BasePage {

    constructor(props) {
        super(props);

        this.state = {
            photoNumber: Math.floor(Math.random() * 5) + 1,
        };
    }

    render() {
        return <div className={styles.main}>
            <WeddingHeader setLanguage={this.setLanguage.bind(this)}></WeddingHeader>
            <div className={styles.container}>
            <NavigationBar path={this.props.location.pathname}></NavigationBar>
                <div className={styles.content}>
                    <img className={styles.image} src={`/assets/done${this.state.photoNumber}.jpeg`} />
                    <p>{strings.homeTextDone}</p>
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default HomePage;
