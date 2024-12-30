import styled from "styled-components";
import StyledTitle from "../../Title";


import photos from "./fotos-populares.json"

const StyledPhotosColumn = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Image = styled.img`
    max-width: 212px;
    border-radius: 20px;
`;

const StyledButton = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

export default function Popular() {
    return (
        <section>
            <StyledTitle $props={"center"}>Populares</StyledTitle>
            <StyledPhotosColumn>
                {photos.map(photo => <Image  key={photo.id} src={photo.path} alt={photo.alt}/>)}
            </StyledPhotosColumn>
            <StyledButton>Ver mais</StyledButton>
        </section>
    )
}
