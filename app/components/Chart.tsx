// components/Chart.tsx
'use client'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts'

// Sample data - in a real app, this would come from an API
// const data = [
//     { name: 'Jan', sales: 4000 },
//     { name: 'Feb', sales: 3000 },
//     { name: 'Mar', sales: 5000 },
//     { name: 'Apr', sales: 2780 },
//     { name: 'May', sales: 1890 },
//     { name: 'Jun', sales: 2390 },
// ]

interface SalesDataPoint {
    name: string;
    sales: number;
}

interface ChartProps {
    data: SalesDataPoint[];
}


export default function Chart({data} : ChartProps) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}