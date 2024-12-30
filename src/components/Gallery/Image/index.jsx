import styled from "styled-components";
import ButtonIcon from "../../ButtonIcon";
import StyledTagButton from "../TagButton";

const StyledFigure = styled.figure`
    width: ${(props) =>
        (props.$isModal ? '100%' : props.$expanded ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3,
        h4,
        p {
            margin: 0;
            font-size: 16px;
        }
    }
`;

const StyledFooterFig = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledTagContainer = styled.div`
    position: absolute;
    top: 8px;
    left: 8px;
    z-index: 10;
`;

export default function Image({ photo, expanded = false, toTheRequestedZoom, whenSwitchingFavorite, isModal = false }) {
    let FavoriteIcon = "/icons/favorito.png";
    if (photo.favorite) {
        FavoriteIcon = "/icons/favorito-ativo.png";
    }

    return (
        <StyledFigure
            $expanded={expanded}
            $isModal={isModal}
            id={`photo-${photo.id}`}
        >
            <img src={photo.path} alt={photo.title} />
            <figcaption>
                <h3>{photo.title}</h3>
                <StyledTagContainer>
                    <StyledTagButton>{photo.tagName}</StyledTagButton>
                </StyledTagContainer>
                <StyledFooterFig>
                    <h4>{photo.path}</h4>
                    <ButtonIcon onClick={() => whenSwitchingFavorite(photo)}>
                        <img src={FavoriteIcon} alt="Ícone de Favorito" />
                    </ButtonIcon>
                    {!expanded && (
                        <ButtonIcon
                            aria-hidden={expanded}
                            onClick={() => toTheRequestedZoom(photo)}
                        >
                            <img src="/icons/expandir.png" alt="Ícone de expandir" />
                        </ButtonIcon>
                    )}
                </StyledFooterFig>
            </figcaption>
        </StyledFigure>
    );
}
