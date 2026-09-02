import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #343a40; color: white; text-align: center; padding: 35px 20px;`;
const Title = styled.h1` margin-bottom: 10px;`;

function Header() {

    return (
        <header>
            <h1>Booky</h1>
            <p> Discover your next favorite book ✨</p>
        </header>
    );
}

export default Header;
