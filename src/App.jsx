import { useState } from "react";
import { Data } from "./Data/Data";
import React from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

export function App() {
  const users = Data();
 // Aquí llamas a Data() para obtener el array de usuarios
 
  // const [name, setName] = useState("matheus");

  // const handleClick = () => {
  //   setName("matiuskaPedrovska");
  // };

  return (
    <section className="App">
      {users.map((user) => {
        const { id, userName, name, isFollowing, img } = user;
        return (
          <TwitterFollowCard
            key={id}
            userName={userName}
            initialIsFollowing={isFollowing}
            img={img}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
      {/* <button onClick={handleClick}>Cambiar Nombre</button> */}
    </section>
  );
}

{
  /* <TwitterFollowCard userName={name} initialIsFollowing>
        Matheus Ribeiro
      </TwitterFollowCard>

      <TwitterFollowCard userName="luu.dlg">
        Luana Deliege
      </TwitterFollowCard>

      <TwitterFollowCard  userName="elonMusk"  initialIsFollowing>
        Elon Musk
      </TwitterFollowCard>
      
      <TwitterFollowCard  userName="tumama">
        Tu Mama
      </TwitterFollowCard> */
}

// esta es otra forma de hacerlo pero puede ser poco optima

// import React from "react";
// import "./App.css";
// import { TwitterFollowCard } from "./TwitterFollowCard";

// export function App() {
//   const matheus = { isFollowing: true, userName: "matheus" };
//   const luana = { isFollowing: false, userName: "luu.dlg" };
//   const elonMusk = { isFollowing: true, userName: "elonMusk" };
//   const tumama = { isFollowing: false, userName: "tumama" };

//   return (
//     <section className="App">
//       <TwitterFollowCard {...matheus}>Matheus Ribeiro</TwitterFollowCard>

//       <TwitterFollowCard {...luana}>Luana Deliege</TwitterFollowCard>

//       <TwitterFollowCard {...elonMusk}>Elon Musk</TwitterFollowCard>

//       <TwitterFollowCard {...tumama}>Tu Mama</TwitterFollowCard>
//     </section>
//   );
// }

// {...} = rest operator = pasale cada de las propiedades del objeto como si fuera una prop
