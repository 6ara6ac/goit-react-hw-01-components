import styled from "styled-components";

export const FriensList = styled.ul`
display:grid;
justify-content: center;
margin-top:20px;
gap:8px;
`

export const FriendsItem=styled.li`
border: 1px solid black
width: 150px;
display: flex;
justify-content: space-around;
align-items: center;
gap:8px;
padding: 10px
background-color: white;
border-radius: 20px
`

export const Status=styled.span`
width:15px;
height:15px;
border-radius: 100px;

background-color:${friends=> {
    switch (friends.isOnline){
        case true:
        return 'green';
        case false:
        return 'red';
    }
}};
`