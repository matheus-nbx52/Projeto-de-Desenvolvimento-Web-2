import styled from 'styled-components'



export const Container = styled.div`
position: fixed;
z-index: 2;
top:0;
bottom: 0;
background-color: white;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
transform: scale(2);

span{
    width: 50px;
    height: 50px;
    border:4px solid gray;
    border-top-color: black;
    border-radius: 50%;
    animation: rotate 2s infinite;

}
@keyframes rotate {
    to{
        transform: rotate(5turn);
    }
    
}
`
