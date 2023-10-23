import Counter from "./Counter";

// .map() metode

function App() {
  const masivs = [
    "Skaitītājs",
    "Vistiņēdājs",
    "Arbūzēdājs",
    "Kokvilnas vācējs",
  ];

  const masivsJSX = masivs.map((entry) => {
    return <Counter name={entry} key={entry} />;
  });
  return (
    <>
      <h1>Hi mom</h1>
      {masivsJSX}
    </>
  );
}

export default App;
