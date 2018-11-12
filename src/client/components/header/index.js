import React from 'react';

import Languages from '../languages';

import styles from './header.css';

class WeddingHeader extends React.Component {

    render() {
        return <div className={styles.header}>
            <img className={styles.banner} src="/assets/banner.jpg" />
            <Languages setLanguage={this.props.setLanguage} />
        </div>;
    }
}

export default WeddingHeader;