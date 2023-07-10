import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import {
	PageTytle,
	PageSubtytle,
	LoginTytle,
	LoginLink,
} from "../UI/common-elements";

const Container = styled.div`
	width: 100%;
	padding: 38px 22px 32px 21px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export default function SuccessPage() {
	const navigate = useNavigate();
	return (
		<Container
			onClick={() => {
				navigate("/");
			}}
		>
			<PageTytle padding="178px 0 0 43px">Thank You!</PageTytle>
			<PageSubtytle padding="11px 0 0 43px">you registered!</PageSubtytle>
			<LoginTytle padding="152px 0 0 0">
				Have an account? <LoginLink href="#">Login</LoginLink>
			</LoginTytle>
		</Container>
	);
}
