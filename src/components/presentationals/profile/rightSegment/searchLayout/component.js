import React , {Component} from  'react';
import {
    SearchContainer,
    SearchWrapper,
    SelectFilterWrapper,
} from './styles';
import {
    BottonSVG
} from 'app/constants/svg';
import {
    REPO_TYPE,
    LANGUAGE_TYPE
} from 'app/constants'

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
        this.props.searchItem(e.target.value);
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.props.searchItem(e.target.value, );
        } 
    }
    updatedRepoType = (e) => {
        this.setState({
            ...this.state,
            repoType: e.target.value
        });
        this.props.updateFilter({
            ...this.state,
            repoType: e.target.value
        });
    }
    updatedLanguage = (e) => {
        this.setState({
            ...this.state,
            language: e.target.value
        });
        this.props.updateFilter({
            ...this.state,
            language: e.target.value
        });
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
                                value={item.key}
                             >{item.lable}
                            </option>
                        ))}
                     
                    </select>
                    <select value={this.state.language} 
                        onChange={this.updatedLanguage}
                        className='select-list primary-btn'>
                        {LANGUAGE_TYPE.map((item,index)=>(
                             <option  
                                key={index}
                                className='select-menu-item'
                                value={item.key} >
                                {item.lable}
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