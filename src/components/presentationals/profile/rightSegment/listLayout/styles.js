import styled from 'styled-components';

export const ListContainer =styled.div`
    width: 100%;
    
    a {
        color: #0366d6;
        text-decoration: none;
    }
    .title{
        font-weight: 600;
        margin: 8px 0;
        font-size: 20px;
    }
    .subTitle{
        margin: 8px 0;
        color: #586069;
    }
`;

export const ItemWrapper = styled.div`
    padding: 24px 0;
    border-bottom: 1px solid #e1e4e8
`;

export const FooterItems = styled.div`
    span {
        font-size: 12px;
        color: #586069;
        margin-right: 20px;
    }
   
`;

export const RoundDot = styled.span`
    margin-right: 0px !important;
    background-color: #f1e05a;
    position: relative;
    top: 1px;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 5px;
`;