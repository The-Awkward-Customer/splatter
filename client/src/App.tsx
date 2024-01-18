function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <h1>Welcome!</h1>
        <form onSubmit={handleSubmit}>
          <label>search</label>
          <input />
          <button>Submit query</button>
        </form>
      </div>
    </>
  );
}

export default App;
