export default function StatCard({
    title, value, change, isIncreasing
                                 }:{
    title: string, value: string, change:string, isIncreasing:boolean;
}){
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-gray-500 text-sm">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
            <p className={`text-sm ${isIncreasing ? 'text-green-500' : 'text-red-500'}`}>{change} from last month</p>
        </div>
    )
}