const OverlayWrapper = ({ children, isOverlayActive }) => {
//   const overlayStyle = {
//     display: isOverlayActive ? "block" : "none",
//   };

  return (
    <>
      {isOverlayActive && (
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[5.625rem] z-[60]  "
          src="/gifs/loading.gif"
          alt="loading"
        />
      )}

      <div
        className={` ${
          isOverlayActive
            ? "fixed top-0 left-0 w-full h-full z-50 pointer-events-none blur-sm"
            : ""
        }`}
      >
        {children}
      </div>

    </>
  );
};

export default OverlayWrapper;
