/*
export function List({ items }) {

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
*/

import { useDeferredValue } from 'react';

export function List({ items }) {
  const defItems = useDeferredValue(items);

  return (
    <ul>
      {defItems.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
