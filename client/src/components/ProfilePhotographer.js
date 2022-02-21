import { useParams } from 'react-router-dom'
import ProfileDisplayInfo from './ProfileDisplayInfo'
import ProfileDisplayPhotos from './ProfileDisplayPhotos'

const ProfilePhotographer = ({ photographers, medias }) => {

    const { nameInUrl } = useParams()
    let allLikes = 0 
    const photographer = photographers.find(({ name }) => name === nameInUrl)
    const matchMedias = medias.filter(({ photographerId }) => photographerId === photographer.id)
    const calcLikes = () => matchMedias.map(({ likes }) => allLikes += likes)
    calcLikes();

    return (
      <div>
        <section>
          <ProfileDisplayInfo photographer={photographer} likes={allLikes} />
        </section>
        <section className="grid items-center md:grid-cols-4 xs:grid-cols-1 gap-5 justify-items-center	 ">
          {matchMedias.map(photo => (
            <ProfileDisplayPhotos
              key={photo.id}
              photo={photo}
              photographer={photographer}
            />
          ))}
        </section>
      </div>
    );
}

export default ProfilePhotographer

