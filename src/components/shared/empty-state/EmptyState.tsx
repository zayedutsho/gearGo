import { SearchX } from "lucide-react";

type Props = {
  title: string;
  description?: string;
};

export default function EmptyState({ title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <SearchX className="mb-5 h-12 w-12 text-muted-foreground" />

      <h2 className="text-2xl font-semibold">{title}</h2>

      {description && (
        <p className="mt-2 max-w-md text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
