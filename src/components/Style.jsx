import styled from "styled-components";

export const Container = styled.div`
display: grid;
justify-content: center;
align-content: center;
width: 400px;
margin: 100px auto;
grid-template-columns: repeat(4, 100px);
grid-template-rows: minmax(120px, auto) repeat(5, 100px);
box-shadow: 4px -4px 10px #fff, -4px 4px 10px #fff;
border-radius: 10px;
`;
export const Button = styled.button`
border: 2px solid #fff;
padding: 10px 10px;
background: transparent;
color: #fff;
transition: all 0.2s ease-out;
position: fixed;
left: 45%;
margin: 30px auto;
font-size: 16px;
text-transform: uppercase;
border-radius: 10px 0 10px 0;
transform: scale(1);
&:active{
    transform: scale(1.1);
    border-radius: 0 10px 0 10px;
}
`;


export const Screen = styled.div`
grid-column: 1 / -1;
background-color: rgba(255, 255, 255, 0.3);
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 10px;
word-wrap: break-word;
word-break: break-all;
text-align: right;
border-top-left-radius: 10px ;
border-top-right-radius: 10px ;
`;

export const Previous = styled.div`
color: rgba(255, 255, 255,75);
font-size: 1.2rem;

`;

export const Current = styled.div`
color: #fff;
font-size: 2.7rem;

`;

export const Button2 = styled.button`
cursor: pointer;
font-size: 1.5rem;
border: 1px solid #fff;
color: #fff;
outline: none;
background: rgba(255, 255, 255, 0.1);
transition: all 0.2s ease-out;
&:hover {
    background: rgba(255, 255, 255, 0.9);
    color: #bc1888;
    box-shadow: 3px 3px 8px #fff, -3px -3px 8px #fff;
    text-shadow: 1px 1px 3px #bc1888;
}
${({gridSpan})=> gridSpan && `background-color: red;grid-column: span ${gridSpan}`}
${({operation})=> operation && `background-color: skyblue;`}
${({control})=> control && `background-color: rgba(202, 95, 95, 0.568);`}
${({equals})=> equals && `border-bottom-right-radius: 10px; background-color: skyblue; grid-column: span ${equals}`}
${({period})=> period && `border-bottom-left-radius: 10px; background-color: rgba(202, 95, 95, 0.568);`}

`;
