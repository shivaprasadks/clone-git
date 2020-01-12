import React , { Component} from 'react';
import {
    TabWrapper,
    CountCircle,
}from './styles';

export default class TabLayout extends Component {
    render(){
        const TAB_ITEMS = ['Overview', 'Repositories', 'Projects', 'Packages', 'Stars', 'Followers', 'Following'];
        return(
            <TabWrapper>
                <ul>
                    {TAB_ITEMS.map((item, index) => (
                        <li key={index}>
                            {index=== 1 ?  
                            <span className='tabItem active'>{item}
                                <CountCircle>
                                    26
                                </CountCircle>
                            </span> :
                            <span className='tabItem'>{item}</span>}
                              
                        </li>
                    ))}

                </ul>
            </TabWrapper>
        );
    }
}