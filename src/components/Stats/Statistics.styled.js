import styled from "styled-components";

export const Section = styled.section`
margin-left:auto;
margin-right:auto;
margin-top: 20px;
background-color: white;
width: max-content; 
padding:15px;
border-radius:10px;
`

export const Title = styled.h2`
text-align:center
font-weight:700;
font-size:20px;
`

export const SectionList = styled.ul`
display:flex;
`

export const SectionItem = styled.li `
display: grid;
padding:8px;
background-color:${stats=> {
    switch (stats.id){
        case 'id-1':
        return 'orange';
        case 'id-2':
        return 'blue';
        case 'id-3':
        return 'green';
        case 'id-4':
        return 'teal';
        case 'id-5':
        return 'pink';
    }
} }
`

