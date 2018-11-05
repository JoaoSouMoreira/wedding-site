import React from 'react';

import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import baseStyles from '../home/home.css';
import styles from './gang-madrinhal.css';

class GangMadrinhalPage extends React.Component {

    descriptions = [];

    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: null
        };

        this.descriptions = [
            { title: 'Raquel Castanho', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac porta leo. Suspendisse quis dignissim tellus. Donec non metus a tellus lacinia blandit id ac ex. Donec commodo orci tortor, at vulputate sapien commodo ut. Curabitur egestas ante sed auctor pulvinar. Mauris orci felis, pellentesque et augue eu, molestie consectetur leo. Proin ac suscipit est. In hac habitasse platea dictumst. Mauris vel condimentum odio. Phasellus tempus metus metus, non ullamcorper urna tempus vitae. Curabitur in posuere arcu, eget tempor sem.'},
            { title: 'Sofia Cunha', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac porta leo. Suspendisse quis dignissim tellus. Donec non metus a tellus lacinia blandit id ac ex. Donec commodo orci tortor, at vulputate sapien commodo ut. Curabitur egestas ante sed auctor pulvinar. Mauris orci felis, pellentesque et augue eu, molestie consectetur leo. Proin ac suscipit est. In hac habitasse platea dictumst. Mauris vel condimentum odio. Phasellus tempus metus metus, non ullamcorper urna tempus vitae. Curabitur in posuere arcu, eget tempor sem.'},
            { title: 'Sílvia Lopes', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac porta leo. Suspendisse quis dignissim tellus. Donec non metus a tellus lacinia blandit id ac ex. Donec commodo orci tortor, at vulputate sapien commodo ut. Curabitur egestas ante sed auctor pulvinar. Mauris orci felis, pellentesque et augue eu, molestie consectetur leo. Proin ac suscipit est. In hac habitasse platea dictumst. Mauris vel condimentum odio. Phasellus tempus metus metus, non ullamcorper urna tempus vitae. Curabitur in posuere arcu, eget tempor sem.'},
            { title: 'Marta Mourāo', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac porta leo. Suspendisse quis dignissim tellus. Donec non metus a tellus lacinia blandit id ac ex. Donec commodo orci tortor, at vulputate sapien commodo ut. Curabitur egestas ante sed auctor pulvinar. Mauris orci felis, pellentesque et augue eu, molestie consectetur leo. Proin ac suscipit est. In hac habitasse platea dictumst. Mauris vel condimentum odio. Phasellus tempus metus metus, non ullamcorper urna tempus vitae. Curabitur in posuere arcu, eget tempor sem.'},
        ];
    }

    getPhotoElements() {
        return this.descriptions.map((description, index) => {
            const classes = [styles.image];
            if (this.state.selectedIndex !== null && index !== this.state.selectedIndex)
                classes.push(styles.disabled)

            const path = `/assets/madrinha${index + 1}.jpg`;
            return <a key={index} onClick={(event) => this.setSelectedIndex(index, event)} href="#"><img draggable="false" className={classes.join(' ')} alt="Madrinha 1" src={path} /></a>
        });
    }

    setSelectedIndex(index, e) {
        e.preventDefault();
        let selectedIndex = index !== null ? index : null;
        if (selectedIndex !== null && selectedIndex === this.state.selectedIndex)
            selectedIndex = null;

        this.setState({ selectedIndex });
    }

    render() {
        const { selectedIndex } = this.state;
        const descriptionElement = selectedIndex !== null ? 
            <div className={styles.description}>
                <h3>{this.descriptions[selectedIndex].title}</h3>
                <p>{this.descriptions[selectedIndex].text}</p>
            </div> :
            <div className={styles.description}></div>;

        return <div className={baseStyles.main}>
            <WeddingHeader></WeddingHeader>
            <div className={baseStyles.container}>
                <NavigationBar></NavigationBar>
                <div className={styles.content}>
                    <div className={styles.photos}>
                        {this.getPhotoElements()}
                    </div>
                    {descriptionElement}
                </div>
            </div>
            <WeddingFooter></WeddingFooter>
        </div>;
    }
}

export default GangMadrinhalPage;