import { useParams, useNavigate } from "react-router-dom";
import sampleRuns from "../data/test.json";
import { useRunDetails } from "../hooks/useRunDetails";
import "../styles/global.css";

export default function DetailsPage() {
    const { run } = useRunDetails();
    const { id } = useParams();
    const navigate = useNavigate();

    if (!run) return <p>Run not found</p>;

    return (
        <div className="p-5">
            <button onClick={() => navigate(-1)} className="mb-4 px-4 py-2 bg-gray-500 text-white rounded">Back</button>
            <h1 className="text-2xl font-bold">{run.name}</h1>
            <p>Status: {run.status}</p>
            <p>Date: {run.date}</p>
            <p>Duration: {run.duration} minutes</p>
            <p>{run.description}</p>
            <iframe src={`/iframe/${id}`} width="800" height="600" className=" mt-4"></iframe>
        </div>
    );
}