import React, { useState, useContext } from 'react';
import { TodoListContext } from '../../context/TodoListContext';
import './Todolist.scss';

function Todolist() {
  const [reminders, setReminders] = useContext<any>(TodoListContext);
  const [inputValue, setInputValue] = useState('');

  const concatValue = (event: any) => {
    setInputValue(event.target.value);
  };

  const sendReminder = () => {
    reminders.values.push(inputValue);
    setReminders(reminders);
    setInputValue('');
  };

  const removeReminder = (id: number) => {
    const newReminders = {
      values: [],
    };
    newReminders.values = reminders.values.filter(
      (reminder: string) => id !== reminders.values.indexOf(reminder)
    );
    setReminders(newReminders);
  };

  return (
    <div className="content">
      <div>Reminder</div>
      <div>
        <div>
          <input
            className="input"
            type="text"
            value={inputValue}
            onChange={concatValue}
          />
        </div>
        <button
          className="addReminder"
          type="button"
          onClick={() => sendReminder()}
        >
          Add Reminder
        </button>
        <ul>
          {reminders.values.map((reminder: any, index: number) => (
            <li key={reminder}>
              {reminder}
              <button
                className="deleteBtn"
                type="button"
                onClick={() => removeReminder(index)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
