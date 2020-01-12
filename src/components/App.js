import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import ProfileView from './presentationals/profile/container'
import HeaderLayout from './presentationals/header/component';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HeaderLayout />
        <ProfileView />
      </Provider>
    )
  }
}
