import { useState } from 'react'

const AddReviewCard = ({ onSubmit }) => {
    const [name, setName] = useState("")
    const [rating, setRating] = useState(5)
    const [review, setReview] = useState("")
    console.log("Reached here")

    const handleSubmit = () => {
        if (!name || !review) return alert("Please fill all fields!")

        const newReview = {
            id: Date.now(),
            name,
            rating,
            review,
        }
        onSubmit(newReview)
        setName("")
        setRating(5)
        setReview("")
        console.log("Updated")

    }
    return (
        <div className="bg-white border border-blue-200 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition w-[350px]">
            <h3 className="text-lg font-semibold text-blue-600 mb-3">⭐ Add Your Review</h3>

            <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-2 rounded mb-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <select
                className="w-full border p-2 rounded mb-2"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
            >
                <option value={5}>★★★★★ (5)</option>
                <option value={4}>★★★★☆ (4)</option>
                <option value={3}>★★★☆☆ (3)</option>
                <option value={2}>★★☆☆☆ (2)</option>
                <option value={1}>★☆☆☆☆ (1)</option>
            </select>

            <textarea
                placeholder="Your Review"
                className="w-full border p-2 rounded mb-3"
                value={review}
                onChange={(e) => setReview(e.target.value)}
            ></textarea>

            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
            >
                Submit
            </button>
        </div>
    )
}

export default AddReviewCard
