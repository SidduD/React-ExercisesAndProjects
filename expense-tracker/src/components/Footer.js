function Footer() {
  return (
    <footer>
      <p className="bg-slate-500 text-stone-100 text-center font-semibold">
        &copy; Copyright {new Date().getFullYear()} by ExpenseTracker Inc.
      </p>
    </footer>
  );
}

export default Footer;
