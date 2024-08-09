import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing userName="matheus">
        Matheus Ribeiro
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing={false} userName="luu.dlg">
        Luana Deliege
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="elonMusk">
        Elon Musk
      </TwitterFollowCard>
      
      <TwitterFollowCard isFollowing={false} userName="tumama">
        Tu Mama
      </TwitterFollowCard>
    </section>
  );
}
