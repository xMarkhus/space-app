import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import bannerBackground from "./assets/banner.png"
import Gallery from "./components/Gallery";

import photos from "./fotos.json"
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";

const BackgroundGradient = styled.div`
  background: linear-gradient(
    174.61deg, 
    #041833 4.16%, 
    #04244F 48%, 
    #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const StyledAppContainer = styled.div`
  width: 1440px;
  margin:0 auto;
  max-width: 100%;
`;

const StyledMainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const GalleryContent = styled.section`
  display: flex;
  flex-direction:column;
  flex-grow: 1;
`;

export default function App() {
  const [photosGallery, setPhotosGallery] = useState(photos)
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const whenSwitchingFavorite = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite
      })
    }
    setPhotosGallery(photosGallery.map(photoGallery => {
      return {
        ...photoGallery,
        favorite: photoGallery.id === photo.id ? !photo.favorite : photoGallery.favorite
      }
    }))
  }

  return (
    <BackgroundGradient>
      <GlobalStyle />
      <StyledAppContainer>
        <Header />
        <StyledMainContainer>
          <Sidebar />
          <GalleryContent>
            <Banner
              text="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Gallery
              toTheSelectedPhoto={photo => setSelectedPhoto(photo)}
              whenSwitchingFavorite={whenSwitchingFavorite}
              photos={photosGallery}
            />
          </GalleryContent>
        </StyledMainContainer>
      </StyledAppContainer>
      <ModalZoom
        photo={selectedPhoto}
        whenClose={() => setSelectedPhoto(null)}
        whenSwitchingFavorite={whenSwitchingFavorite}
      />
    </BackgroundGradient>
  )
}
