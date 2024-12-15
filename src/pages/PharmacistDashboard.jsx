import React from 'react'
import BarChartComponent from '../components/BarChart'
import PieChartComponent from '../components/PieChart'

const Dashboard = ({ medications }) => {
    return(
        <div className='w-[1300px] h-[800px] flex items-center justify-between m-auto'>
            <div className='flex flex-col gap-[50px]'>
                <span className='text-4xl'>Bar Chart</span>
                <BarChartComponent medications={medications} />
            </div>

            <div>
                <span className='text-4xl'>Donut Chart</span>
                <PieChartComponent medications={medications}/>
            </div>
        </div>
    )
}

export default Dashboard