import { FaCheck, FaPlus, FaStar } from 'react-icons/fa';
import { BsInfoLg } from 'react-icons/bs';

const GiveIcon = ({number}) => {
    if (number === 0) {
        return <FaPlus className='rotate-45 text-red-500' />
    } else if (number === 1) {
        return <FaCheck className='text-gray-600' />
    } else if (number === 2) {
        return <FaCheck className='text-yellow-500' />
    } else if (number === 3) {
        return <FaCheck className='text-green-600' />
    } else if (number === 4) {
        return <FaStar className='text-primary' />
    }
}

const Feature = ({ feature }) => {
    return (
        <li className='flex font-medium items-center gap-3'>
            <GiveIcon number={feature.level} /> { feature.name } <span className='border-2 border-primary text-primary text-xs rounded-full w-[18px] h-[18px] hover:text-primary-content hover:bg-primary transition-all flex justify-center items-center cursor-pointer -ml-2'><BsInfoLg /></span>
        </li>
    )
}

const Title = ({ text }) => {
    return <h4 className='font-bold text-secondary text-lg'>{ text }</h4>
}

const FeatureGroup = ({ name, group }) => {
    return (
        <ul className='flex flex-col gap-2'>
            <Title text={name} />
            {group.map(feature => {
                return <Feature key={feature.name} feature={feature} />
            })}
        </ul>
    )
}

export default FeatureGroup