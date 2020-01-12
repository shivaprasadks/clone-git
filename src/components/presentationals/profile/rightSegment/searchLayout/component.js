import React , {Component} from  'react';
import {
    SearchContainer,
    SearchWrapper,
    SelectFilterWrapper,
} from './styles';
import {
    BottonSVG
} from '../svg';

export default class SearchLayout extends Component {
    render(){
        const REPO_TYPE = ['All', 'Public', 'Private', 'Sources', 'Forks', 'Archived', 'Mirrors'];
        const LANGUAGE_TYPE = ['All', 'Javascript', 'Java', 'HTML'];
        return(
            <SearchContainer>
                <SearchWrapper>
                     <input 
                     className='searcBar' 
                     type='text' />
                </SearchWrapper>
                <SelectFilterWrapper>
                    <select className='select-list primary-btn'>
                        {REPO_TYPE.map((item,index)=>(
                             <option  
                                key={index}
                                className='select-menu-item' 
                                selected >{item}
                            </option>
                        ))}
                        {/* <option  className='select-menu-item' selected value="coconut">Coconut</option> */}
                     
                    </select>
                    <select className='select-list primary-btn'>
                        {LANGUAGE_TYPE.map((item,index)=>(
                             <option  
                                key={index}
                                className='select-menu-item' 
                                selected >{item}
                            </option>
                        ))}
                        {/* <option  className='select-menu-item' selected value="coconut">Coconut</option> */}
                     
                    </select>
                    <button className='primary-btn' >
                        <BottonSVG  />
                         <span> NEW </span>
                    </button>
                </SelectFilterWrapper>
            </SearchContainer>
        );
    }
}