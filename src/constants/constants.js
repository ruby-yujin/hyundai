export const ROUTER_PATH = {
  login: "/",
  register: "/register",
  changePassword: "/change-password",
  changePhone: "/change-phone",
  allMemberGroup :"/all-member-group",
  deductionStatus: "/deduction-status",
  deductionStatusTotal: "/deduction-status-total",
  memberManagement: "/member-management",
  memberRegister: "/member-register",
  registerManagement: "/register-management",
};

export const CATEGORY_INFOS = [
  {
    id: "member",
    menu: "단체관리",
    route: [
      { name: "단체별 공제현황", path: ROUTER_PATH.deductionStatus },
      { name: "공제 집계 현황", path: ROUTER_PATH.deductionStatusTotal },
      { name: "단체회원관리", path: ROUTER_PATH.memberManagement },
      { name: "단체가입신청", path: ROUTER_PATH.memberRegister },
    ],
  },
  {
    id: "register",
    menu: "신청 관리(관리자)",
    route: [{ name: "신청 관리(관리자)", path: ROUTER_PATH.deductionStatus }],
  },
];


export const COMMON_TABLE_TH = [
  {
    th : "코드"
  },
  {
    th : "단체명"
  },
  {
    th : "월회비"
  },
  {
    th : "가입일자"
  },
  {
    th : "탈퇴일자"
  },
  {
    th : "회사명"
  },
]

export const COMMON_TABLE_DATA = [
  { code: '001', 단체명: '단체A', 월회비: '10000', 가입일자: '2023-01-01', 탈퇴일자: '', 회사명: '회사A' },
  { code: '002', 단체명: '단체B', 월회비: '20000', 가입일자: '2023-02-01', 탈퇴일자: '2023-12-31', 회사명: '회사B' },
]

export const NUMBER_COMMA = /\B(?=(\d{3})+(?!\d))/g;
