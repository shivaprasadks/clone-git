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
        this.state = {
            repoType:  'All',
            language: 'All'
        }
    }

    searchItem = (e) => {
        // console.log(e.target.value)
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter') console.log(e.target.value)
    }
    updatedRepoType = (e) => {
        this.setState({
            ...this.state,
            repoType: e.target.value
        });
    }
    updatedLanguage = (e) => {
        this.setState({
            ...this.state,
            language: e.target.value
        });
    }
    componentDidUpdate = () =>{
        console.log(this.state);
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
                    <select value={this.state.repoType} 
                    onChange={this.updatedRepoType}
                    className='select-list primary-btn'>
                        {REPO_TYPE.map((item,index)=>(
                             <option  
                                key={index}
                                className='select-menu-item' 
                             >{item}
                            </option>
                        ))}
                     
                    </select>
                    <select value={this.state.language} 
                        onChange={this.updatedLanguage}
                        className='select-list primary-btn'>
                        {LANGUAGE_TYPE.map((item,index)=>(
                             <option  
                                key={index}
                                className='select-menu-item' >
                                {item}
                            </option>
                        ))}
                     
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