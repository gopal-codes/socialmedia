import styled from 'styled-components';

export const Wrapper = styled.section`
    flex:5;
    padding-top:20px;
    padding-bottom:20px;
    padding-left:50px;
    padding-right:50px;

    @media only screen and (max-width: 1250px) and (min-width: 950px) {
        padding-right:0px;
        padding-left:30px;
      };
    @media only screen and (max-width: 600px) {
        padding-left:20px;
        padding-right:20px;
      };
      @media only screen and (max-width: 500px) {
        padding-left:0px;
        padding-right:0px;
      };
`;
