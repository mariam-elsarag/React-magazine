import {
  Control,
  Controller,
  FieldError,
  RegisterOptions,
} from "react-hook-form";
import Password from "./Password";
import { Link } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";

interface FormItemType {
  id?: string | number;
  formType?: "input" | "textarea" | "password" | "otp";
  fieldName?: string | undefined;
  validator?: RegisterOptions;
  label?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  className?: string;
  groupWith?: number;
  isGrouped?: boolean;
  disabled?: boolean;
  hasForgetPassword?: boolean;
}
interface FormData {
  [key: string]: any;
}
interface FormProps {
  formList: FormItemType[];
  control: Control<FormData>;
  errors: Record<string, FieldError | undefined>;
  loading: boolean;
}

const Form: React.FC<FormProps> = ({ formList, control, errors, loading }) => {
  const renderField = (
    item: FormItemType,
    field: { value: any; onChange: (e: any) => void },
    error?: FieldError
  ) => {
    const errorClass = error ? "!border-red-500" : "border-grey";

    switch (item.formType) {
      case "input":
        return (
          <input
            id={item.id}
            type={item.type || "text"}
            name={item.name || ""}
            value={field.value ?? ""}
            onChange={field.onChange}
            className={`input border ${errorClass}`}
            placeholder={item.placeholder}
            disabled={loading || item?.disabled}
          />
        );
      case "password":
        return (
          <Password
            id={item.id}
            name={item.name || ""}
            value={field.value ?? ""}
            handleChange={field.onChange}
            className={`input border ${errorClass}`}
            placeholder={item.placeholder}
          />
        );
      case "textarea":
        return (
          <textarea
            id={item.id}
            name={item.name || ""}
            value={field.value ?? ""}
            onChange={field.onChange}
            className={`input border ${errorClass} resize-none !h-auto !min-h-[100px] `}
            placeholder={item.placeholder}
          />
        );
      case "otp":
        return (
          <OTPInput
            value={field.value ?? ""}
            onChange={field.onChange}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={loading || item?.disabled}
            inputClassName="border-2 border-grey outline-none focus:!border-light-grey rounded-lg  !w-[45px] !h-[45px]"
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      {formList.map((item, index) => {
        const isGrouped = item?.isGrouped && formList[index + 1];
        if (isGrouped) {
          return (
            <div className={`  ${item?.className} `} key={item.id}>
              {[item, formList[index + 1]].map((fieldItem) => (
                <fieldset
                  className={`flex flex-col gap-2 text-dark-grey  text-sm capitalize `}
                  key={fieldItem.id}
                >
                  <label htmlFor={fieldItem?.id}>{fieldItem?.label}</label>
                  <Controller
                    name={fieldItem.fieldName}
                    control={control}
                    rules={fieldItem.validator}
                    render={({ field, fieldState: { error } }) =>
                      renderField(fieldItem, field, error)
                    }
                  />
                  {errors[fieldItem.fieldName]?.message && (
                    <p className="text-red-600 text-xs">
                      {errors[fieldItem?.fieldName]?.message}
                    </p>
                  )}
                </fieldset>
              ))}
            </div>
          );
        } else if (item && !item?.isGrouped && !item?.groupWith) {
          return (
            <fieldset
              className={`grid gap-2 text-base capitalize ${item?.className} col-span-2`}
              key={item.id}
            >
              <label htmlFor={item?.id} className=" text-dark-grey  text-sm">
                {item?.label}
              </label>
              <Controller
                name={item?.fieldName}
                control={control}
                rules={item?.validator}
                render={({ field, fieldState: { error } }) =>
                  renderField(item, field, error)
                }
              />
              <div
                className={`flex ${
                  errors[item?.fieldName] && item?.hasForgetPassword
                    ? "justify-between"
                    : item?.hasForgetPassword
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                {errors[item?.fieldName] && (
                  <p className="text-red-600 text-xs">
                    {errors[item?.fieldName]?.message}
                  </p>
                )}
                {item?.hasForgetPassword && (
                  <Link
                    className="body2 text-primary/75 !font-[500]"
                    to="/account/forget-password"
                  >
                    Forget password?
                  </Link>
                )}
              </div>
            </fieldset>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default Form;
