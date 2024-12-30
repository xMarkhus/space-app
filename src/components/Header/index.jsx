import styled from "styled-components";
import TextField from "../TextFIeld";

const StyledHeader = styled.header`
    padding:60px 0;
    display: flex;
    align-items: center;
    justify-content:space-between;
    img {
        max-width: 212px;
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <img src="/images/logo.png" alt="Logo do Space App"/>
            <TextField />
        </StyledHeader>
    )
}
