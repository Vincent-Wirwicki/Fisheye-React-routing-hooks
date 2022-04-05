import { Link, useParams } from "react-router-dom";

const ProfilePhotos = ({ photo }) => {
  const { title, tags, likes, price, image } = photo;
  const { nameInUrl } = useParams();

  return image === undefined || image === null ? (
    ""
  ) : (
    <article className="flex flex-col justify-evenly p-2 mt-20">
      <Link to={`/${nameInUrl}/${title}`}>
        <div className="h-36 w-36 max-h-60 overflow-hidden rounded-md flex justify-center items-center">
          <img src={image} alt={`${image}`} className="object-contains" />
        </div>
      </Link>
      <div className="mt-2">
        <p className="text-base">
          <span className="font-semibold">{likes}</span> likes
        </p>
        <h3 className="font-bold text-lg ">{title}</h3>
        <p className="text-sm my-1">
          <span className="font-semibold text-base"> {price}</span>€
        </p>
        <p>#{tags}</p>
      </div>
    </article>
  );
};

export default ProfilePhotos;
