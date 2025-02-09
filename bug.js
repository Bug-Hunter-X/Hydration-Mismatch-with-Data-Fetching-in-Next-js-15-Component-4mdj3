```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a simple paragraph.</p>      
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/data');
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>My Component</h2>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}
```