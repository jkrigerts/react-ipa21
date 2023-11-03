import Counter from "./Counter";
import Hello from "./Hello";
import CheckBox from "./CheckBox";

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
      <Hello />
      <CheckBox label="Hi" checked={true} />
      <CheckBox label="Sus" checked={false} />
    </>
  );
}

export default App;
