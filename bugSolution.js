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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch('/api/data');
      const json = await res.json();
      setData(json);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (data === null) {
    return <p>No data</p>; // Handle case where data fetching fails
  }

  return (
    <div>
      <h2>My Component</h2>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}
```