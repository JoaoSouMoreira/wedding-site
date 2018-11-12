import React from 'react';

import strings from '../../localizations';
import styles from './footer.css';

class WeddingFooter extends React.Component {

    render() {
        return <div>
            <p className={styles.copyright}>© 2018 João Moreira. {strings.footer}</p>
        </div>;
    }
}

export default WeddingFooter;