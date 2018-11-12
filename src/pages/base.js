import React from 'react';

import strings from '../client/localizations';

class BasePage extends React.Component {

    setLanguage(language) {
        strings.setLanguage(language);
        console.log(strings.getLanguage());
        this.forceUpdate();
    }

    render() {
        return null;
    }
}

export default BasePage;