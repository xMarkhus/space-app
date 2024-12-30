import styled from "styled-components";
import StyledTitle from "../Title";
import Popular from "./Popular";
import Tags from "./Tags";
import Image from "./Image";
import TagsName from "./Tags/tags.json";

const GalleryContainer = styled.div`
    display: flex;
`;

const GallerySection = styled.section`
    flex-grow: 1;
`;

const ImagesContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`;

export default function Gallery({ photos = [], toTheSelectedPhoto, whenSwitchingFavorite }) {
    const getTagForPhoto = (tagId) => 
        TagsName.find((tag) => tag.id === tagId)?.title || "Sem tag";

    return (
        <>
            <Tags />
            <GalleryContainer>
                <GallerySection>
                    <StyledTitle>Navegue pela galeria</StyledTitle>
                    <ImagesContainer>
                        {photos.map((photo) => {
                            const tagName = getTagForPhoto(photo.tagId);
                            return (
                                <Image
                                    toTheRequestedZoom={toTheSelectedPhoto}
                                    whenSwitchingFavorite={whenSwitchingFavorite}
                                    key={photo.id}
                                    photo={{ ...photo, tagName }}
                                />
                            );
                        })}
                    </ImagesContainer>
                </GallerySection>
                <Popular />
            </GalleryContainer>
        </>
    );
}
