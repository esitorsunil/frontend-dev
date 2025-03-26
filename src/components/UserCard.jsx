import React from 'react'

const userCard = ({user}) => {
    const {firstName,lastName,photoUrl, age, gender, about} = user
  return (
    <>
    <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img className='h-86 w-96 object-none'
      src={photoUrl}
      alt="Photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+ " "+ lastName}</h2>
    {age && gender &&<p>{age + ", " + gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center my-4">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Intersted</button>
    </div>
  </div>
</div>
<div></div>
</>
  )
}

export default userCard