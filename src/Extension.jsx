import { Button } from "./components/ui/button";
import { Copy, LucideShare } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Extension() {
  const [summaryText, setSummaryText] = useState("");
  const [bulletText, setBulletText] = useState("");

  const handleSummCopy = () => {
    navigator.clipboard.writeText(summaryText);
  };
  const handleBulletCopy = () => {
    navigator.clipboard.writeText(bulletText);
  };

  return (
    <div className="container w-2/6 bg-gray-300 ">
      <div className="flex flex-col space-y-2">
        <div className="flex justify-center font-semibold">Summary</div>

        <div className="mb-2 bg-white rounded">
          <div className="flex flex-col rounded-xl h-52 focus-within:ring-gray-500 ring-0 ring-gray-300 pt-1 px-2 py-2 mx-3 ">
            <div
              className="rounded-xl py-2 px-3 w-full grow ring-gray-300 resize-none focus:outline-none ring-0 focus:ring-0 placeholder-green-800 overflow:scroll"
              style={{ scrollbarWidth: "thin", scrollbarColor: "gray white" }}
            >
              aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa
            </div>
            <div className="flex space-x-2 justify-between items-center ">
              <div className="grid w-1/2"></div>
              <div className="space-x-2 flex items-center">
                <div
                  className="inline-block p-1 hover:cursor-pointer hover:bg-gray-300 hover:text-white text-gray-500  rounded-xl border border-gray-300"
                  id="copyTextButton"
                >
                  <Copy size={16} onClick={handleSummCopy} />
                </div>
                <div className="inline-block p-1 hover:cursor-pointer hover:bg-gray-300 hover:text-white text-gray-500  rounded-xl border border-gray-300">
                  <LucideShare size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center font-semibold">Bullet Points</div>
        <div className="mb-2 bg-white rounded">
          <div className="flex flex-col rounded-xl h-52 focus-within:ring-gray-500 ring-0 ring-gray-300 pt-1 px-2 py-2 mx-3 ">
            <div
              className="rounded-xl py-2 px-3 w-full grow ring-gray-300 resize-none focus:outline-none ring-0 focus:ring-0 placeholder-green-800"
              style={{ scrollbarWidth: "thin", scrollbarColor: "gray white" }}
            />
            <div className="flex space-x-2 justify-between items-center ">
              <div className="grid w-1/2"></div>
              <div className="space-x-2 flex items-center">
                <div
                  className="inline-block p-1 hover:cursor-pointer hover:bg-gray-300 hover:text-white text-gray-500  rounded-xl border border-gray-300"
                  id="copyTextButton"
                >
                  <Copy size={16} onClick={handleBulletCopy} />
                </div>
                <div className="inline-block p-1 hover:cursor-pointer hover:bg-gray-300 hover:text-white text-gray-500  rounded-xl border border-gray-300">
                  <LucideShare size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Select>
          <SelectTrigger className="bg-black text-white rounded-xl mb-2 border-2 ">
            <SelectValue defaultValue={"same"} placeholder="Same Language" />
          </SelectTrigger>
          <div>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="same">Same Language</SelectItem>
                <SelectItem value="greek">Greek</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="italian">Italian</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="german">German</SelectItem>
              </SelectGroup>
            </SelectContent>
          </div>
        </Select>
      </div>
    </div>
  );
}

export default Extension;
