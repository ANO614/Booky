import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #343a40; color: white; text-align: center; padding: 35px 20px;`;
const Title = styled.h1` margin-bottom: 10px;`;

function Header() {

    return (  
        <StyledHeader>
            <Title>Booky</Title>
            <p> Discover your next favorite book ✨</p>
        </StyledHeader>
    );
}

export default Header;
