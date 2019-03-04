import React from 'react';
import axios from 'axios';

import BasePage from '../base';
import NavigationBar from '../../client/components/navbar';
import WeddingFooter from '../../client/components/footer';
import WeddingHeader from '../../client/components/header';

import strings from '../../client/localizations';
import baseStyles from '../home/home.css';
import styles from './styles.css';

class RSVPPage extends BasePage {

  constructor(props) {
    super(props)

    this.state = {
      formData: {
        name: '',
        reply: 'yes',
        observations: '',
      },
      isSubmitted: false,
      isLoading: false,
    }
  }

  onChange = (key, value) => {
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [key]: value,
      }
    }))
  }

  submit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const { formData } = this.state;
    const url = 'https://script.google.com/macros/s/AKfycby38WsNbJfwRoXlTth331cey5sX3AHFrxsekC_-cWYiUXwp0pDY/exec';
    const data = new FormData();
    for (const property in formData) {
      data.append(property, formData[property]);
    }
    const headers = {
      'Content-Type': 'text/plain;charset=utf-8',
    }

    axios({
      method: 'post',
      url,
      data,
      headers,
      maxRedirects: 0,
    }).then(() => {
      this.setState({ isSubmitted: true, isLoading: false });
    });
  }

  render() {
    const { formData, isLoading } = this.state;

    const form = (
      <form id="rsvp" onSubmit={this.submit}>
        <div className={styles.formSection}>
          <label className={styles.label} htmlFor="name">{strings.rsvp1}</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={event => this.onChange('name', event.target.value)}
            required
          />
        </div>
        <div className={styles.formSection}>
          <div>
            <label className={styles.label} htmlFor="reply-yes">{strings.rsvp2}</label>
            <input
              className={styles.radio}
              type="radio"
              name="reply"
              id="reply-yes"
              value="yes"
              checked={formData.reply === 'yes'}
              onChange={event => this.onChange('reply', event.target.value)}
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="reply-no">{strings.rsvp3}</label>
            <input
              className={styles.radio}
              type="radio"
              name="reply"
              id="reply-no"
              value="no"
              checked={formData.reply === 'no'}
              onChange={event => this.onChange('reply', event.target.value)}
            />
          </div>
        </div>
        <div className={styles.formSection}>
          <label className={styles.label} htmlFor="observations">{strings.rsvp4}</label>
          <br />
          <textarea
            className={styles.textarea}
            rows="5"
            name="observations"
            id="observations"
            value={formData.observations}
            onChange={event => this.onChange('observations', event.target.value)}
          />
        </div>
        {isLoading ? <img className={styles.loading} src="/assets/loading.gif" />
          : (
            <div className={styles.formSection}>
              <button className={styles.button} type="submit" id="submit-form">{strings.rsvp5}</button>
            </div>
          )
        }
      </form>
    );

    const success = <h1>{strings.rsvp6}</h1>

    return <div className={baseStyles.main}>
        <WeddingHeader setLanguage={this.setLanguage.bind(this)} />
        <div className={baseStyles.container}>
            <NavigationBar path={this.props.location.pathname} />
            <div className={baseStyles.content}>
                {this.state.isSubmitted ? success : form}
            </div>
        </div>
        <WeddingFooter />
      </div>;
  }
}

export default RSVPPage;
