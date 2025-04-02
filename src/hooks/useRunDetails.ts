import { useParams } from "react-router-dom";
import sampleRuns from "../data/test.json";

export function useRunDetails() {
    const { id } = useParams();
    const run = sampleRuns.find((r) => r.id === id);
    return { run };
}
