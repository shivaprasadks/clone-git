import React , { Component} from 'react';
import {
    TabWrapper,
}from './styles';

export default class TabLayout extends Component {
    render(){
        const TAB_ITEMS = ['Overview', 'Repositories', 'Projects', 'Packages', 'Stars', 'Followers', 'Following'];
        return(
            <TabWrapper>
                <ul>
                    {TAB_ITEMS.map((item, index) => (
                        <li id={index}>
                            {index=== 1 ?  
                            <span className='tabItem active'>{item}</span> :
                            <span className='tabItem'>{item}</span>}
                              
                        </li>
                    ))}

                </ul>
            </TabWrapper>
        );
    }
}