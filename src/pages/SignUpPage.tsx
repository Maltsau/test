// import { useForm } from "react-hook-form";
import styled from "styled-components";

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
	line-height: 26px;
	letter-spacing: -0.2px;
`;

const FormSubtytle = styled.h3`
	font-size: 14px;
	font-weight: 200;
	line-height: 16px;
	letter-spacing: 0.2px;
`;

const InputGroup = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	gap: 17px 13px;
	padding-top: 20px;
`;

const FormLabel = styled.label<{ paddingTop?: string }>`
	padding-top: ${(props) => props.paddingTop};
	font-size: 12px;
	font-weight: 200;
	line-height: 14px;
	display: flex;
	flex-direction: column;
	align-items: baseline;
	gap: 5.3px;
`;

const FormInput = styled.input`
	width: 100%;
	height: 16px;
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
	padding-left: 0.4px;
`;

const DateContainer = styled.div`
	display: flex;
	gap: 9.8px;
`;

const GenderContainer = styled.div`
	font-size: 14px;
	font-weight: 400;
	display: flex;
	align-items: center;
	gap: 19px;
`;

const GenderLabel = styled.div`
	display: flex;
	gap: 6px;
`;

const FormRadio = styled.input`
	margin: 0;
`;

const SubmitContainer = styled.div`
	width: 100%;
	margin-top: 101px;
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

const SignUpButton = styled.div`
	font-family: "PT Sans", sans-serif;
	font-size: 14px;
	line-height: 18px;
	letter-spacing: -0.3px;
	background-color: #5a61ed;
	color: white;
	padding: 7px 25px;
	cursor: pointer;
`;

export default function SignUpPage() {
	const days = new Array(31)
		.fill(1)
		.map((day: number, i: number) => (day = 1 + i));
	const months = [...Array(12).keys()].map((key) =>
		new Date(0, key).toLocaleString("en", { month: "long" })
	);
	const years = new Array(120)
		.fill(1)
		.map((year, i) => (year = 1904 + i))
		.reverse();
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
						<SelectOption selected>American</SelectOption>
						<SelectOption>Russian</SelectOption>
						<SelectOption>Belorussian</SelectOption>
					</FormSelect>
				</FormLabel>
				<FormLabel>
					E-mail
					<FormInput />
				</FormLabel>
				<FormLabel paddingTop="2px">
					Date of Birth
					<DateContainer>
						<FormSelect width="56px">
							{days.map((dayItem) =>
								dayItem === 21 ? (
									<SelectOption key={dayItem} selected>
										{dayItem}
									</SelectOption>
								) : (
									<SelectOption key={dayItem}>{dayItem}</SelectOption>
								)
							)}
						</FormSelect>
						<FormSelect width="91px">
							{months.map((monthItem) =>
								monthItem === "December" ? (
									<SelectOption key={monthItem} selected>
										{monthItem}
									</SelectOption>
								) : (
									<SelectOption key={monthItem}>{monthItem}</SelectOption>
								)
							)}
						</FormSelect>
						<FormSelect width="68px">
							{years.map((yearItem) =>
								yearItem === 1995 ? (
									<SelectOption key={yearItem} selected>
										{yearItem}
									</SelectOption>
								) : (
									<SelectOption key={yearItem}>{yearItem}</SelectOption>
								)
							)}
						</FormSelect>
					</DateContainer>
				</FormLabel>
				<FormLabel paddingTop="2px">
					Gender
					<GenderContainer>
						<GenderLabel>
							<FormRadio type="radio" name="gender"></FormRadio>Male
						</GenderLabel>
						<GenderLabel>
							<FormRadio type="radio" name="gender"></FormRadio>Female
						</GenderLabel>
					</GenderContainer>
				</FormLabel>
				<FormLabel paddingTop="3px">
					Password
					<FormInput />
				</FormLabel>
				<FormLabel paddingTop="3px">
					Confirm Password
					<FormInput />
				</FormLabel>
			</InputGroup>
			<SubmitContainer>
				<LoginTytle>
					Have an account? <LoginLink href="#">Login</LoginLink>
				</LoginTytle>
				<SignUpButton>Complete Signup</SignUpButton>
			</SubmitContainer>
		</UserForm>
	);
}
