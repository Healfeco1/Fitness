import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
import '../components/styles/ExerciseForm.css'

const ExerciseNew = ({ form, onChange, onSubmit }) => {
    return (
        <div className="row d-flex align-items-center">
            <div className="col-sm mb-2 ml-sm-2">
                <Card
                    {...form}
                />
            </div>
            <div className="col mr-sm-5 mt-sm-5">
                <ExerciseForm
                    onChange={onChange}
                    onSubmit={onSubmit}
                    form={form}
                />
            </div>
        </div>
    )
}

export default ExerciseNew
