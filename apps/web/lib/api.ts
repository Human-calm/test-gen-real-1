const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export async function fetchAllTasks(): Promise<TaskRead[]> {
  const res = await fetch(`${API_URL}/api/v1/tasks/`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Error ${res.status}`);
  return res.json();
}

export async function createTask(data: Record<string, unknown>): Promise<TaskRead> {
  const res = await fetch(`${API_URL}/api/v1/tasks/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`Error ${res.status}`);
  return res.json();
}

import type { TaskRead } from "@/types/tasks";
