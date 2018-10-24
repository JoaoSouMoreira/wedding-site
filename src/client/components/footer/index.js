import React from 'react';

import styles from './footer.css';

class WeddingFooter extends React.Component {

    render() {
        return <div>
            <p className={styles.copyright}>© 2018 João Moreira. All rights reserved.</p>
        </div>;
    }
}

export default WeddingFooter;