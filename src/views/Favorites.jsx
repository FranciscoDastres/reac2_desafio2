import { useContext } from 'react';
import { PhotosContext } from '../context/PhotosContext';

import Badge from 'react-bootstrap/Badge';

const Favorites = () => {
  const { photos } = useContext(PhotosContext);


  const likedPhotos = photos.filter(photo => photo.isFavorite);

  return (
    <div className="gallery grid-columns-5 p-3">
      {likedPhotos.map(photo => (
        <div
          className="photo"
          style={{
            backgroundImage: `url(${photo.src.large})`,
          
          }}
          key={photo.id}
        >
        
          <section>
            <p>{photo.alt}</p>
            <h6>
              <Badge bg="dark">{photo.photographer}</Badge>
            </h6>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Favorites;