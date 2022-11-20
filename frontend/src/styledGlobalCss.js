import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
::-webkit-scrollbar{
    width: 3px;
}
::-webkit-scrollbar-track{
    background-color: #f1f1f1;
}
::-webkit-scrollbar-thumb{
    background-color: rgb(179, 179, 179);
}
`;
