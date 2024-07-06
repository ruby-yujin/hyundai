import * as Yup from "yup";

const SignUpIdRegex = /^(?=.*[A-Z])[A-Za-z\d@$!%*?&]{4,}$/;

const SignUpPasswordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{4,}$/;

const phoneRegex = /[0-9]{3}-[0-9]{4}-[0-9]{4}/;

const LoginSchema = Yup.object().shape({
  loginMemberId: Yup.string().required("사원번호는 필수입니다"),
  loginMemberPhone: Yup.string().required("휴대폰번호는 필수입니다"),
  loginMemberPassword: Yup.string().required("비밀번호는 필수입니다"),
});

// const SignupSchema = Yup.object().shape({
//   loginId: Yup.string()
//     .matches(
//       SignUpIdRegex,
//       "사원번호는 총8자리입니다"
//     )
//     .required("사원번호는 필수입니다"),

//   password: Yup.string()
//     .matches(
//       SignUpPasswordRegex,
//       "비밀번호는 최소 4자리이상 대문자와 숫자를 포함하여야 합니다"
//     )
//     .required("비밀번호는 필수입니다"),

//   passwordCheck: Yup.string()
//     .oneOf([Yup.ref("password"), undefined], "비밀번호가 일치하지 않습니다")
//     .required("비밀번호 확인은 필수입니다."),
//   email: Yup.string()
//     .email("올바른 이메일 형식을 입력하세요")
//     .required("이메일은 필수입니다."),
//   phone: Yup.string()
//     .matches(
//       phoneRegex,
//       "전화번호 형식에 맞지 않습니다. 000-0000-0000 형식으로 입력해주세요."
//     )
//     .required("핸드폰번호는 필수입니다."),
//   nickName: Yup.string().required("닉네임은 필수입니다."),
//   zipCode: Yup.string().required("우편번호는 필수입니다."),
//   address: Yup.string().required("기본주소는 필수입니다."),
//   addressDtl: Yup.string().required("상세주소는 필수입니다."),
// });

export { LoginSchema };
