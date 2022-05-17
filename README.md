# use-ref-state

simple combination of `useRef` and `useState` to solve `closure` problems in `useEffect`.

**Perfect surport in typescript.**

## Usage

```javascript
import useRefState from 'react-use-ref-state';

const Demo = () => {
  const [count, setCount] = useRefState(0);

  useEffect(() => {
    setInterval(() => {
      console.log(count.current)
    }, 1000)
  }, [])

  return <div onClick={() => setCount(count.current + 1)}>{count.current}</div>

}

```
