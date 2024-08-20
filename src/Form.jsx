import { Button } from "./components/ui/button";

function Form() {
  return (
    <div className="text-center space-y-4 " id="form">
      <div>
        <span className="text-3xl font-bold">
          More to come... Will you be the first one to know?
        </span>
      </div>
      <div>
        <span className="text-xl font-bold">
          Enter your name, email and your business title:
        </span>
      </div>
      <div className="">
        <span className="font-semibold">Name:</span>
        <div>
          <input
            name="name"
            type="text"
            className="border-2 rounded-lg sm:h-12 sm:w-4/12 py-2"
            placeholder="FullName"
          ></input>
        </div>
      </div>
      <div>
        <span className="font-semibold">Email:</span>
        <div>
          <input
            name="email"
            type="email"
            className="border-2 rounded-lg sm:h-12 sm:w-4/12 py-2"
            placeholder="Email"
          ></input>
        </div>
      </div>
      <div>
        <span className="font-semibold">Business Title:</span>
        <div className="">
          <input
            name="businesstitle"
            type="text"
            className="border-2 rounded-lg sm:h-12 sm:w-4/12 py-2"
            placeholder="Business Title"
          ></input>
        </div>
      </div>
      <div>
        <a href="https://conferience.com/privacy" target="_blank">
          <span className="underline text-blue-300 hover:cursor-pointer hover:text-purple-500">
            Privacy Policy
          </span>
        </a>
      </div>
      <Button className="bg-blue-400 h-12 w-3/12 py-2 hover:bg-blue-300">
        Submit
      </Button>
    </div>
  );
}

export default Form;
