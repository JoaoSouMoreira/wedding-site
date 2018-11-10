import React from 'react';

import styles from './gang-madrinhal.css';

class SilviaText extends React.Component {

    render() {
        return <div className={styles.description}>
            <h3>Sílvia</h3>
            <p>Doce, amiga, prestável.</p>
            <img className={styles.descriptionImage} src="/assets/silvia.jpg" />
        </div>
    }
}

export default SilviaText;