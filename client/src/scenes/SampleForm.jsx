import React from 'react'
import { useState } from 'react'


const SampleForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Submitted name: ' + name);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SampleForm
