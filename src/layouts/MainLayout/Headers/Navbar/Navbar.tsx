import React from 'react';
import * as Styled from './Navbar.styled';
import { Link } from 'react-router-dom';
import { items } from './Navbar.items';

const Navbar: React.FC = () => {
    return (
        <>
            <Styled.NavbarContainer>
                <Styled.NavbarFlexbox>
                    <Styled.Logo>
                        <Link to="/">APHROMAS</Link>
                    </Styled.Logo>
                    <Styled.MenuFrame>
                        <Styled.NavbarComponent
                            mode='horizontal'
                            items={items}
                        />
                    </Styled.MenuFrame>
                </Styled.NavbarFlexbox>
            </Styled.NavbarContainer>
        </>
    )
};

export default Navbar;