import React from 'react';

import strings from '../../localizations';
import styles from './languages.css';

class Languages extends React.Component {

    onLanguageClick(e) {
        e.preventDefault();
        const language = e.currentTarget.innerText.toLowerCase();
        if (language === strings.getLanguage())
            return;
            
        this.props.setLanguage(language);
        this.forceUpdate();
    }

    render() {
        const ptClasses = strings.getLanguage() === 'pt' ? [styles.language, styles.active] : [styles.language];
        const enClasses = strings.getLanguage() === 'en' ? [styles.language, styles.active] : [styles.language];

        return <div className={styles.languages}>
            <a href="#" className={ptClasses.join(' ')} onClick={this.onLanguageClick.bind(this)}>PT</a>
            <a href="#" className={enClasses.join(' ')} onClick={this.onLanguageClick.bind(this)}>EN</a>
        </div>;
    }
}

export default Languages;