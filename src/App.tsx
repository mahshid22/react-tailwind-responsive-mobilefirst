import React from "react";
import { Routes, Route } from "react-router-dom";

// import "./App.css";
import MainLayout from "./layouts/MainLayout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Course from "./pages/Course";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Pricing from "./pages/Pricing";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<Course />} />
      </Route>
    </Routes>
  );
}

// function App() {
//   const [count, setCount] = useState(0);
//   const { bears, increase, deep, increasedep, reset } = useBearStore();
//   console.log("🚀 ~ App ~ deep:", deep);
//   return (
//     <>
//       <h1>Vite + React</h1>
//       <div className="flex flex-col p-2">
//         <button
//           onClick={() => {
//             setCount((count) => count + 1);
//           }}
//           className="rounded-3xl border-2 border-neutral-500 p-3"
//         >
//           count state is {count}
//         </button>
//         <button
//           onClick={() => {
//             increase(5);
//           }}
//           className="rounded-3xl border-2 border-neutral-500 p-3"
//         >
//           zustand state with persist is {bears}
//         </button>
//         <button
//           onClick={() => {
//             increasedep();
//           }}
//           className="rounded-3xl border-2 border-neutral-500 p-3"
//         >
//           dep nested obj zustand state is {deep.nested.obj.count}
//         </button>
//         <button
//           className="rounded-3xl border-2 border-neutral-500 p-3 mt-3"
//           onClick={() => reset()}
//         >
//           reset
//         </button>
//       </div>
//     </>
//   );
// }
