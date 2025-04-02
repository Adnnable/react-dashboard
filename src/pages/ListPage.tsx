// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import sampleRuns from "../data/test.json";

// export default function ListPage() {
//     const [runs, setRuns] = useState<typeof sampleRuns>([]);

//     useEffect(() => {
//         new Promise<typeof sampleRuns>((resolve) => setTimeout(() => resolve(sampleRuns), 500)).then(setRuns);
//     }, []);

//     return (
//         <div className="p-5">
//             <h1 className="text-2xl font-bold mb-4">Runs</h1>
//             <table className="w-full border-collapse border border-gray-300">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Status</th>
//                         <th>Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {runs.map((run) => (
//                         <tr key={run.id}>
//                             <td>{run.id}</td>
//                             <td><Link to={`/run/${run.id}`} className="text-blue-500">{run.name}</Link></td>
//                             <td>{run.status}</td>
//                             <td>{run.date}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sampleRuns from "../data/test.json";
import "../styles/global.css";

export default function ListPage() {
    const [runs, setRuns] = useState<typeof sampleRuns>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Show 10 items per page

    useEffect(() => {
        // Simulate a delay to fetch data
        new Promise<typeof sampleRuns>((resolve) => setTimeout(() => resolve(sampleRuns), 500)).then(setRuns);
    }, []);

    // Calculate the index of the first and last item to display on the current page
    const indexOfLastRun = currentPage * itemsPerPage;
    const indexOfFirstRun = indexOfLastRun - itemsPerPage;

    // Get the runs for the current page
    const currentRuns = runs.slice(indexOfFirstRun, indexOfLastRun);

    // Calculate the total number of pages
    const totalPages = Math.ceil(runs.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return; // Prevent going below page 1 or beyond the last page
        setCurrentPage(page);
    };

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Runs</h1>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRuns.map((run) => (
                        <tr key={run.id}>
                            <td>{run.id}</td>
                            <td><Link to={`/run/${run.id}`} className="text-blue-500">{run.name}</Link></td>
                            <td>{run.status}</td>
                            <td>{run.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination controls */}
            <div className="flex justify-between items-center mt-4">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 1} 
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                    Previous
                </button>

                <div>
                    Page {currentPage} of {totalPages}
                </div>

                <button 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    disabled={currentPage === totalPages} 
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">
                    Next
                </button>
            </div>
        </div>
    );
}
