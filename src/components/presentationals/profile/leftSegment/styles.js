import styled from 'styled-components';

export const ContentWrapper = styled.div`
    margin : 10px;
    max-width: 300px;
`;
export const ImageWrapper = styled.div` 
    img {
        width :300px;
        border-radius: 5px;
    }
`;

export const NameEmailWrapper = styled.div`
    .username {
        font-size : 18px;
        font-weight: 900;
    }
    .emailID {
        font-size :16px;
        font-weight: 200;
    }
`;

export const BioWrapper = styled.div`
    padding : 10px 0;
    border-bottom : solid 1px #dfdfdfe3;
    font-size :14px;

    .editBio {
        width: 100%;
        margin: 10px 0;
        height: 25px;
    }
`;

export const DetailsWrapper = styled.div`
    font-size :14px;
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