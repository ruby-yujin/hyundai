export const ROUTER_PATH = {
  login: "/",
  register: "/register",
  chagnePassword: "/change-password",
  chagnePhone: "/change-phone",
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
    menu: "신청관리",
    route: [{ name: "신청 관리(관리자)", path: ROUTER_PATH.deductionStatus }],
  },
];

export const NUMBER_COMMA = /\B(?=(\d{3})+(?!\d))/g;
