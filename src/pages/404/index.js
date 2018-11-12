import React from 'react';

import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import strings from '../../client/localizations';
import baseStyles from '../home/home.css';

class NotFoundPage extends React.Component {

    render() {
        return <div className={baseStyles.main}>
            <WeddingHeader  setLanguage={this.setLanguage.bind(this)}></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar></NavigationBar>
                <div className={baseStyles.content}>
                    <h1>{strings.notfound}</h1>
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default NotFoundPage;