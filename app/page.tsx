"use client"
import Button from "@/components/button";
import { LineButtons } from "@/components/content-button";
import Display from "@/components/display";
import RadioGroup, { RadioList } from "@/components/radio-group";
import { useState } from "react";

type ButtonConfig = {
  buttonsPrimary?:Array<string>,
  buttonsSecond?:Array<string>,
  buttonsDefault?:Array<string>,
  primaryCss?: string,
  secundCss?: string,
  defaultCss: string
}

type System = {
  id: string,
  displayCss: string,
  contentCss: string,
  lineButtonsCss: string,
  buttonConfig: ButtonConfig
}
const systems: Array<System> = [
  {
    id: "Windows",
    displayCss: "bg-zinc-900",
    contentCss: "bg-zinc-900 text-white p-0.5 roboto",
    lineButtonsCss: "",
    buttonConfig: {
      defaultCss: "m-px rounded-md text-gray-200 bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-900 ",
      primaryCss: "m-px rounded-md bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-800 ",
      secundCss: "m-px rounded-md bg-sky-400 text-black text-2xl hover:bg-sky-600 active:bg-sky-300",
      buttonsDefault: ["0", ",", "3", "2", "1", "6", "5", "4", "9", "8", "7"],
      buttonsPrimary: ["+", "-", "*", "/", "c"],
      buttonsSecond: ["="]
    },
  },
  {
    id: "Mac",
    displayCss: "bg-zinc-700",
    contentCss: "bg-zinc-700 text-stone-200 p-0.8 roboto" ,
    lineButtonsCss: "",
    buttonConfig: {
      defaultCss: "m-px bg-neutral-500 hover:bg-neutral-700 active:bg-neutral-400 ",
      primaryCss: "m-px bg-zinc-600 hover:bg-zinc-800 active:bg-gray-500 ",
      secundCss: "m-px bg-orange-400 hover:bg-orange-500 active:bg-orange-300 ",
      buttonsDefault: ["0", ",", "3", "2", "1", "6", "5", "4", "9", "8", "7"],
      buttonsPrimary: ["c"],
      buttonsSecond: ["=", "+", "-", "*", "/"]
    }
  },
    {
      id: "Android",
      displayCss: "bg-black",
      contentCss: "bg-black roboto",
      lineButtonsCss: "pt-1",
      buttonConfig: {
        defaultCss: "m-0.5 bg-neutral-900 hover:bg-zinc-800 active:bg-gray-400 text-gray-200 rounded-full ",
        primaryCss: "m-0.5 bg-zinc-800 text-green-400 hover:bg-zinc-900 active:bg-zinc-600 rounded-full ",
        secundCss: "m-0.5 bg-lime-700 hover:bg-lime-800 active:bg-lime-400 text-gray-200 rounded-full",
        buttonsDefault: ["0", ",", "3", "2", "1", "6", "5", "4", "9", "8", "7"],
        buttonsPrimary: ["c", "+", "-", "*", "/"],
        buttonsSecond: ["="]
      }
    },
      {
        id: "Ios",
        displayCss: "bg-black",
        contentCss: "bg-black p-0.5 roboto",
        lineButtonsCss: "pt-1",
        buttonConfig: {
          defaultCss: "m-0.5 bg-zinc-800 hover:bg-zinc-900 active:bg-neutral-500  text-gray-200 rounded-full",
          primaryCss: "m-0.5 bg-neutral-400 text-black hover:bg-neutral-500 active:bg-zinc-300  rounded-full",
          secundCss: "m-0.5 bg-amber-500 hover:amber-600 active:bg-orange-300   text-gray-200 rounded-full",
          buttonsDefault: ["0", ",", "3", "2", "1", "6", "5", "4", "9", "8", "7"],
          buttonsPrimary: ["c"],
          buttonsSecond: ["=", "+", "-", "*", "/"]
        }
      }
];

export default function Home() {
  const [idSystem, setIdSystem] = useState(0);
  
  function getSystem(): System {
    return systems[idSystem];
  }
  
  function getButtonCss(value: string, size: number): string {
    const config = getSystem().buttonConfig;
    let returnCss = config.defaultCss;
    const sizeCss = getSize(size);
    if (config.buttonsPrimary?.includes(value)) {
      returnCss = config.primaryCss || "";    
    } else if (config.buttonsSecond?.includes(value)) {
      returnCss = config.secundCss || "";
    }
    return returnCss.concat(" ").concat(sizeCss);
  }
  
  function getSize(size: number): string {
    if (size == 2) {
        return "w-1/2";//50%
    } else if (size == 3) {
        return "w-3/4 cursor-not-allowed ";//75%
    } 
    return "min-w-16";//25%
  }

  function isButtonRed(): string {    
    return idSystem.valueOf() == 2 ? " button-red" : "";
  }

  function getRadios(): Array<RadioList> {
    return systems.map((s: System) => {
      return {
        id: s.id,
        name: s.id
      }});
  }
  return (
    <div className="main bg-zinc-600 h-screen w-screen flex flex-col justify-center items-center">
      <div className="menu w-full flex h-16 justify-center items-center ">
        <RadioGroup list={getRadios()} onClick={setIdSystem}/>
      </div>
      <div className={getSystem().contentCss}>
        <Display addClass={getSystem().displayCss}/>
        <div className="content-buttons shadow-zinc-950 mt-2">
        <LineButtons addClass={getSystem().lineButtonsCss}>
            <Button text="Limpar" value="c" addClass={getButtonCss("c", 3).concat(isButtonRed())}/>
            <Button text="÷" value="/" addClass={getButtonCss("/", 1)} />
          </LineButtons>
          <LineButtons addClass={getSystem().lineButtonsCss}>
            <Button text="7" value="7" addClass={getButtonCss("7", 1)}/>
            <Button text="8" value="8" addClass={getButtonCss("8", 1)}/>
            <Button text="9" value="9" addClass={getButtonCss("9", 1)}/>
            <Button text="+" value="+" addClass={getButtonCss("+", 1)}/>
          </LineButtons>
          <LineButtons addClass={getSystem().lineButtonsCss}>
            <Button text="4" value="4" addClass={getButtonCss("4", 1)}/>
            <Button text="5" value="5" addClass={getButtonCss("5", 1)}/>
            <Button text="6" value="6" addClass={getButtonCss("6", 1)}/>
            <Button text="X" value="*" addClass={getButtonCss("*", 1)}/>
          </LineButtons>
          <LineButtons addClass={getSystem().lineButtonsCss}>
            <Button text="1" value="1" addClass={getButtonCss("1", 1)}/>
            <Button text="2" value="2" addClass={getButtonCss("2", 1)}/>
            <Button text="3" value="3" addClass={getButtonCss("3", 1)}/>
            <Button text="-" value="-" addClass={getButtonCss("-", 1)}/>
          </LineButtons>
          <LineButtons addClass={getSystem().lineButtonsCss}>
            <Button text="0" value="0"  addClass={getButtonCss("0", 2)}/>
            <Button text="," value=","  addClass={getButtonCss(",", 1)} />
            <Button text="=" value="="  addClass={getButtonCss("=", 1)} />
          </LineButtons>
        </div>
       </div>
    </div>
  );
}
