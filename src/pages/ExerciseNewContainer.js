import React, { useState } from 'react'
import FatalError from './500'
import ExerciseNew from './ExerciseNew'
import url from '../config'
import Loading from '../components/Loading'

const ExerciseNewContainer = ({history}) => {
    const [form, setForm] = useState({
        title: '',
        description: '',
        img: '',
        leftColor: '',
        rightColor: '' 
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

   const handleChange = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault();
        try {
            let config = {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }

            await fetch(`${url}/exercises`, config)
            setLoading(false)
            // Redirecciona a los ejercicios una vez que creas uno nuevo
            history.push('/exercise')
        } catch (error) {
            setLoading(false)
            setError(error)
            console.log(error)
        }
    }
    if (loading) {
        return <Loading/>
    }
    if (error) {
        return <FatalError/>
    }
    return (
        <ExerciseNew
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    )
}

export default ExerciseNewContainer