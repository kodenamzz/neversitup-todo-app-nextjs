export interface ITodo {
  created_at: string;
  created_by: ICreatedBy;
  description: string;
  id: string;
  title: string;
  updated_at: string;
}

export interface ICreatedBy {
  id: string;
  username: string;
}

export interface IResponseAllTodo {
  isSuccess: boolean;
  data: ITodo[];
}
