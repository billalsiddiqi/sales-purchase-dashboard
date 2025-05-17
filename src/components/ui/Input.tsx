// src/components/ui/Input.tsx
import React from "react"

interface InputProps {
  label: string
  value: string
  direction?: "rtl" | "ltr"
  onChange: (value: string) => void
  error?: string | null
}

const Input: React.FC<InputProps> = ({ label, value, onChange, direction = "rtl", error }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="text"
        dir={direction}
        className={`w-full p-2 border rounded-lg text-right ${
          error ? "border-red-400" : "border-gray-300"
        }`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}

export default Input
