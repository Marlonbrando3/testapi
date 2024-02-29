import React from "react";
import Input from "@/components/input";
import Router from "@/components/router";

export default async function Home() {
  // console.log("start");

  //DeepL API
  // const query = JSON.stringify({

  //   text: ["Hello my dear baby"],
  //   target_lang: "PL",
  // });
  // const data = await fetch("https://api-free.deepl.com/v2/translate", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "DeepL-Auth-Key a9d9a70f-98ba-6efb-3694-a4b4afea5db1:fx",
  //   },
  //   body: query,
  // });
  // const date = await data.json();
  // console.log(date);
  // console.log("end");

  // const handleInmovillaApi = async () => {

  try {
    let data = await fetch("https://procesos.inmovilla.com/api/v1/propiedades/?cod_ofer=COR2733", {
      // method: "GET",
      headers: {
        "Content-Type": "application/json",
        Token: "91B94ECFB80E9720F77635DB3779F079",
      },
    });

    const lolo = await data.json();
    console.log(lolo);
  } catch (err) {
    console.log("error " + (await err));
  }

  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <button onClick={handleFetch}>lalalal</button> */}
      {/* <p>{date}</p> */}
      {/* <Input />
      <Router /> */}
    </main>
  );
}
