import { LangSwitch } from "../LangSwitch";
import { Menu } from "../Menu/Menu";

export function Header() {
  return (
    <header className="p-y2 border-b border-slate-400 px-4 py-2">
      <Menu />
    </header>
  );
}
