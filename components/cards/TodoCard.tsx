import { getTimestamp } from "@/lib/utils";
import { ITodo } from "@/types";
import { CardHeader, CardTitle } from "@/components/ui/card";
import Metric from "../shared/Metric";
import Card from "./TodoCardShow";
interface TodoProps extends ITodo {}

const TodoCard = (todo: TodoProps) => {
  return (
    <Card todo={todo}>
      <CardHeader>
        <CardTitle className="sm:s-semibold base-semibold text-dark-200 line-clamp-1 flex-1">
          {todo.title}
        </CardTitle>
        <div className="flex items-center gap-4">
          <Metric
            value={todo.created_by.username}
            title={` - Created  ${getTimestamp(todo.created_at)}`}
            isAuthor
            textStyles="body-medium text-dark-400"
          />
          <Metric
            value={""}
            title={` Latest update  ${getTimestamp(todo.updated_at)}`}
            isAuthor
            textStyles="body-medium text-dark-400"
          />
        </div>
      </CardHeader>
    </Card>
  );
};

export default TodoCard;
