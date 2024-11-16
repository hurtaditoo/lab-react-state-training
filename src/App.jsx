import Counter from "./components/counter/counter";
import LikeButton from "./components/likebutton/likebutton";

function App() {
  return (
    <>
      <div className="d-flex p-3">
        <LikeButton />
        <LikeButton />
      </div>

      <div className="d-flex p-4">
        <Counter />
      </div>

    </>
  );
}

export default App;
