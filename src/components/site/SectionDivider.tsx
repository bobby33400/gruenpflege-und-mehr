import logo from "@/assets/logo.png";

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-6" aria-hidden="true">
      <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-primary/40" />
      <img src={logo} alt="" className="h-7 w-7 opacity-70 object-contain" />
      <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-primary/40" />
    </div>
  );
}
