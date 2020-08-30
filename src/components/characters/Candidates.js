import React from 'react'
import Spinner from '../Spinner'
import Candidate from './Candidate'

const Candidates = ({items, isLoading}) => {
return isLoading? (<Spinner/>) : (<section className="cards">{items.map(item =><Candidate key={item.age} item={item}/>)}</section>)
}
export default Candidates
