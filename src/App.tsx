// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import SignInPage from "./pages/SignUpPage";

function App() {
	return (
		<Routes>
			<Route path={"/"} element={<Layout />}>
				<Route index element={<SignInPage />}></Route>
			</Route>
		</Routes>
	);
}

export default App;
