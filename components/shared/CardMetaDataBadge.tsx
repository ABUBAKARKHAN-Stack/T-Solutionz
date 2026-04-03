import { cn } from "@/lib/utils";

const CardMetaDataBadge = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "text-accent border-accent/20 bg-accent-foreground/70 w-fit rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-[0.25em] uppercase backdrop-blur-md",
        className,
      )}
    >
      {label}
    </span>
  );
};

export default CardMetaDataBadge;
