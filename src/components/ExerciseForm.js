import React from 'react'

const ExerciseForm = ({ onChange, onSubmit, form }) => (
    <div className="container text-center">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="title"
                    name="title"
                    value={form.title}
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="description"
                    name="description"
                    value={form.description}
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="img"
                    value={form.img}
                    name="img"
                    onChange={onChange}
                />
            </div>
            <div className="form-row">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="leftColor"
                        value={form.leftColor}
                        name="leftColor"
                        onChange={onChange}
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="rightColor"
                        value={form.rightColor}
                        name="rightColor"
                        onChange={onChange}
                    />
                </div>
            </div>
            <button
                type="submit"
                className="btn btn-primary mt-2"
            >
                Submit
                            </button>
        </form>
    </div>
)

export default ExerciseForm