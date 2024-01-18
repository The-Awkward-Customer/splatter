function App() {
  // handles form
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = document.getElementById(
      "searchForm"
    ) as HTMLFormElement;
    const formData = new FormData(formElement);

    const searchValue = formData.get("searchInput");

    console.log(searchValue);

    fetch("/agg_req", {
      method: "GET",
      body: formData,
    });
  };

  return (
    <>
      <div>
        <h1>Welcome!</h1>
        <form id="searchForm" onSubmit={handleFormSubmit}>
          <label>search</label>
          <input type="text" name="searchInput" placeholder="Search" />
          <button>Submit query</button>
        </form>
      </div>
      <section>
        <h3>Search results:</h3>
        <div>{/* //results go here */}</div>
      </section>
    </>
  );
}

export default App;
