import React , {Component} from 'react';
import TabLayout from './tabLayout/component';
import SearchLayout from './searchLayout/component';
import { 
    RightSegmentContainer,
} from './styles';
import ListLayout from './listLayout/container';

export default class RightSegment extends Component {
    render(){
        return(
            <RightSegmentContainer>
                <TabLayout />
                <SearchLayout />
                <ListLayout />
            </RightSegmentContainer>
        );
    }
}