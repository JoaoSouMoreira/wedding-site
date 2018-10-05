import React from 'react';

import styles from './header.css';

class WeddingHeader extends React.Component {

    render() {
        return <div>
            <h3 className={styles.subheader}>Casamento de</h3>
            <h1 className={styles.h1}>Isabel & Joāo </h1>
            <h5 className={styles.subheader}>Sāo Miguel, Açores</h5>
        </div>;
    }
}

export default WeddingHeader;