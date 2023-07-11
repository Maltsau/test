import styled from "styled-components";

const PageTytle = styled.h2<{ padding?: string }>`
	font-size: 22px;
	font-weight: 600;
	line-height: 26px;
	letter-spacing: -0.2px;
	padding: ${(props) => props.padding};
`;

const PageSubtytle = styled.h3<{ padding?: string }>`
	font-size: 14px;
	font-weight: 200;
	line-height: 16px;
	letter-spacing: 0.2px;
	padding: ${(props) => props.padding};
`;

const LoginTytle = styled.span<{ padding?: string }>`
	font-size: 13px;
	display: flex;
	padding: ${(props) => props.padding};
`;

const LoginLink = styled.a`
	color: #5a61ed;
	text-decoration: underline;
	cursor: pointer;
	margin-left: 2px;
`;

export { PageTytle, PageSubtytle, LoginTytle, LoginLink };
