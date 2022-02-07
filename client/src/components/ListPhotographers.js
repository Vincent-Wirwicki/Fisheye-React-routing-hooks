import { useState, useEffect } from "react";
import ListPhotographer from "./ListPhotographer";
// import ListPhoto from "./ListPhoto"
const ListPhotographers = ({ photographers, medias }) => {
  const style = "border-b-2 border-black py-1 pl-2";

  const [copyPhotographers, setCopyPhotographers] = useState([]);
  const [copyMedias, setCopyMedias] = useState([]);
  // const [isFilter, setIsFilter] = useState(false)

  useEffect(() => {
    setCopyPhotographers(photographers);
    setCopyMedias(medias);
  }, [photographers, medias]);

  //   const orderPriceDsc = () => {
  //     const orderDsc = copyPhotographers.sort((a, b) => a.price - b.price);
  //     console.log(orderDsc);
  //     setCopyPhotographers(orderDsc);
  //   };

  //   const orderPriceAsc = () => {
  //     const orderAsc = copyPhotographers.sort((a, b) => b.price - a.price);
  //     console.log(orderAsc);
  //     setCopyPhotographers(orderAsc);
  //   };

  // const search = e => {

  //     const inputValue = e.targe.value
  //     const results = photographers.filter(item => item.includes(inputValue))
  //     results.length && setCopyPhotographers(results)

  // }

  // const removeFilter = () => setIsFilter(false)
  //e => setCopyPhotographers(e.target.value)

  return (
    <div>
      <section className="flex justify-evenly mt-20">
        {/* <input type="text" placeholder='search bar '
                    className="border-b-2 border-black py-1 pl-2 focus:outline-none"
                    onInput={search} />
                {isFilter ? (<p onClick={removeFilter} >remove filter</p>) : ('')} */}
      </section>
      <section className="grid grid-cols-5 mt-20">
        <p className={`${style}`}>Name</p>
        <p className={`${style}`}>City</p>
        <p className={`${style}`}>Country</p>
        <p className={`${style}`}>
          Price
          {/* <span className='font-semibold text-lg cursor-pointer'
                        onClick={() => { orderPriceAsc() }}> + </span>
                    <span
                        className='font-semibold text-lg cursor-pointer'
                        onClick={() => { orderPriceDsc()}}> - </span> */}
        </p>
        <p className={`${style}`}>Tags</p>
        {copyPhotographers.map((photographer) => (
          <ListPhotographer
            key={photographer.id}
            photographer={photographer}
            medias={copyMedias}
          />
        ))}
      </section>
    </div>
  );
};

export default ListPhotographers;
