import "./BG.css";

function Background() {
  return (
    <>
      <div className="background-container">
        <div className="shining"></div>
        <img
          className="ball"
          src="../src/assets/ball.png"
          width={100}
          height={100}
          alt=""
        />
        <img
          className="ball2"
          src="../src/assets/ball.png"
          width={20}
          height={20}
          alt=""
        />
        <img
          className="ring"
          src="../src/assets/ring.png"
          width={200}
          height={200}
          alt=""
        />
        <img
          className="ring2"
          src="../src/assets/ring.png"
          width={100}
          height={100}
          alt=""
        />
        <img
          className="square dark"
          src="../src/assets/square.png"
          width={100}
          height={100}
          alt=""
        />{" "}
        <img
          className="square3 dark"
          src="../src/assets/square.png"
          width={100}
          height={100}
          alt=""
        />{" "}
        <img
          className="square2 dark"
          src="../src/assets/square.png"
          width={100}
          height={100}
          alt=""
        />
        <img
          className="square white"
          src="../src/assets/square-white.png"
          width={100}
          height={100}
          alt=""
        />
        <img
          className="square2 white"
          src="../src/assets/square-white.png"
          width={50}
          height={50}
          alt=""
        />
        <img
          className="ball3 "
          src="../src/assets/greenball.png"
          width={100}
          height={100}
          alt=""
        />
      </div>
    </>
  );
}

export default Background;
