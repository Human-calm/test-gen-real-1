interface TasksListProps {
  className?: string;
}

export default function TasksList({ className }: TasksListProps) {
  // TODO: replace with API call
  return (
    <div className={`rounded-md border p-4 ${className ?? ""}`}>
      <p className="text-sm">Auto-fix tras QA.</p>
    </div>
  );
}
