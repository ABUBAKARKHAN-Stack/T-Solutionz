import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";
import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "./ui/button";

type Props = {
  variant?: VariantProps<typeof buttonVariants>["variant"];
}
const ThemeToggle = ({
  variant = "default"
}: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant={variant}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative hover:cursor-pointer w-10 h-10 rounded-full flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors duration-300 hover:bg-accent/10 bg-transparent"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="size-4.5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="size-4.5" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
};

export default ThemeToggle;
