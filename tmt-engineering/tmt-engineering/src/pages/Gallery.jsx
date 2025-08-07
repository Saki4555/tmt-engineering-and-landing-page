import { Helmet } from "react-helmet-async";
import GalleryHero from "../components/gallery/GalleryHero";
import TMTGallery from "../components/gallery/TMTGallery";


const Gallery = () => {
    return (
       <><Helmet>
            <title>Gallery | TMT-Group</title>
        </Helmet>
       <GalleryHero />
       <TMTGallery /></>
    );
};

export default Gallery;