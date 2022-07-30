export default function TesEditor() {
  const el = document.getElementById("textarea1") as HTMLElement;
  function f1() {
    //function to make the text bold using DOM method
    el.style.fontWeight = "bold";
  }

  function f2() {
    //function to make the text italic using DOM method
    el.style.fontStyle = "italic";
  }

  function f3() {
    //function to make the text alignment left using DOM method
    el.style.textAlign = "left";
  }

  function f4() {
    //function to make the text alignment center using DOM method
    el.style.textAlign = "center";
  }

  function f5() {
    //function to make the text alignment right using DOM method
    el.style.textAlign = "right";
  }

  function f6() {
    //function to make the text in Uppercase using DOM method
    el.style.textTransform = "uppercase";
  }

  function f7() {
    //function to make the text in Lowercase using DOM method
    el.style.textTransform = "lowercase";
  }

  function f8() {
    //function to make the text capitalize using DOM method
    el.style.textTransform = "capitalize";
  }

  function f9() {
    //function to make the text back to normal by removing all the methods applied
    //using DOM method
    el.style.fontWeight = "normal";
    el.style.textAlign = "left";
    el.style.fontStyle = "normal";
    el.style.textTransform = "capitalize";
    el.value = "";
  }

  return (
    <section className="">
      <h1 className="shadow-sm">TEXT EDITOR</h1>
      <div className="flex-box">
        <div className="row">
          <div className="col">
            <button
              type="button"
              onClick={f1}
              className=" shadow-sm btn btn-outline-secondary"
              data-toggle="tooltip"
              data-placement="top"
              title="Bold Text"
            >
              Bold
            </button>
            <button
              type="button"
              onClick={f2}
              className="shadow-sm btn btn-outline-success"
              data-toggle="tooltip"
              data-placement="top"
              title="Italic Text"
            >
              Italic
            </button>
            <button
              type="button"
              onClick={f3}
              className=" shadow-sm btn btn-outline-primary"
              data-toggle="tooltip"
              data-placement="top"
              title="Left Align"
            >
              <i className="fas fa-align-left"></i>
            </button>
            <button
              type="button"
              onClick={f4}
              className="btn shadow-sm btn-outline-secondary"
              data-toggle="tooltip"
              data-placement="top"
              title="Center Align"
            >
              <i className="fas fa-align-center"></i>
            </button>
            <button
              type="button"
              onClick={f5}
              className="btn shadow-sm btn-outline-primary"
              data-toggle="tooltip"
              data-placement="top"
              title="Right Align"
            >
              <i className="fas fa-align-right"></i>
            </button>
            <button
              type="button"
              onClick={f6}
              className="btn shadow-sm btn-outline-secondary"
              data-toggle="tooltip"
              data-placement="top"
              title="Uppercase Text"
            >
              Upper Case
            </button>
            <button
              type="button"
              onClick={f7}
              className="btn shadow-sm btn-outline-primary"
              data-toggle="tooltip"
              data-placement="top"
              title="Lowercase Text"
            >
              Lower Case
            </button>
            <button
              type="button"
              onClick={f8}
              className="btn shadow-sm btn-outline-primary"
              data-toggle="tooltip"
              data-placement="top"
              title="Capitalize Text"
            >
              Capitalize
            </button>
            <button
              type="button"
              onClick={f9}
              className="btn shadow-sm btn-outline-primary side"
              data-toggle="tooltip"
              data-placement="top"
              title="Tooltip on top"
            >
              Clear Text
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-3 col-sm-3"></div>
        <div className="col-md-6 col-sm-9">
          <div className="flex-box">
            <textarea
              id="textarea1"
              className="input shadow"
              name="name"
              placeholder="Your text here "
            ></textarea>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </section>
  );
}
