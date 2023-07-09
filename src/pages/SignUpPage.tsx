// import { useForm } from "react-hook-form";
import styled from "styled-components";

const months = Array.from({ length: 12 }, (e, i) => {
	return new Date(null, i + 1, null).toLocaleDateString("en", {
		month: "short",
	});
});

const UserForm = styled.form`
	width: 100%;
	padding: 39px 22px 33px 22px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const FormTytle = styled.h2`
	font-size: 22px;
	font-weight: 600;
`;

const FormSubtytle = styled.h3`
	font-size: 14px;
	font-weight: 200;
`;

const InputGroup = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	row-gap: 16px;
	column-gap: 13px;
	padding-top: 20px;
`;

const FormLabel = styled.label`
	font-size: 12px;
	font-weight: 100;
	display: flex;
	flex-direction: column;
	align-items: baseline;
	gap: 6.3px;
`;

const FormInput = styled.input`
	width: 100%;
	border: none;
	font-size: 14px;
`;

const FormSelect = styled.select<{ width?: string }>`
	border: none;
	font-size: 14px;
	width: ${(props) => props.width};
	background: inherit;
`;

const SelectOption = styled.option`
	font-size: 14px;
	background: inherit;
`;

const DateContainer = styled.div`
	display: flex;
	gap: 9.8px;
`;

const GenderContainer = styled.div`
	font-size: 14px;
	font-weight: 400;
	display: flex;
	gap: 19px;
`;

const GenderLabel = styled.div`
	display: flex;
	gap: 6px;
`;

const SubmitContainer = styled.div`
	width: 100%;
	margin-top: 104px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LoginTytle = styled.span`
	font-size: 13px;
	display: flex;
`;

const LoginLink = styled.a`
	color: #5a61ed;
	text-decoration: underline;
	cursor: pointer;
	margin-left: 2px;
`;

const LoginButton = styled.div`
	font-family: "PT Sans", sans-serif;
	font-size: 14px;
	background-color: #5a61ed;
	color: white;
	padding: 7px 25px;
	cursor: pointer;
`;

export default function SignUpPage() {
	console.log(months);
	return (
		<UserForm>
			<FormTytle>New user?</FormTytle>
			<FormSubtytle>Use the form below to create your account.</FormSubtytle>
			<InputGroup>
				<FormLabel>
					First Name
					<FormInput />
				</FormLabel>
				<FormLabel>
					Last Name
					<FormInput />
				</FormLabel>
				<FormLabel>
					Nationality
					<FormSelect width="100%">
						<SelectOption>American</SelectOption>
					</FormSelect>
				</FormLabel>
				<FormLabel>
					E-mail
					<FormInput />
				</FormLabel>
				<FormLabel>
					Date of Birth
					<DateContainer>
						<FormSelect width="56px"></FormSelect>
						<FormSelect width="91px"></FormSelect>
						<FormSelect width="68px"></FormSelect>
					</DateContainer>
				</FormLabel>
				<FormLabel>
					Gender
					<GenderContainer>
						<GenderLabel>
							<input type="radio" name="gender"></input>Male
						</GenderLabel>
						<GenderLabel>
							<input type="radio" name="gender"></input>Female
						</GenderLabel>
					</GenderContainer>
				</FormLabel>
				<FormLabel>
					Password
					<FormInput />
				</FormLabel>
				<FormLabel>
					Confirm Password
					<FormInput />
				</FormLabel>
			</InputGroup>
			<SubmitContainer>
				<LoginTytle>
					Have an account? <LoginLink>Login</LoginLink>
				</LoginTytle>
				<LoginButton>Complete Signup</LoginButton>
			</SubmitContainer>
		</UserForm>
	);
}
