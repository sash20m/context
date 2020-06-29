import React, { useState, createContext } from 'react';

interface Props {
  children: any;
}

interface Reminder {
  value: string;
}

interface TodoContext {
  values: Reminder[];
}

const initialValue = {
  values: ['Groceries'],
};

export const TodoListContext = createContext({});

export const TodoListProvider = (props: Props) => {
  const [reminders, setReminders] = useState<TodoContext | {}>(initialValue);
  const { children } = props;
  return (
    <TodoListContext.Provider value={[reminders, setReminders]}>
      {children}
    </TodoListContext.Provider>
  );
};
