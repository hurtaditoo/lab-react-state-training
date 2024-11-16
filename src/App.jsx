import Dice from "./components/dice/dice"
import ClickablePicture from "./components/clickablePicture/clickablePicture";
import Counter from "./components/counter/counter";
import LikeButton from "./components/likeButton/likeButton";

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

      <div className="d-flex p-4">
        <ClickablePicture />
      </div>

      <div className="d-flex p-4">
        <Dice />
      </div>

    </>
  );
}

export default App;
