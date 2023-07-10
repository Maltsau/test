/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import DoneIcon from "../assets/icons/Shape.svg";
import PageBackground from "../assets/images/noun_925550.svg";

import {
	PageTytle,
	PageSubtytle,
	LoginTytle,
	LoginLink,
} from "../UI/common-elements";
import { warning } from "react-admin";

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
	border-bottom: ${({ isNotValid }) =>
		isNotValid ? "2px solid red" : "1px solid #f2f2f2"};
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

const SignUpButton = styled.div`
	font-family: "PT Sans", sans-serif;
	font-size: 14px;
	line-height: 18px;
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
		formState: { isValid, errors, isDirty },
		handleSubmit,
		reset,
		watch,
	} = useForm<inputs>({
		mode: "all",
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
		console.log("form", watchInputs);
		reset();
	};
	const watchInputs = watch();

	return (
		<UserForm style={{ backgroundImage: `url(${PageBackground})` }}>
			<PageTytle>New user?</PageTytle>
			<PageSubtytle>Use the form below to create your account.</PageSubtytle>
			<InputGroup>
				<FormLabel isNotValid={!!errors.firstName}>
					First Name
					<FormInput
						isNotValid={!!errors.firstName}
						{...register("firstName", { required: true })}
					/>
				</FormLabel>
				<FormLabel isNotValid={!!errors.lastName}>
					Last Name
					<FormInput
						isNotValid={!!errors.lastName}
						{...register("lastName", { required: true })}
					/>
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
					<EmailContainer>
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
					</EmailContainer>
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
						isNotValid={
							!!errors.passwordConfirmation &&
							watchInputs.password !== watchInputs.passwordConfirmation
						}
						{...register("passwordConfirmation", {
							required: true,
							pattern:
								/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
						})}
					/>
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
