import React from 'react'
import '../App.css'

// On met un paramétre de la fuction comme 'props'
export default function Livres(props) {


    // On destructure l'objet props on sortant le props.books
    const { books } = props
    return (
        <div>
            <h1>Livres</h1>

            {/* Mapper/Afficher chaque livre de la liste des livres à l'aide la function 'map' */}

            <div className='container-livres'>
                {books.map(livre => {
                    return <div>
                        <img src={livre.image} width="200px" />
                        <h1>{livre.title}</h1>
                        <h6>{livre.author}</h6>
                        <h5>{livre.price}</h5>
                    </div>
                })}
            </div>
        </div>
    )
}
