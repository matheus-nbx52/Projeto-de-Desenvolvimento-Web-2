import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFound = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .notfound{
        max-width: 767px;
        width: 100%;
        line-height: 1.4;
        text-align: center;
        padding: 15px;
    }
    h1{
        font-size: 186px;
        font-family: 'Kanit', sans-serif;
        color:#ff6f68;
        font-weight: 200;
        text-transform: uppercase;
    }
    p{
        font-family: 'Kanit', sans-serif;
        font-size: 16px;
        font-weight: 200;
        margin-top: 0px;
        margin-bottom: 25px;
        color:#ff6f68;
    }

    h2{
        font-family: 'Kanit', sans-serif;
        font-size: 33px;
        font-weight: 200;
        text-transform: uppercase;
        margin-top: 0px;
        margin-bottom: 25px;
        letter-spacing: 3px;
        color: white;
    }
`;

export const LinkStyle = styled(Link)`
color: #ff6f68;
list-style: none;
color: white;
`;
