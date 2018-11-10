import React from 'react';

import styles from './gang-madrinhal.css';

class MartaText extends React.Component {

    render() {
        return <div className={styles.description}>
            <h3>Marta</h3>
            <p>Lutadora, companheira.</p>
            <img className={styles.imageSmall} src="/assets/marta.jpg" />
        </div>
    }
}

export default MartaText;