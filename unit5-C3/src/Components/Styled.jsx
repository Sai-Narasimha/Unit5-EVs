import styled from 'styled-components'
export const Nav = styled.div`
    width : 100%;
    height : 40px;
    display : flex;
    gap : 20px;
    border : 1px solid black;
    

`
export const Cards = styled.div`
    width : 100%;
    display : grid;
    grid-gap : 10px;
    grid-template-columns : repeat(5,1fr);
    &>div{
        height : 200px;
        /* text-align : center; */
        display : inline-block;
        
        border:1px solid blue;
        &>img{
            width : 95%;
            height:150px;
            padding:5px
        }
    }
`