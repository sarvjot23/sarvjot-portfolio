export default function SkillBadge({ name }: { name: string }) {
  return (
    <span className="inline-block px-3 py-1.5 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors duration-200">
      {name}
    </span>
  );
}
