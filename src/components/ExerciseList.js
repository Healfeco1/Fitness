import React from 'react'
import Card from './Card'

// Componet Functional
const ExcerciseList = ({ exercises }) => (
    <>
        {exercises.map((exercise) => (
            <Card
                key={exercise.id}
                {...exercise}
            />
        ))}
    </>

)

export default ExcerciseList