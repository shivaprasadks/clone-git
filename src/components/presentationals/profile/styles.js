import styled from 'styled-components';
import { device } from 'app/constants/devices';

export const WindowContainer = styled.div`
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    margin :  24px auto;

    padding-right: 0 16px!important;

    // Switch to rows on large devices
    @media ${device.tablet} {
      flex-direction: row;
    }
`;