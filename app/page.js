'use client'

import FeedPage from "./components/FeedPage";
import Navbar from "./components/Navbar";
import WelcomePage from "./components/WelcomePage";
import { UserAuth } from "./context/AuthContext";


export default function Home() {

  const { user } = UserAuth();

  return (
    <main>
      <Navbar/>
      {!user ? (<WelcomePage/>) : 
      (<FeedPage/>)}
    </main>
  )
}
