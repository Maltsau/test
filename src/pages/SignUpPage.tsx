/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DoneIcon from "../assets/icons/Shape.svg";

import {
	PageTytle,
	PageSubtytle,
	LoginTytle,
	LoginLink,
} from "../UI/common-elements";

const UserForm = styled.form`
	width: 100%;
	padding: 39px 22px 33px 22px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
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

const FormInput = styled.input<{ isNotValid?: boolean }>`
	height: 16px;
	border: none;
	font-size: 14px;
	letter-spacing: 0.4px;
	color: ${({ isNotValid }) => (isNotValid ? "red" : "inherit")};
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

const EmailContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 62px;
`;

const ValidIcon = styled.img<{ isNotValid?: boolean }>`
	display: ${({ isNotValid }) => (isNotValid ? "none" : "block")};
	margin-left: 5px;
	width: 11px;
	height: 8px;
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

type inputs = {
	firstName: string;
	lastName: string;
	nationality: string;
	email: string;
	day: number;
	month: string;
	year: number;
	gender: "Male" | "Female";
	password: string;
	passwordConfirmation: string;
};

export default function SignUpPage() {
	const days = new Array(31).fill(1).map((day, i) => (day = 1 + i));
	const months = [...Array(12).keys()].map((key) =>
		new Date(0, key).toLocaleString("en", { month: "long" })
	);
	const years = new Array(120)
		.fill(1)
		.map((year, i) => (year = 1904 + i))
		.reverse();

	const {
		register,
		formState: { isValid },
		handleSubmit,
		reset,
	} = useForm<inputs>({
		mode: "all",
		defaultValues: {
			firstName: "Alice",
			lastName: "Miller",
			nationality: "American",
			email: "alice.miller@yahoo.com",
			day: 21,
			month: "December",
			year: 1995,
		},
	});
	const navigate = useNavigate();
	const onSubmit: SubmitHandler<inputs> = (/* data */) => {
		navigate("/success");
		reset();
	};

	return (
		<UserForm>
			<PageTytle>New user?</PageTytle>
			<PageSubtytle>Use the form below to create your account.</PageSubtytle>
			<InputGroup>
				<FormLabel>
					First Name
					<FormInput {...register("firstName")} />
				</FormLabel>
				<FormLabel>
					Last Name
					<FormInput {...register("lastName")} />
				</FormLabel>
				<FormLabel>
					Nationality
					<FormSelect width="100%" {...register("nationality")}>
						<SelectOption>American</SelectOption>
						<SelectOption>Russian</SelectOption>
						<SelectOption>Belorussian</SelectOption>
					</FormSelect>
				</FormLabel>
				<FormLabel>
					E-mail
					<EmailContainer>
						<FormInput
							isNotValid={!isValid}
							{...register("email", {
								required: true,
								pattern:
									/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
							})}
						/>
						<ValidIcon isNotValid={!isValid} src={DoneIcon} alt="valid-icon" />
					</EmailContainer>
				</FormLabel>
				<FormLabel paddingTop="2px">
					Date of Birth
					<DateContainer>
						<FormSelect width="56px" {...register("day")}>
							{days.map((dayItem) => (
								<SelectOption key={dayItem}>{dayItem}</SelectOption>
							))}
						</FormSelect>
						<FormSelect width="91px" {...register("month")}>
							{months.map((monthItem) => (
								<SelectOption key={monthItem}>{monthItem}</SelectOption>
							))}
						</FormSelect>
						<FormSelect width="68px" {...register("year")}>
							{years.map((yearItem) => (
								<SelectOption key={yearItem}>{yearItem}</SelectOption>
							))}
						</FormSelect>
					</DateContainer>
				</FormLabel>
				<FormLabel paddingTop="2px">
					Gender
					<GenderContainer>
						<GenderLabel>
							<FormRadio
								type="radio"
								value="Male"
								{...register("gender")}
							></FormRadio>
							Male
						</GenderLabel>
						<GenderLabel>
							<FormRadio
								type="radio"
								value="Female"
								{...register("gender")}
							></FormRadio>
							Female
						</GenderLabel>
					</GenderContainer>
				</FormLabel>
				<FormLabel paddingTop="3px">
					Password
					<FormInput {...register("password")} />
				</FormLabel>
				<FormLabel paddingTop="3px">
					Confirm Password
					<FormInput {...register("passwordConfirmation")} />
				</FormLabel>
			</InputGroup>
			<SubmitContainer>
				<LoginTytle>
					Have an account? <LoginLink href="#">Login</LoginLink>
				</LoginTytle>
				<SignUpButton onClick={handleSubmit(onSubmit)}>
					Complete Signup
				</SignUpButton>
			</SubmitContainer>
		</UserForm>
	);
}
