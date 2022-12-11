import styled from "styled-components"

export const UserInfoContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: yellowgreen;
    border: solid 3px cyan;

    h1, h2, h3, h4, h5, p, a {
        align-self: flex-start;
        text-decoration: none;
    }

    .verRepo {
        color: blue;
        &:hover {
            cursor: pointer;
            color: gray;
        }
    }
    .remove {
        color: red;
        &:hover {
            cursor: pointer;
            color: gray;
        }
    }

`