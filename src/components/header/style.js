import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: darkgray;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    border: 3px solid blue;

    img {
        &:hover {
            cursor: pointer;
        }
    }
`
