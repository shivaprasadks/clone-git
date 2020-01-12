import styled from 'styled-components';

export const ContentWrapper = styled.div`
    margin : 10px;
    max-width: 300px;
`;
export const ImageWrapper = styled.div` 
    img {
        width :100%;
        border-radius: 5px;
    }
`;

export const NameEmailWrapper = styled.div`
    padding: 16px 0;
    .userName {
        font-size: 26px;
        line-height: 30px;
        font-weight: 600;
    }
    .emailID {
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 24px;
        color: #666;
    }
`;

export const BioWrapper = styled.div`
    padding : 10px 0;
    border-bottom : solid 1px #dfdfdfe3;
    font-size :14px;

    .editBio {
        width: 100%;
        margin: 10px 0;
        color: #24292e;
        background-color: #eff3f6;
        background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);
    }
    .btn {
        position: relative;
        display: inline-block;
        padding: 6px 12px;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-repeat: repeat-x;
        background-position: -1px -1px;
        background-size: 110% 110%;
        border: 1px solid rgba(27,31,35,.2);
        border-radius: .25em;
    }
`;

export const DetailsWrapper = styled.div`
    font-size :14px;
    color: #6a737d;
    ul {
        list-style: none;
        padding-left: 0px;

        li {
            margin: 5px 0;
            display: flex;

            .textPart {
                padding-left: 10px;
            }
        }
    }
`;