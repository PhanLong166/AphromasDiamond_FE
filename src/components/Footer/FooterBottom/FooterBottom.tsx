import * as Styled from './FooterBottom.styled'

const FooterBottom = () => {
    return (
        <>
            <Styled.BottomContainer>
                <Styled.BottomFlexbox>
                    <Styled.LogoName>
                        Aphromas Diamond
                    </Styled.LogoName>
                    <Styled.PolicyArea>
                        <Styled.PolicyElements>Terms & Conditions</Styled.PolicyElements>
                        <Styled.PolicyElements>Privacy Policy</Styled.PolicyElements>
                        <Styled.PolicyElements>Accessibility</Styled.PolicyElements>
                    </Styled.PolicyArea>
                </Styled.BottomFlexbox>
            </Styled.BottomContainer>
            <Styled.CopyrightFooter>
                Copyright © 2024
            </Styled.CopyrightFooter>
        </>
    );
}

export default FooterBottom;