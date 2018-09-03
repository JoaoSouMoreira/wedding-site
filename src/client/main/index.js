import React from 'react';
import { hot } from 'react-hot-loader';

import styles from './main.css';

class Main extends React.Component {

    render() {
        return <div className={styles.container}>Hello World!!</div>;
    }
}

export default hot(module)(Main);