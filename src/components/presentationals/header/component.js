import React, {Component} from 'react';
import {
    HeaderWrapper,
    LogoPart
} from './styles';
import {
    LogoSvg,
} from 'app/constants/svg';

export default class HeaderLayout extends Component {
    render(){
        return(
            <HeaderWrapper>
                <LogoPart>
                    <LogoSvg />
                </LogoPart>
            </HeaderWrapper>
        );
    }
}