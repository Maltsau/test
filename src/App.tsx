// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import SignInPage from "./pages/SignUpPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
	return (
		<Routes>
			<Route path={"/"} element={<Layout />}>
				<Route index element={<SignInPage />}></Route>
				<Route path={"/success"} element={<SuccessPage />}></Route>
			</Route>
		</Routes>
	);
}

export default App;
