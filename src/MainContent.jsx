import ConferienceImage from "./assets/conferience-logo.png";

function MainContent() {
  function handleThoughts() {
    alert("Thoughts");
  }
  function handleIdeas() {
    alert("Ideas");
  }
  function handleQuestions() {
    alert("Questions");
  }
  function handleActivities() {
    alert("Activities");
  }

  return (
    <>
      <div className="container mx-auto ">
        <div className="text-center">
          <h1 className=" align-center text-4xl sm:text-6xl font-bold text-sky-500  ">
            The best collaboration
            <br /> & engagement tool
            <br />
            <span className="text-xl sm:text-5xl text-white pt-4">
              24/7 share your :
            </span>
          </h1>
          <br />
          <h1
            className="text-xl sm:text-4xl font-bold text-red-600 "
            onClick={handleThoughts}
          >
            thoughts
          </h1>
          <br />
          <h1
            className="text-xl sm:text-4xl font-bold text-blue-600"
            onClick={handleIdeas}
          >
            ideas
          </h1>
          <br />
          <h1
            className="text-xl sm:text-4xl font-bold text-yellow-600"
            onClick={handleQuestions}
          >
            questions
          </h1>
          <br />
          <h1
            className="text-xl sm:text-4xl font-bold text-purple-600"
            onClick={handleActivities}
          >
            activities
          </h1>
          <br />
        </div>
        <h1 className="text-4xl sm:text-7xl font-bold text-white text-center ">
          With your team members
        </h1>
      </div>
    </>
  );
}

export default MainContent;
