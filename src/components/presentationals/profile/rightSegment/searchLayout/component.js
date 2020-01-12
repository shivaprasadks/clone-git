import React , {Component} from  'react';
import {
    SearchContainer,
    SearchWrapper,
    SelectFilterWrapper,
} from './styles';
import {
    BottonSVG
} from '../svg';
import {
    REPO_TYPE,
    LANGUAGE_TYPE
} from '../../../../../constants'

export default class SearchLayout extends Component {
    constructor(props){
        super(props);

    }

    searchItem = (e) => {
        // console.log(e.target.value)
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter') console.log(e.target.value)
    }
    render(){
        return(
            <SearchContainer>
                <SearchWrapper>
                     <input 
                     className='searcBar' 
                     onChange={this.searchItem}
                     onKeyPress={this.handleKeyPress}
                     placeholder='Find a Repository..'
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
                         <span> New </span>
                    </button>
                </SelectFilterWrapper>
            </SearchContainer>
        );
    }
}