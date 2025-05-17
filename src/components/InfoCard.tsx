import React from 'react'

interface InfoCardProps {
  title: string
  value: string | number
  icon: string
  iconBgColor?: string
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value, icon, iconBgColor }) => {
  return (
    <div className="flex items-center justify-between px-4 py-8 rounded-2xl bg-white shadow transition duration-300 hover:shadow-lg hover:-translate-y-0.5 rtl:flex-row-reverse">
      {/* Text Section */}
      <div className="text-right">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold mt-1">{value}</p>
      </div>

      {/* Icon Section */}
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full text-2xl ${iconBgColor ?? 'bg-gray-100 text-gray-800'}`}
      >
        {icon}
      </div>
    </div>
  )
}

export default InfoCard
