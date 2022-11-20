import styled from 'styled-components';

export const Wrapper = styled.section`
    flex:3.5;
    height:85vh;
    padding-left:50px;
    padding-right:10px;
    padding-top:20px;
    padding-bottom:20px;
    position:sticky;
    top:50px;

    @media only screen and (max-width: 950px) {
        display:none;
      }
`;
