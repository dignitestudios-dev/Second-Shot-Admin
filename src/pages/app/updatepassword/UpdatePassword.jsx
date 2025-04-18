import React, { useState } from "react";
import Input from "../../../components/global/Input";
import { Updatepassword } from "../../../assets/export";
import Button from "../../../components/global/Button";
import UpdatePassModal from "../../../components/app/updatepassword/UpdatePassModal";
import { useFormik } from "formik";
import { updatePasswordSchema } from "../../../schema/authentication/UpdatePasswordSchema";
import { UpdatePasswordValues } from "../../../init/authentication/UpdatePasswordValues";
import { processUpdatePassword } from "../../../lib/utils";
import { useUpdatePassword } from "../../../hooks/api/Post";

const UpdatePassword = () => {
  const { loading, postData } = useUpdatePassword();
  const [open, setOpen] = useState(false);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched,resetForm } =
    useFormik({
      initialValues: UpdatePasswordValues,
      validationSchema: updatePasswordSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        const data = {
          current_password: values?.currentPassword,
          new_password: values?.newPassword,
          confirm_password: values?.confirmNewPassword,
        };
        postData(
          "/api/admin/change-password",
          false,
          null,
          data,
          processUpdatePassword,
          setOpen,
          resetForm
        );
      },
    });
  return (
    <div className="bg-white p-10 rounded-[16px] h-screen grid lg:grid-cols-2 items-center justify-center ">
      <div className="px-10">
        <h2 className="text-[32px] font-[600] text-[#202224] tracking-[-0.11px] ">
          Update Password
        </h2>
        <p className="text-[#565656] text-[16px] font-[400] tracking-[-1.4%] mt-3 ">
          Update your Password
        </p>
        <form action="" onSubmit={handleSubmit} className="mt-5">
          <div className="w-[360px] mt-3">
            <Input
              text={"Current Password"}
              placeholder={"Enter password here"}
              type={"password"}
              value={values.currentPassword}
              id={"currentPassword"}
              name={"currentPassword"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.currentPassword}
              maxLength={50}
            />
          </div>
          <div className="w-[360px] mt-3">
            <Input
              text={"New Password"}
              placeholder={"Enter new password here"}
              type={"password"}
              value={values.newPassword}
              id={"newPassword"}
              name={"newPassword"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.newPassword}
              maxLength={50}
            />
          </div>
          <div className="w-[360px] mt-3">
            <Input
              text={"Confirm Password"}
              placeholder={"Re enter password here"}
              type={"password"}
              value={values.confirmNewPassword}
              id={"confirmNewPassword"}
              name={"confirmNewPassword"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.confirmNewPassword}
              maxLength={50}
            />
          </div>
          <div className="w-[360px] mt-4">
            <Button text={"Update"} type={"submit"} loading={loading} />
          </div>
        </form>
      </div>
      <div>
        <img
          src={Updatepassword}
          className="w-[500px] h-[500px] object-contain "
          alt=""
        />
      </div>
      <UpdatePassModal showModal={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default UpdatePassword;
