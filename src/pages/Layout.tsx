import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	width: 665px;
	height: 481px;
	background-color: white;
	display: flex;
`;

const SignUpColumn = styled.div`
	min-width: 138px;
	background: #5a61ed;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding-bottom: 22.5px;
	padding-right: 6.5px;
`;

const SignUpTytle = styled.h1`
	font-family: "PT Sans", sans-serif;
	line-height: 63px;
	color: white;
	font-size: 49px;
	writing-mode: vertical-lr;
	transform: rotate(180deg);
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
