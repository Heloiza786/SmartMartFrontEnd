import { CheckCircle } from 'lucide-react'

type SuccessMessageProps = {
  message?: string
}

export function SuccessMessage({ message }: SuccessMessageProps) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-green-100 border border-green-300 text-green-800">
      <CheckCircle className="w-6 h-6 text-green-600" />
      <span className="font-medium">
        {message || ' Concluido!'}
      </span>
    </div>
  )
}
