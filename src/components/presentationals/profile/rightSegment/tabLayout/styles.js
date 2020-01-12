import styled from 'styled-components';

export const TabWrapper = styled.div`
    font-size: 14px;
    cursor: pointer;
    width: 800px;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    border-bottom: solid 1px #dfdfdfdf;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
           
            float: left;
            
        }
        li .tabItem {
            display: block;
            text-align: center;
            padding: 10px 0;
            margin : 0 16px;
            text-decoration: none;
            color: #586069;
            &:hover{
                border-bottom: 2px solid #aaa;
            }
           
        }
       
        li .active {
            font-weight: 600;
            color: #24292e;
            border-bottom: 1px solid #e36209;
            &:hover{
                border-bottom: 1px solid #e36209;
            }
        }
    }
    
`;

export const CountCircle = styled.span`
    margin-left: 5px;
    display: inline-block;
    padding: 2px 5px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    color: #586069;
    background-color: rgba(27,31,35,.08);
    border-radius: 20px;
`;