import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementbyValue } from '../features/showslices';


const SubChild1 = () => {
  const dispatch = useDispatch()
  const data = useSelector((c)=>{
    console.log(c.show.value);
    return c.show.value
  })
  return (
    <>
    <div>
      <h1>
        subchild value: {data} 
      </h1>
      <button onClick={() => dispatch(increment())} >Increment</button>
      <button onClick={() => dispatch(incrementbyValue(20))} >Increment by 20</button>

    </div>
    </>
  )
}
export default SubChild1