import styled from "styled-components";

export const LoaderItem = styled.div`
display: inline-block;
width: 60px;
height: 60px;

&:after{
    content: " ";
    display: block;
    width: 48px;
    height: 48px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #000 transparent #000 transparent;
    animation: dual-ring 1.3s linear infinite;
}

@keyframes dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;
