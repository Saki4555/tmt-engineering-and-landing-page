const Badge = () => {
    return (
      <div className="badge-shadow w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#F0FDF4] flex items-center justify-center">
        <div className="badge-shadow-inset w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#D1FAE5] flex items-center justify-center">
          <div className="text-center">
            <div className="text-[#0F766E] font-bold text-sm md:text-base">CERTIFIED</div>
            <div className="text-[#16A34A] font-bold text-xs md:text-sm">SINCE 2002</div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Badge
  
  