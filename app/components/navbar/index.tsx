import { NavLink } from "remix";
import { useTheme } from "../../utils/theme-provider";
import { Moon, Sun } from "react-feather";
import clsx from "clsx";

const iconTransformOrigin = { transformOrigin: "50% 100px" };

function DarkModeToggle({
  variant = "icon",
}: {
  variant?: "icon" | "labelled";
}) {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => {
        setTheme((previousTheme) =>
          previousTheme === "light" ? "dark" : "light"
        );
      }}
      className={clsx(
        "border-black dark:border-white hover:border-primary focus:border-primary inline-flex items-center justify-center p-1 h-12 border-2 rounded-full focus:outline-none overflow-hidden transition",
        {
          "w-12": variant === "icon",
          "px-8": variant === "labelled",
        }
      )}
    >
      <div className="relative w-6 h-6">
        <span
          className="motion-reduce:duration-[0s] absolute inset-0 text-black dark:text-white transform dark:rotate-0 rotate-90 transition duration-1000 m-auto"
          style={iconTransformOrigin}
        >
          <Moon />
        </span>
        <span
          className="motion-reduce:duration-[0s] absolute inset-0 text-black dark:text-white transform dark:-rotate-90 rotate-0 transition duration-1000"
          style={iconTransformOrigin}
        >
          <Sun />
        </span>
      </div>
    </button>
  );
}
const links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/groups",
    label: "Groups",
  },
  {
    to: "/analytics",
    label: "Analytics",
  },
  {
    to: "/preferences",
    label: "Preferences",
  },
];
function Navbar() {
  return (
    <nav className="flex justify-between items-center flex-wrap p-6">
      <div className="flex-shrink-0 ">
        <h1 className="font-semibold text-2xl text-gray-700 dark:text-gray-200">
          Cruz B. Burgos
        </h1>
      </div>
      <div className="flex space-x-8">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-gray-700 dark:text-gray-400 text-lg px-2 font-medium border-b-2 border-gray-700 dark:border-gray-400"
                : "text-gray-700 dark:text-gray-400 text-lg px-2 font-medium"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <DarkModeToggle />
    </nav>
  );
}

export { Navbar };
