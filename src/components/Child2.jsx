import React from 'react'

const Child2 = () => {
  const dispatch = useDispatch()
  const data = useSelector((c)=>{
    console.log(c.show.value);
    return c.show.value
  })
  return (
    <>
    <div>Child2 {data}</div>
    </>
  )
}

export default Child2