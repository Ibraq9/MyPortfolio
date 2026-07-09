export default function LiveProjectButton({ label = "Live Project", href = "#" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-8 py-3 sm:px-10 sm:py-3.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200"
    >
      {label}
    </a>
  );
}
