import React from 'react';

import styles from './header.css';

class WeddingHeader extends React.Component {

    render() {
        return <div>
            <img className={styles.banner} src="/assets/banner1.png" />
        </div>;
    }
}

export default WeddingHeader;