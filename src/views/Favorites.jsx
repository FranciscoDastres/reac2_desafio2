import { useContext } from 'react';
import { PhotosContext } from '../context/PhotosContext';
import Badge from 'react-bootstrap/Badge';

const Favorites = () => {
  const { photos } = useContext(PhotosContext);

  const likedPhotos = photos.filter(photo => photo.isFavorite);

  return (
    <div className="gallery grid-columns-5 p-3">
      {likedPhotos.map(photo => (
        <div className="photo-container" key={photo.id}>
          <div
            className="photo"
            style={{
              backgroundImage: `url(${photo.src.large})`,
              display: 'flex',
              flexDirection: 'column', // Establece la dirección del eje principal como columna
              justifyContent: 'flex-end', // Alinea los elementos al final del eje principal (abajo)
            }}
          >
            <section>
              <p>{photo.alt}</p>
              <h6>
                <Badge bg="dark">{photo.photographer}</Badge>
              </h6>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;