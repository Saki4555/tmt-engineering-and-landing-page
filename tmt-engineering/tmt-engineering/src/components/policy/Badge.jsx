const Badge = () => {
  return (
    <div
      className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[var(--color-te-back)] flex items-center justify-center
                 [box-shadow:5px_5px_10px_rgba(147,197,253,0.5),-5px_-5px_10px_white]"
    >
      <div
        className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[var(--color-te-sec)] flex items-center justify-center
                   [box-shadow:inset_3px_3px_6px_rgba(147,197,253,0.5),inset_-3px_-3px_6px_white]"
      >
        <div className="text-center">
          <div className="text-[var(--color-te-acc)] font-bold text-sm md:text-base">CERTIFIED</div>
          <div className="text-[var(--color-te-prim)] font-bold text-xs md:text-sm">SINCE 2002</div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
