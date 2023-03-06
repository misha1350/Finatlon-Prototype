import { Container } from '@mui/system';
import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
    const Footer = styled.footer `
        width: 100%;
        background-color: grey;
        height: 100px;
    `;
    return (
        <Footer>
            <Container>
                <h3>Тут будет подвал</h3>
            </Container>
        </Footer>
    );
};
