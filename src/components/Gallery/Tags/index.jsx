import styled from "styled-components"
import tags from "./tags.json"
import StyledTagButton from "../TagButton";

const StyledH3 = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;

const StyledTagsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 22px;
    margin-top: 26.56px;
`;

export default function Tags() {
    return (
        <StyledTagsContainer>
            <StyledH3>Busque por tags:</StyledH3>
            {tags.map(tag => <StyledTagButton key={tag.id}>{tag.title}</StyledTagButton>)}
        </StyledTagsContainer>
    )
}
