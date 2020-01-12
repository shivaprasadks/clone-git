import styled from 'styled-components';
import { device} from '../../../../../constants/devices'
export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: solid 1px #dfdfdfdf;   

    // Switch to rows on large devices
    @media ${device.tablet} {
      flex-direction: row;
    }

`;

export const SearchWrapper = styled.div`
    padding : 10px 0;
    
    .searcBar{
        min-width: 340px;
        padding: 6px 8px;
        font-size: 16px;
        line-height: 20px;
        color: #24292e;
        vertical-align: middle;
        background-color: #fff;
        background-position: right 8px center;
        border: 1px solid #d1d5da;
        border-radius: 3px;
        outline: none;
        box-shadow: inset 0 1px 2px rgba(27,31,35,.075);

        &:focus {
            border-color: #2188ff;
            outline: none;
            box-shadow: inset 0 1px 2px rgba(27,31,35,.075), 0 0 0 0.2em rgba(3,102,214,.3);
        }

        
    }
    
`;

export const SelectFilterWrapper = styled.div`

    
    .select-list {
        width: 100px;
        height: auto;
        margin: 10px;
        font-size: 12px;
        border: 1px solid #d1d5da;
        border-radius: 3px;

    }
    .select-menu-item{
    }

    button {
        color: #fff;
        background-color: #28a745;
        background-image: linear-gradient(-180deg,#34d058,#28a745 90%);
        vertical-align: text-top;
        .octicon {
            vertical-align: text-top;
            padding: 0 5px;
        }
    }
    .primary-btn {
        position: relative;
        display: inline-block;
        padding: 6px 12px;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        background-repeat: repeat-x;
        background-position: -1px -1px;
        background-size: 110% 110%;
        border: 1px solid rgba(27,31,35,.2);
        border-radius: .25em;
        -webkit-appearance: none;
    }
`;