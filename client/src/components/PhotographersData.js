import PhotographerCard from './PhotographerCard'

const PhotographersData = ({display, mediaLikes}) => 
        
        <>
        {display.map(photographer => (                
                <PhotographerCard 
                key = {photographer.id} 
                photographer = {photographer}
                mediaLikes = {mediaLikes}
                />
        ))} 
        </>
       
export default PhotographersData
