import React from 'react';
import styled from 'styled-components';

export const TodoListStyled = styled.div`
    border: 1px solid #f09;
    width: fit-content;
    border-radius: 10px;
    padding: 2px;

    .list-header{
        border-bottom: 1px solid darkgray;
        color: #ededed;
        font-family: 'Poppins', sans-serif;
        padding-bottom: 5px;
        padding: 10px;
        width: 300px;
        display: flex;
        align-items: flex-start;
    }
    .list-desc{
        width: 60%;
    }
    .list-desc h2{
        font-weight: 400;
    }
    .extra-border{
        border-radius: 8px;
        border: 1px solid #dbdbdb;
    }
    .list-todos{
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .controls{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 38%;
    }
`