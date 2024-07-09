import React from "react";
import AuthOuterLayout from "../../components/auth/AuthOuterLayout";
import AuthInnerLayout from "../../components/auth/AuthInnerLayout";
import AuthPageTitle from "../../components/auth/AuthPageTitle";
import ChangePhone from "../../components/auth/ChangePhone";

function ChangePassword() {
  return (
    <AuthOuterLayout>
      <AuthInnerLayout>
        <AuthPageTitle
          title="현대중공업-새마을금고"
          description="휴대폰번호 변경"
        />
        <ChangePhone />
      </AuthInnerLayout>
    </AuthOuterLayout>
  );
}

export default ChangePassword;
