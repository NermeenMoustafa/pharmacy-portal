import React from "react";

const MedicalList = ({ medications, onMedicalSearch, isMedicationLoading, error }) => {
    return(
        <div className="m-20">
            {error ? <div className=' h-[500px] flex items-center justify-center text-4xl text-red-700'>{error}</div> :
            <>
                <div className="w-full pb-10 flex justify-between bg-white">
                    <span className="text-4xl font-bold text-gray-700">Medications List</span>
                    <input
                        className="w-[400px] h-[60px] p-4 border-solid border-2 border-gray-200 rounded-lg outline-gray-300" 
                        placeholder="Search..."
                        name="name"
                        disabled={isMedicationLoading}
                        onChange={(e) => onMedicalSearch(e.target.value)}
                    />
                </div>

                {isMedicationLoading ? (
                    <div className="w-full h-[500px] flex items-center justify-center">
                        <img className="w-[200px] h-[200px] bg-none animate-spin" src="./spinner.svg" alt="Spinner" />
                    </div>
                ) : (
                    <table className="w-full bg-gray-50 rounded-lg">
                    <thead className="bg-gray-100 h-[80px]">
                        <tr>
                            <th className="p-5 w-[10%] text-gray-700 rounded-tl-lg">Medication ID</th>
                            <th className="p-5 w-[30%] text-gray-700">Medication Name</th>
                            <th className="p-5 w-[60%] text-gray-700 rounded-tr-lg">Medication Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medications.map(({id, title, body}) => (
                            <tr key={id} className="border-solid border-t-2 border-gray-100">
                                <td className="p-5 text-gray-700">{id}</td>
                                <td className="p-5 text-gray-700">{title}</td>
                                <td className="p-5 text-gray-700">{body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                )}
            </>
            }
        </div>
    )
}

export default MedicalList