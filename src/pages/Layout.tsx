import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	width: 665px;
	height: 481px;
	background-color: white;
	display: flex;
	@media (max-width: 665px) {
		min-width: 100vw;
		width: 100%;
		min-height: 100%;
		height: 100%;
	}
	@media (max-width: 400px) {
		flex-direction: column;
		align-items: center;
	}
`;

const SignUpColumn = styled.div`
	min-width: 132px;
	background: #5a61ed;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding-bottom: 22.5px;
	padding-right: 6.5px;
	@media (max-width: 665px) {
		min-width: 0;
		padding: 10px;
	}
	@media (max-width: 400px) {
		width: 100%;
	}
`;

const SignUpTytle = styled.h1`
	font-family: "PT Sans", sans-serif;
	line-height: 63px;
	color: white;
	font-size: 49px;
	writing-mode: vertical-lr;
	transform: rotate(180deg);
	@media (max-width: 400px) {
		transform: rotate(0deg);
		writing-mode: horizontal-tb;
		font-size: 30px;
		line-height: 32px;
	}
`;

export default function Layout() {
	return (
		<Container>
			<SignUpColumn>
				<SignUpTytle>Sign up</SignUpTytle>
			</SignUpColumn>
			<Outlet></Outlet>
		</Container>
	);
}
