import { useParams, Link } from "react-router-dom";

const ProfileDisplayPhoto = ({ medias, photographers }) => {
  const { photoTitle, nameInUrl } = useParams();

  const photographer = photographers.find(({ name }) => name === nameInUrl);
  const photo = medias.find(({ title }) => title === photoTitle);

  const { title, tags, likes, price, image } = photo;
  const { name } = photographer;

  return (
    <article className="flex justify-center h-96 w-screen p-5">
      <div className=" h-96 w-96 mt-5 object-contain">
        <div className="flex justify-between items-baseline p-2">
          <Link to={`/${nameInUrl}`}>
            <h1 className="font-bold text-sm ">
              {name} <span> x </span>
            </h1>
            <h1 className="font-bold text-2xl ">{title}</h1>
          </Link>
        </div>
        <img
          src={image}
          alt={image}
          className="object-contain rounded-md mt-10"
        />
        <div className="flex justify-between items-baseline p-2">
          <p>#{tags}</p>
          <p className="mt-2">{likes} likes</p>
          <p className="mt-2">{price}€</p>
        </div>
      </div>
    </article>
  );
};

export default ProfileDisplayPhoto;
