import * as Yup from "yup";

//사원번호
const MemberNumberRegex = /^[A-Za-z0-9]{10}$/;

//사원명
const MemberNameRegex = /^[A-Za-z가-힣]{1,50}$/;

//사원핸드폰번호
const MemberPhoneRegex = /^[\d-]{1,13}$/;

//사원비밀번호 조건들
const passwordMinLength = 8;
const passwordMaxLength = 15;
const consecutiveCharsRegex =
  /(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789)/i;
const repeatingCharsRegex = /(.)\1\1/;

const LoginSchema = Yup.object().shape({
  loginMemberId: Yup.string()
    .matches(MemberNumberRegex, "사원번호는 영문과 숫자로 10자리여야 합니다")
    .required("사원번호는 필수입니다"),

  loginMemberName: Yup.string()
    .matches(MemberNameRegex, "사원명은 영문 또는 한글로 50자 이내여야 합니다")
    .required("사원명은 필수입니다"),

  loginMemberPhone: Yup.string()
    .matches(MemberPhoneRegex, "올바른 휴대폰 번호 형식이 아닙니다")
    .required("휴대폰번호는 필수입니다"),

  loginMemberPassword: Yup.string()
    .min(
      passwordMinLength,
      `비밀번호는 최소 ${passwordMinLength}자 이상이어야 합니다`
    )
    .max(
      passwordMaxLength,
      `비밀번호는 최대 ${passwordMaxLength}자 이하여야 합니다`
    )
    .matches(/[A-Za-z]/, "비밀번호는 적어도 하나의 영문자를 포함해야 합니다")
    .matches(/\d/, "비밀번호는 적어도 하나의 숫자를 포함해야 합니다")
    .test(
      "no-consecutive-chars",
      "연속된 문자나 숫자 3자리 이상은 사용할 수 없습니다",
      (value) => !consecutiveCharsRegex.test(value)
    )
    .test(
      "no-repeating-chars",
      "같은 문자가 3번 이상 연속될 수 없습니다",
      (value) => !repeatingCharsRegex.test(value)
    )
    .required("비밀번호는 필수입니다")
});

export { LoginSchema };
