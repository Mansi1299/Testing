import { useState } from "react";
function IncDecCounter() {
  let [num, setNum] = useState(0);
  let incNum = () => {
    console.log("calllllll")
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  return (
    <>
      <div className="col-xl-1">
        <div className="input-group">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={decNum}
              data-testid="button"
            >
              -
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            value={num}
            onChange={handleChange}
            style={{margin:"20px"}}
            data-testid="valid-form"
          
          />
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={incNum}
              data-testid="buttonmy"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default IncDecCounter;
