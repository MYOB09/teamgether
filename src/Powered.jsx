import ConferienceImage from "./assets/conferience-logo.png";
function Powered() {
  return (
    <div className="flex  items-center text-2xl justify-center w-full bg-black/30 ">
      <h1 className="text-white font-bold flex-col hidden sm:block">
        powered by:{" "}
      </h1>
      <img src={ConferienceImage} className="h-24" />
    </div>
  );
}
export default Powered;
