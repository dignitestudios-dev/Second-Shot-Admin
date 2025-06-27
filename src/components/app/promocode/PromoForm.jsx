import React, { useState } from "react";
import Button from "../../global/Button";
import Input from "../../global/Input";
import { useFormik } from "formik";
import { useLogin } from "../../../hooks/api/Post";
import { promoCode } from "../../../schema/app/CreateNotificationSchema";
import { processCoupenCode, processGenerateCode } from "../../../lib/utils";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const PromoForm = () => {
  const { loading, postData } = useLogin();
  const navigate = useNavigate();
  const [generateCode, setGenerateCode] = useState(false);
  const coupenId = sessionStorage.getItem("couponId");
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        percent_off: "",
        code: "",
      },
      validationSchema: promoCode,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        const data = {
          name: values?.name,
          percent_off: values?.percent_off,
        };
        const generateCodeData = {
          couponId: coupenId,
          code: values.code,
        };
        {
          generateCode
            ? postData(
                "/api/subscription/create-promotion-code",
                false,
                null,
                generateCodeData,
                processGenerateCode,
                action.resetForm,
                setGenerateCode
              )
            : postData(
                "/api/subscription/create-subscription-coupon",
                false,
                null,
                data,
                processCoupenCode,
                setGenerateCode
              );
        }
      },
    });

  return (
    <div className="bg-white p-10">
      <div
        className="flex items-center gap-2 mb-4 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <span>
          <IoChevronBackOutline />
        </span>
        <p>Back</p>
      </div>
      <h2 className="text-[34px] font-[600] text-[#140342] mb-4">
        Create Promo Code
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            text={" Promo Name"}
            isDisabled={generateCode}
            value={values.name}
            maxLength={50}
            id={"name"}
            name={"name"}
            onChange={handleChange}
            error={errors.name}
            onBlur={handleBlur}
            placeholder={"Enter promo name"}
          />
        </div>
        <div>
          <Input
            isDisabled={generateCode}
            text={"Percent Off (%)"}
            value={values.percent_off}
            id={"percent_off"}
            name={"percent_off"}
            error={errors.percent_off}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={"Enter discount (e.g. 20)"}
            maxLength={"100"}
          />
        </div>
        {generateCode && (
          <div>
            <Input
              text={"Coupon Code"}
              value={values.code}
              id={"code"}
              name={"code"}
              error={errors.code}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={"Enter Coupon Code"}
              maxLength={50}
            />
          </div>
        )}
        <Button
          type="submit"
          text={`${generateCode ? "Generate Code" : "Submit"}`}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      </form>
    </div>
  );
};

export default PromoForm;
