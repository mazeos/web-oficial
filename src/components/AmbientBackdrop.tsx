const AmbientBackdrop = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <img
      src="/maze-ambient.webp"
      alt=""
      aria-hidden="true"
      className="w-full h-full object-cover opacity-[0.14]"
    />
  </div>
);
export default AmbientBackdrop;
