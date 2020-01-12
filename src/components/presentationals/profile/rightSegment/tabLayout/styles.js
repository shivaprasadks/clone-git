import styled from 'styled-components';

export const TabWrapper = styled.div`
    font-size: 14px;
    cursor: pointer;
    width: 740px;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        border-bottom: solid 1px #dfdfdfdf; 
        li {
           
            float: left;
            &:hover{
                border-bottom: 2px solid #aaa;
            }
        }
        li .tabItem {
            display: block;
            text-align: center;
            padding: 10px 0;
            margin : 0 16px;
            text-decoration: none;
            color: #586069;
           
        }
       
        li .active {
            font-weight: 600;
            color: #24292e;
            border-bottom: 2px solid #e36209;
            &:hover{
                border-bottom: 2px solid #e36209;
            }
        }
    }
    
`;