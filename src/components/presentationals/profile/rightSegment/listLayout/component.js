import React , {Component} from 'react';
import {
    ListContainer,
    ItemWrapper,
    FooterItems,
    RoundDot,
} from './styles';
import {
    MitSVG
} from '../svg';
import { repoListParse } from 'app/utils/repoParser';
export default class ListLayout extends Component {
    componentDidMount = () => {
        // this.props.fetchRepoList();
        // repoListParse();
    }
    render(){
        const data =  repoListParse();
        return(
            <ListContainer>
                {data.map((item, index)=>(
                    <ItemWrapper
                        key={index}>
                        <div className='title'>
                            <a href=''>
                            {item.projectName}
                            </a>
                        </div>
                        <div className='subTitle'>
                            {item.description}
                        </div>
                        <FooterItems>
                            
                            {item.language ? 
                            <span>
                                <RoundDot/> {item.language}
                            </span>
                            : item.language }
                            
                            {item.license ? 
                                <span>
                                    <MitSVG /> {item.license.name}
                                </span>
                                : item.license }
                               
                            {item.updated_at  ? 
                            <span className='footerItem'>
                                 {item.updated_at}
                            </span>
                            : item.updated_at }
                            
                        </FooterItems>
                    </ItemWrapper>
                ))}
                
            </ListContainer>
        );
    }
}