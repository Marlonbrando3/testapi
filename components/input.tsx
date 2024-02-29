"use client";

import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function Input() {
  const optionsRegions: any = useRef();

  const [choosedRegions, setChoosedRegions] = useState<any>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const [options, setOptions] = useState([
    { value: "costa_blanca", name: "Costa Blanca", isAdded: false },
    { value: "costa_del_sol", name: "Costa del Sol", isAdded: false },
    { value: "costa_calida", name: "Costa Calida", isAdded: false },
    { value: "costa_brava", name: "Costa Brava", isAdded: false },
  ]);

  //   const handleManagingList = () => {
  //     console.log("FIRE");
  //     let ref = optionsRegions.current.style.display;
  //     console.log(ref);
  //     if (ref === "none" || ref === "") {
  //       console.log("1");
  //       optionsRegions.current.style.display = "flex";
  //     } else {
  //       console.log("2");
  //       optionsRegions.current.style.display = "none";
  //     }
  //     console.log(ref);
  //   };

  const handleHidingList = (e: any) => {
    optionsRegions.current.style.display = "none";
  };

  const addNewRegion = (e: any) => {
    setChoosedRegions(true);
    setInputValue("");
    input.current.blur();
    input.current.style.width = "5px";
    console.log("adding");
    const region = e.currentTarget.dataset.value;
    const newOption = options.map((c) => {
      if (c.name === region) {
        return {
          ...c,
          isAdded: true,
        };
      } else return c;
    });

    setOptions(newOption);
  };

  const deleteRegion = (e: any) => {
    console.log("deleting");
    input.current.blur();
    const region = e.currentTarget.dataset.value;
    console.log(region);
    const newOption = options.map((c) => {
      if (c.name === region) {
        return {
          ...c,
          isAdded: false,
        };
      } else return c;
    });

    setOptions(newOption);
  };

  const OptionsOnTheList = options.filter((o) => o.isAdded === false);

  let BreakeOptionsToShowMapping = false;

  const [optionIndex, setOptionIndex] = useState(0);

  console.log(optionIndex);

  const optionsToShow = OptionsOnTheList.map((i, index) => {
    return (
      <div
        data-value={i.name}
        onMouseDown={(e) => e.preventDefault()}
        className={`cursor-pointer hover:bg-red-500 hover:text-white pl-[7px]} ${
          optionIndex === index ? "bg-red-500 text-white" : "bg-white"
        } `}
        onClick={(e) => addNewRegion(e)}
      >
        {i.name}
      </div>
    );
  });

  // const optionsToShow = options.map((i, index) => {
  //   let count = options.filter((o) => o.isAdded === true);
  //   console.log(count);

  //   if (
  //     i.isAdded === false &&
  //     count.length < 4 &&
  //     i.name.toLowerCase().includes(inputValue.toLowerCase())
  //   ) {
  //     return (
  //       <div
  //         data-value={i.name}
  //         onMouseDown={(e) => e.preventDefault()}
  //         className="cursor-pointer bg-white hover:bg-red-500 hover:text-white pl-[7px]"
  //         onClick={(e) => addNewRegion(e)}
  //       >
  //         {i.name}
  //       </div>
  //     );
  //   }

  //   if (count.length === 4 && BreakeOptionsToShowMapping === false) {
  //     BreakeOptionsToShowMapping = true;
  //     return <div className="text-gray-500">Nie ma więcej opcji</div>;
  //   }
  // });

  const choosedRegionsToShow = options.map(
    (i) =>
      i.isAdded === true && (
        <div
          key={i.name}
          //   onMouseDown={(e) => e.preventDefault()}
          id="inputRegionChoosedElement"
          className="cursor-pointer bg-red-500 rounded-[5px]  text-white flex w-[130px] py-[1px] px-[3px] items-center ml-[5px] mt-[5px] justify-between"
        >
          {i.name}
          {/* <div
                data-value={i.name}
                onClick={(e) => deleteRegion(e)}
                className="w-[30px] h-[30px] border"
              > */}
          <IoMdClose
            onMouseDown={(e) => e.preventDefault()}
            data-value={i.name}
            onClick={(e) => deleteRegion(e)}
            className="w-[20px] h-[20px]"
          />
          {/* </div> */}
        </div>
      ),
  );

  const input: any = useRef();
  const Regionplaceholder: any = useRef();
  const inputContainer: any = useRef();

  const handleAddingData = (e: any) => {
    const name = e.target.value;
    // setInputValue(e.target.value);

    let newWidth = 12;
    if (name.length === 1) {
      newWidth = 12;
    } else {
      newWidth = name.length * 9;
    }

    setInputValue(e.target.value);
    input.current.style.width = `${newWidth}px`;
    console.log(name);
  };

  function handleKeyDown(e: any) {
    const variable = options.filter((o) => o.isAdded === false);
    console.log(variable.length);
    console.log(optionIndex);

    console.log(e.keyCode);
    if (e.keyCode === 40 && optionIndex < variable.length - 1) {
      setOptionIndex((prevState) => prevState + 1);
    }
    if (e.keyCode === 38 && optionIndex <= variable.length - 1) {
      setOptionIndex((prevState) => prevState - 1);
    }
  }

  //   console.log(inputValue.length === 0 || choosedRegions.length === 0);

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (inputContainer.current?.contains(e.target)) {
        let ref = optionsRegions.current.style.display;

        if (ref === "none" || ref === "") {
          input.current.focus();
          optionsRegions.current.style.display = "flex";
        } else {
          input.current.focus();
          optionsRegions.current.style.display = "none";
        }
        close();
      } else {
        optionsRegions.current.style.display = "none";
      }
    };

    document.addEventListener("click", handleOutsideClick, false);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleOutsideClick, false);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  console.log(choosedRegionsToShow);

  return (
    <div>
      <div ref={inputContainer} className="w-[330px] flex border">
        <div id="inputContainer" className="flex flex-wrap items-center pb-[4px] w-[330px]">
          {inputValue.length === 0 && choosedRegions === false && (
            <p
              id="inputContainer"
              ref={Regionplaceholder}
              className="absolute ml-[5px] text-gray-400"
            >
              Wybierz region...
            </p>
          )}
          {choosedRegionsToShow}
          <input
            autoComplete="off"
            autoCorrect="false"
            ref={input}
            id="DataInput"
            value={inputValue}
            onChange={(e) => handleAddingData(e)}
            className="w-[10px] outline-none ml-[5px] mt-[5px]"
          />
        </div>
        <div className="right-0 border-l my-[4px] flex items-center justify-center w-[30px] cursor-pointer">
          <IoIosArrowDown className="w-full h-full" />
        </div>
      </div>
      <div
        ref={optionsRegions}
        className="hidden flex-col my-[4px] shadow-md rounded-[5px] overflow-hidden clear-both border"
      >
        {optionsToShow}
      </div>
    </div>
  );
}
