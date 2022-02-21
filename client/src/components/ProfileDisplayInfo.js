const ProfileDisplayInfo = ({ photographer, likes }) => {
  const { portrait, name, city, country, tagline, price, tags } = photographer;
  const display = tags.map((tag, index) => (
    <p className="mr-2" key={index}>
      #{tag}
    </p>
  ));

  return (
    <article className="flex justify-evenly items-center md:my-24 md:flex-row xs:flex-col xs:my-25">
      <div className="rounded-full border-2 overflow-hidden max-h-36 w-36 my-5 flex justify-center items-center">
        <img src={portrait} alt={portrait} className="scale-150"></img>
      </div>
      <div>
        <h3 className="font-bold text-3xl mb-2">{name}</h3>
        <p className="text-sm">
          {city} - {country}
        </p>
        <p className="font-bold text-lg my-2">{tagline}</p>
        <p className="text-sm my-2">
          {likes} Likes - <span className="mr-2">{price}€/jour</span>
        </p>
        <div className="flex">{display}</div>
      </div>
    </article>
  );
};

export default ProfileDisplayInfo;
