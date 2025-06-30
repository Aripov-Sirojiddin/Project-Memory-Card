import "./RestartModal.css";
export default function RestartModal({ setScore, setCards }) {
  function handleClose() {
    setScore(new Set());
    setCards([]);
  }
  return (
    <div className="cover">
      <div id="modal">
        <img src="../pokemon_icon.png" alt="" />
        <h1>Congrats you memorized them all!</h1>
        <p>This game might seem easy but it's pretty hard isn't it?</p>
        <button onClick={handleClose}>Want another go?</button>
      </div>
    </div>
  );
}
