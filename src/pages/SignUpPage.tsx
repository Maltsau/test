/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { appearAnimation, shakeAnimation } from "../UI/animation";
import DoneIcon from "../assets/icons/Shape.svg";
import PageBackground from "../assets/images/noun_925550.svg";

import {
	PageTytle,
	PageSubtytle,
	LoginTytle,
	LoginLink,
} from "../UI/common-elements";
import { useState } from "react";

const UserForm = styled.form`
	padding: 39px 22px 33px 21px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background: center no-repeat url("../assets/images/noun_925550.svg");
	background-size: 100%;
	@media (max-width: 610px) {
		align-items: center;
		width: 100%;
	}
	@media (max-width: 400px) {
		width: max-content;
		align-items: stretch;
	}
`;

const InputGroup = styled.div`
	position: relative;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 17px 13px;
	padding-top: 20px;
	@media (max-width: 610px) {
		grid-template-columns: 1fr;
	}
`;

const FormLabel = styled.label<{ paddingTop?: string; isNotValid?: boolean }>`
	padding-top: ${(props) => props.paddingTop};
	font-size: 12px;
	font-weight: 200;
	line-height: 14px;
	display: flex;
	flex-direction: column;
	align-items: baseline;
	gap: 5.3px;
	animation: 1s ${appearAnimation};
	border-bottom: ${({ isNotValid }) =>
		isNotValid ? "2px solid red" : "1px solid #f2f2f2"};
`;

const FormInput = styled.input<{ isNotValid?: boolean }>`
	width: 100%;
	height: 16px;
	border: none;
	font-size: 14px;
	letter-spacing: 0.4px;
	color: ${({ isNotValid }) => (isNotValid ? "red" : "inherit")};
	background: transparent;
`;

const FormSelect = styled.select<{ width?: string }>`
	border: none;
	font-size: 14px;
	width: ${(props) => props.width};
	background: transparent;
`;

const SelectOption = styled.option`
	font-size: 14px;
	background: inherit;
	padding-left: 0.4px;
`;

const InputContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ValidIcon = styled.img<{ isNotValid?: boolean }>`
	opacity: ${({ isNotValid }) => (isNotValid ? "0" : "1")};
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
	@media (max-width: 665px) {
		flex-direction: column;
		margin-top: 50px;
		gap: 20px;
	}
`;

const SignUpButton = styled.div<{ isShaking: boolean }>`
	font-family: "PT Sans", sans-serif;
	font-size: 14px;
	line-height: 18px;
	background-color: #5a61ed;
	color: white;
	padding: 7px 25px;
	cursor: pointer;
	animation-name: ${({ isShaking }) => (isShaking ? shakeAnimation : "none")};
	animation-duration: 0.5s;
`;

const ErrorParagraph = styled.div`
	font-size: 8px;
	position: absolute;
	top: 105%;
	color: red;
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
	const [formFail, setFormFail] = useState(false);
	const days = new Array(31).fill(1).map((_day, i) => (_day = 1 + i));
	const months = [...Array(12).keys()].map((key) =>
		new Date(0, key).toLocaleString("en", { month: "long" })
	);
	const years = new Array(120)
		.fill(1)
		.map((_year, i) => (_year = 1904 + i))
		.reverse();

	const {
		register,
		formState: { errors, isDirty },
		handleSubmit,
		reset,
		resetField,
		watch,
	} = useForm<inputs>({
		mode: "onSubmit",
		defaultValues: {
			nationality: "American",
			email: "alice.miller@yahoo.com",
			day: 21,
			month: "December",
			year: 1995,
		},
	});
	const navigate = useNavigate();
	const onSubmit: SubmitHandler<inputs> = (data) => {
		navigate("/success");
		console.log("data", data);
		reset();
	};

	const onFail: SubmitErrorHandler<inputs> = (error) => {
		if (error.password) {
			resetField("passwordConfirmation");
			resetField("password");
		}
		console.log("errors", error);
		setFormFail(true);
		setTimeout(() => setFormFail(false), 500);
	};
	const watchInputs = watch();
	return (
		<UserForm style={{ backgroundImage: `url(${PageBackground})` }}>
			<PageTytle>New user?</PageTytle>
			<PageSubtytle>Use the form below to create your account.</PageSubtytle>
			<InputGroup>
				<FormLabel isNotValid={!!errors.firstName}>
					First Name
					<InputContainer>
						<FormInput
							isNotValid={!!errors.firstName}
							{...register("firstName", { required: true })}
						/>
						<ValidIcon
							isNotValid={!!errors.firstName || !watchInputs.firstName}
							src={DoneIcon}
							alt="valid-icon"
						/>
					</InputContainer>
				</FormLabel>
				<FormLabel isNotValid={!!errors.lastName}>
					Last Name
					<InputContainer>
						<FormInput
							isNotValid={!!errors.lastName}
							{...register("lastName", { required: true })}
						/>
						<ValidIcon
							isNotValid={!!errors.lastName || !watchInputs.lastName}
							src={DoneIcon}
							alt="valid-icon"
						/>
					</InputContainer>
				</FormLabel>
				<FormLabel>
					Nationality
					<FormSelect
						width="100%"
						{...register("nationality", { required: true })}
					>
						<SelectOption>American</SelectOption>
						<SelectOption>Russian</SelectOption>
						<SelectOption>Belorussian</SelectOption>
					</FormSelect>
				</FormLabel>
				<FormLabel isNotValid={!!errors.email}>
					E-mail
					<InputContainer>
						<FormInput
							isNotValid={!!errors.email}
							{...register("email", {
								required: true,
								pattern:
									/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
							})}
						/>
						<ValidIcon
							isNotValid={!!errors.email}
							src={DoneIcon}
							alt="valid-icon"
						/>
					</InputContainer>
				</FormLabel>
				<FormLabel paddingTop="2px">
					Date of Birth
					<DateContainer>
						<FormSelect width="56px" {...register("day", { required: true })}>
							{days.map((dayItem) => (
								<SelectOption key={dayItem}>{dayItem}</SelectOption>
							))}
						</FormSelect>
						<FormSelect width="91px" {...register("month", { required: true })}>
							{months.map((monthItem) => (
								<SelectOption key={monthItem}>{monthItem}</SelectOption>
							))}
						</FormSelect>
						<FormSelect width="68px" {...register("year", { required: true })}>
							{years.map((yearItem) => (
								<SelectOption key={yearItem}>{yearItem}</SelectOption>
							))}
						</FormSelect>
					</DateContainer>
				</FormLabel>
				<FormLabel paddingTop="2px" isNotValid={!!errors.gender}>
					Gender
					<GenderContainer>
						<GenderLabel>
							<FormRadio
								type="radio"
								value="Male"
								{...register("gender", { required: true })}
							></FormRadio>
							Male
						</GenderLabel>
						<GenderLabel>
							<FormRadio
								type="radio"
								value="Female"
								{...register("gender", { required: true })}
							></FormRadio>
							Female
						</GenderLabel>
					</GenderContainer>
				</FormLabel>
				<FormLabel paddingTop="3px" isNotValid={!!errors.password && isDirty}>
					Password
					<FormInput
						type="password"
						isNotValid={!!errors.password}
						{...register("password", {
							required: true,
							pattern:
								/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
							validate: () =>
								watchInputs.passwordConfirmation
									? watchInputs.password === watchInputs.passwordConfirmation
									: true,
						})}
					/>
				</FormLabel>
				<FormLabel
					paddingTop="3px"
					isNotValid={!!errors.passwordConfirmation && isDirty}
				>
					Confirm Password
					<FormInput
						type="password"
						isNotValid={!!errors.passwordConfirmation}
						{...register("passwordConfirmation", {
							required: true,
						})}
					/>
				</FormLabel>
				{(errors.password?.type === "validate" ||
					errors.passwordConfirmation?.type === "validate") && (
					<ErrorParagraph>{`Passwords does not match`}</ErrorParagraph>
				)}
				{errors.password?.type === "pattern" && (
					<ErrorParagraph>{`password must contain at least 8 characters, uppercase and lowercase letters, and numbers`}</ErrorParagraph>
				)}
			</InputGroup>

			<SubmitContainer>
				<LoginTytle>
					Have an account? <LoginLink href="#">Login</LoginLink>
				</LoginTytle>
				<SignUpButton
					isShaking={formFail}
					onClick={handleSubmit(onSubmit, onFail)}
				>
					Complete Signup
				</SignUpButton>
			</SubmitContainer>
		</UserForm>
	);
}
