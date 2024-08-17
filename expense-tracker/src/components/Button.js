function Button({ children }) {
  return (
    <button className=" inline-block text-sm rounded-full bg-blue-300 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-blue-400 px-4 py-3 sm:px-6 sm:py-4">
      {children}
    </button>
  );
}

export default Button;
