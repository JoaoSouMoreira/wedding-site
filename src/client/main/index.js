import React from 'react';
import { hot } from 'react-hot-loader';
import * as moment from 'moment';

import NavigationBar from '../components/navbar'; 

import styles from './main.css';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            weddingDate: moment("2019-05-11T15:00:00.000"), 
            counter: '',
            photoNumber: Math.floor(Math.random() * 3) + 1,
        };

        this.getTimeLeft = this.getTimeLeft.bind(this);
    }
    
    componentDidMount() {
        setInterval(() => { 
            const counter = this.getTimeLeft()
            this.setState({ counter });
        }, 1000);
    }

    getTimeLeft() {
        console.log(`test`); 
        const days = this.state.weddingDate.diff(moment(), 'days');
        const hours = this.state.weddingDate.diff(moment(), 'hours');
        const minutes = this.state.weddingDate.diff(moment(), 'minutes');
        const seconds = this.state.weddingDate.diff(moment(), 'seconds');
        return `${days}d, ${hours}h, ${minutes}m, ${seconds}s`;
    }

    render() {
        return <div className={styles.container}>
            <NavigationBar></NavigationBar>
            <div className={styles.content}>
                <div>
                    <h3>Casamento de</h3>
                    <h1>Isabel & Joāo </h1>
                    <h5>Sāo Miguel, Açores</h5>
                </div>
                <img className={styles.image} src={`/assets/${this.state.photoNumber}.jpg`} />
                <p>Bem-vindo(s) á página oficial do nosso casamento.</p>
                <span>{ this.state.counter }</span>
            </div>
        </div>;
    }
}

export default hot(module)(Main);