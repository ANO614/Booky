import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const StyledHeader = styled.header`
    background-color: #343a40; color: white; text-align: center; padding: 35px 20px;`;
const Title = styled.h1` margin-bottom: 10px;`;

function Header() {

    const { theme } = useContext(ThemeContext);
    return (  
        <StyledHeader className={
                theme === "dark"
                    ? "dark-header"
                    : "light-header"
            }>
                
            <Title>Booky</Title>
            <p> Discover your next favorite book ✨</p>
        </StyledHeader>
    );
}

export default Header;
