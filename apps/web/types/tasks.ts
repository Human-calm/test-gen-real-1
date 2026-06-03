export interface TaskRead {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  completed: boolean;
}

export interface TaskCreate {
  title: string;
  completed: boolean;
}
