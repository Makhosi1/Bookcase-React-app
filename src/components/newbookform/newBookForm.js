import { useState } from "react"

export default function AddBookForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("")


    return (
        <>
        <form>
            <label for="title">
                Title
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </label>
            <label for="description"> 
            Description
            <input
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            </label>
            <label for="price"> Price</label>
            <input
                type="number"
                value={price}
                onChange={e => setPrice(e.target.value)}
            />
            <button type ="submit">Submit</button>
        </form>
        </>
    )
}




