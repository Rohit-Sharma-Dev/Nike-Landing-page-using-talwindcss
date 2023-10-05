import { star } from "../assets/icons"

const PopularProductCard = ({imgURL,name,price,rating}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>   
       <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
       <div className="mt-8 flex justify-start gap-2.5">
            <img src={star} alt="ratting" width={20} height={20}/>
            <p className="font-montserrat text-xl leading-normal text-slate-gray ">({rating})</p>
       </div>
       <h3 className="font-palanquin leading-normal font-semibold text-2xl ">{name}</h3>
       <h3 className="font-mantserrat  leading-normal  text-xl text-coral-red ">{price}</h3>
    </div>
  )
}

export default PopularProductCard
