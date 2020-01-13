import React , { Component} from 'react';
import {
    TabWrapper,
    CountCircle,
}from './styles';
import {
    TAB_ITEMS
} from '../../../../../constants'
export default class TabLayout extends Component {
    render(){
        
        return(
            <TabWrapper>
                <ul>
                    {TAB_ITEMS.map((item, index) => (
                        <li key={index}>
                            {index=== 1 ?  
                            <span className='tabItem active'>{item}
                                <CountCircle>
                                    null
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