import React , {Component} from 'react';
import LeftSideView from './leftSegment/container';
import RightSegment from './rightSegment/container';
import {
    WindowContainer
}from './styles';

export default class ProfileView extends Component {
    render(){
        return(
        <WindowContainer>
            <LeftSideView />
            <RightSegment />
        </WindowContainer>)
    }
}