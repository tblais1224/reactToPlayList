import React from 'react'


const Toplays = ({toplays, deleteToplay}) => {
     
    const toplayList = toplays.length ? (
        toplays.map(toplay => {
            return(
                <div className="collection-item" key={toplay.id}>
                    <span onClick={() => {deleteToplay(toplay.id)}}>{toplay.content}</span>
                </div>
            )
        })
    ) : (
        <p>You have no more to plays left, add more!</p>
    )

    return(
        <div className='toplays collection'>
            {toplayList}
        </div>
    )
}

export default Toplays;