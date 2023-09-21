import React from "react";

const CardRegex = /^[0-9\s]*$/;

export const TextInput = ({
  register,
  type,
  title,
  name,
  error,
  placeholder,
  maxLength,
}) => {
  return (
    <div className="grid gap-1">
      <label htmlFor={name} className="font-black uppercase tracking-wide">
        {title}
      </label>
      <input
        type={type || "text"}
        placeholder={placeholder}
        maxLength={maxLength}
        id={name}
        name={name}
        {...register(name, {
          required: true,
          // validate: {
          //   matchPattern: (value) => CardRegex.test(value),
          // },
        })}
        className={`${
          error[name] &&
          error[name].type === "required" &&
          "border border-red-600"
        } rounded px-3 py-2 border focus:border-purple-400 outline-0 w-full`}
      />
      {error[name] && error[name].type === "required" && (
        <p className="text-red-600 text-sm">Can't be blank</p>
      )}
      {/* {error.cardnumber && error.cardnumber.type === "matchPattern" && (
        <p className="text-red-600 text-sm">Wrong Format. Must Be Numeric!</p>
      )} */}
    </div>
  );
};

export const CardInput = ({
  register,
  type,
  title,
  name,
  error,
  placeholder,
  maxLength,
  minLength,
}) => {
  return (
    <div className="grid gap-1">
      <label htmlFor={name} className="font-black uppercase tracking-wide">
        {title}
      </label>
      <input
        type={type || "text"}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        id={name}
        name={name}
        {...register(name, {
          required: true,
          validate: {
            matchPattern: (value) => CardRegex.test(value),
            value: (value) => value.length === 12,
          },
        })}
        className={`${
          error[name] &&
          error[name].type === "required" &&
          "border border-red-600"
        } rounded px-3 py-2 border focus:border-purple-400 outline-0 w-full`}
      />
      {error[name] && error[name].type === "required" && (
        <p className="text-red-600 text-sm">Can't be blank</p>
      )}
      {error[name] && error[name].type === "matchPattern" && (
        <p className="text-red-600 text-sm">Wrong Format. Must Be Numeric!</p>
      )}
      {error[name] && error[name].type === "value" && (
        <p className="text-red-600 text-sm">
          Value must be more than or equal to 12.
        </p>
      )}
    </div>
  );
};

export const Expiry = ({ register, type, title, name, error, placeholder }) => {
  const Name = name.split(" ");
  const firstName = Name[0];
  const secondName = Name[1];

  const Placeholder = placeholder.split(" ");
  const firstPlaceholder = Placeholder[0];
  const secondPlaceholder = Placeholder[1];

  return (
    <div className="grid gap-1">
      <label htmlFor={name} className="font-black uppercase tracking-wide">
        {title}
      </label>
      <div className="flex gap-2">
        <div className="">
          <input
            type={type || "text"}
            placeholder={firstPlaceholder}
            maxLength={2}
            name={firstName}
            id={firstName}
            {...register(firstName, { required: true })}
            className={`${
              error[firstName] &&
              error[firstName].type === "required" &&
              "border border-red-600"
            } rounded px-3 py-2 border focus:border-purple-400 outline-0 w-full`}
          />
          {error[firstName] && error[firstName].type === "required" && (
            <p className="text-red-600 text-sm">Can't be blank</p>
          )}
        </div>
        <div className="">
          <input
            type={type || "text"}
            placeholder={secondPlaceholder}
            maxLength={2}
            {...register(secondName, { required: true })}
            className={`${
              error[secondName] &&
              error[secondName].type === "required" &&
              "border border-red-600"
            } rounded px-3 py-2 border  focus:border-purple-400 outline-0 w-full`}
          />
          {error[secondName] && error[secondName].type === "required" && (
            <p className="text-red-600 text-sm">Can't be blank</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextInput;
