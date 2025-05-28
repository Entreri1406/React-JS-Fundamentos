import { useState } from "react";

const Cat = () => {
    const [cat, setCat] = useState({ name: "Cat #01", year: 1 })
    const handleSubmit = () => {
        setCat({ ...cat, year: cat.year + 1 })
    }
    return (
        <div className="container mt-5">
            <h1 className="display-5">Cat</h1>
            <h2>CatName: {cat.name} - CatYear: {cat.year}</h2>
            <button onClick={handleSubmit} className="btn btn-dark mt-2">Update age</button>
        </div>
    )
}

export default Cat;