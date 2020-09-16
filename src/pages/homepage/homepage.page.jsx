import React from 'react';
import styled from 'styled-components';

import Directory from '../../components/menu/directory/menu-dirs.comp';

const HomePageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HomePage = () => (
    <HomePageStyled>
        <Directory />
    </HomePageStyled>
);

export default HomePage;