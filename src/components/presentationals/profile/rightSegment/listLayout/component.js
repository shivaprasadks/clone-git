import React , {Component} from 'react';
import {
    ListContainer,
} from './styles';

export default class ListLayout extends Component {
    componentDidMount = () => {
        this.props.fetchRepoList();
    }
    render(){
        return(
            <ListContainer>
                List Items
            </ListContainer>
        );
    }
}