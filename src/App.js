import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css';
import { MedicalList, Dashboard } from './pages/index'

function App() {
  const [medications, setMedications] = useState([])
  const [filteredMedications, setFilteredMedications] = useState([])
  const [isMedicationLoading, setIsMedicationLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchMedications();
  },[])

  const fetchMedications = async () => {
    setIsMedicationLoading(true)
  
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      setMedications(data);
      setFilteredMedications(data);
      setIsMedicationLoading(false)
    })
    .catch((err) => setError(err.message))
  }

  const onMedicalSearch = (value) => {
    const filteredMeds = medications.filter(({ title }) => title.includes(value))
    setFilteredMedications(filteredMeds)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <header className='bg-gray-200 sticky top[0] z[20] w-full flex items-center justify-between border-gray-500 px-20 py-4'>
            <img width="100" src="Pharmacy-banner.png" alt="logo" className='rounded-lg' />

            <div className='flex w-[300px] justify-between'>
              <NavLink to='/' className="hover:text-blue-700">Medication List</NavLink>
              <NavLink to='/dashboard' className="hover:text-blue-700">Pharmacist Dashboard</NavLink>
            </div>
        </header>
                
        <Routes>
          <Route path='/' element={
            <MedicalList
              medications={filteredMedications}
              onMedicalSearch={onMedicalSearch}
              isMedicationLoading={isMedicationLoading}
              error={error}
            />
          }>Medication List</Route>
          <Route path='/dashboard' element={<Dashboard medications={medications} />}>Pharmacist Dashboard</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
