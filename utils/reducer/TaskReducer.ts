import { Action, ReducerType, Taks, Tasks } from '@/@types/forms';
import { initialTasks } from '@/components/takeList';

export function tasksReducer(tasks: Tasks, action: Partial<Action>): Tasks {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id!,
          text: action.text!,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.id) {
          return action as Action;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
