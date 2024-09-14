import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GoldenRetrieverPage from "./pages/GoldenRetrieverPage";
import GermanShepherdPage from "./pages/GermanShepherdPage";
import BullDog from "./pages/BullDog";
import PoodlePage from "./pages/PoodlePage";
import BeaglePage from "./pages/BeaglePage";
import Siamese from "./pages/Siamese";
import PersianPage from "./pages/PersianPage";
import MaineCoonPage from "./pages/MaineCoonPage";
import BengalPage from"./pages/BengalPage";
import RagdollPage from "./pages/RagdollPage";
import KhaoManee from"./pages/KhaoManee";
import PomeranianPage from "./pages/PomeranianPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  
  {
    path: "/breeds/golden",
    element: <GoldenRetrieverPage />,
  },
  {
    path: "/breeds/germany",
    element: <GermanShepherdPage />,
  },
  {
    path: "/breeds/bullDog",
    element: <BullDog />,
  },
  {
    path: "/breeds/poodle",
    element: <PoodlePage />,
  },
  {
    path: "/breeds/beagle",
    element: <BeaglePage />,
  },
  {
    path: "/breeds/siamese",
    element: <Siamese />,
  },
  {
    path: "/breeds/persian",
    element: <PersianPage />,
  },
  {
    path: "/breeds/mainecoon",
    element: <MaineCoonPage />,
  },
  {
    path: "/breeds/bengal",
    element: <BengalPage />,
  },
  {
    path: "/breeds/ragdoll",
    element: <RagdollPage/>,
  },
  {
    path: "/breeds/khaomanee",
    element: <KhaoManee />,
  },
  {
    path: "/breeds/pomeranian",
    element: <PomeranianPage />,
  },
 

]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
