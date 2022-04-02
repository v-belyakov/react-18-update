/*
import { useState } from 'react';
import { List } from './List';

const source = new Array(12000)
  .fill(0)
  .map((_, i) => ({ id: i, name: `Item ${i + 1}` }));

const filterItems = (filter) => {
  return filter
    ? source.filter((i) => i.name.includes(filter))
    : source;
}

function App() {
  const [filter, setFilter] = useState('');

  const items = filterItems(filter);

  const changeHandler = (event) => {
    setFilter(event.target.value);
  }

  return (
    <div className="container">
      <input type="text" onChange={changeHandler} />

      <List items={items} />
    </div>
  );
}

export default App;
*/

/*
import { useState, useTransition } from 'react';
import { List } from './List';

const source = new Array(12000)
  .fill(0)
  .map((_, i) => ({ id: i, name: `Item ${i + 1}` }));

const filterItems = (filter) => {
  return filter
    ? source.filter((i) => i.name.includes(filter))
    : source;
}

function App() {
  const [filter, setFilter] = useState('');
  const [isPending, startTransition] = useTransition();

  const items = filterItems(filter);

  const changeHandler = (event) => {
    startTransition(() => {
      setFilter(event.target.value);
    });
  }

  return (
    <div className="container">
      <input type="text" onChange={changeHandler} />
      {isPending && <h2>Changing state...</h2>}

      <List items={items} />
    </div>
  );
}

export default App;
*/

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 2);
  }

  const clickHandlerAsync = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 2);
    }, 1000);
  }

  console.count('r:');

  return (
    <div className="container">
      <h1>{count}</h1>

      <button onClick={clickHandler}>Change count</button>
      <button onClick={clickHandlerAsync}>Change count async</button>
    </div>
  )
}

export default App;
