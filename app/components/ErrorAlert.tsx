// components/ErrorAlert.tsx
export default function ErrorAlert({ message }: { message: string }) {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4">
            <p>{message}</p>
        </div>
    )
}