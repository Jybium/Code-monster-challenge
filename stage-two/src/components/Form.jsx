import React, { useState } from "react";
import Confirm from "../assets/confirm.png";

import { CardInput, Expiry, TextInput } from "./Input";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const Modal = ({ modal, setModal }) => {
  return (
    <div className="grid items-center content-center backdrop-blur-sm w-full gap-4 text-center">
      <img src={Confirm} alt="success" className="w-auto text-center m-auto" />
      <div className="grid gap-3">
        <p className="sm:text-2xl text-xl font-bold">THANK YOU!</p>
        <p className="text-lg">We've added your card details.</p>
      </div>
      <button
        onClick={() => setModal((prev) => !modal)}
        type="submit"
        className="uppercase bg-purple-950 py-2 rounded text-white font-black text-base mt-3 w-full"
      >
        continue
      </button>
    </div>
  );
};

const Form = () => {
  const [modal, setModal] = useState(false);

  const {
    reset,
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm();

  const Submit = (e, data) => {
    toast.success("Form Submitted Successfully!");
    console.log(data);
    reset();
    setModal(true);
  };

  return (
    <section>
      {modal ? (
        <Modal modal={modal} setModal={setModal} />
      ) : (
        <section className="w-full">
          <form onSubmit={handleSubmit(Submit)}>
            <div className="grid gap-4 px-3">
              <TextInput
                title="Cardholder name"
                placeholder="Janet Appleseed"
                name="cardholder"
                error={errors}
                register={register}
              />
              <CardInput
                title="Card number"
                placeholder="e.g 1234 5678 9123 0000"
                name="cardnumber"
                maxLength={13}
                type="text"
                error={errors}
                register={register}
              />
              <div>
                <div className="flex gap-3">
                  <Expiry
                    title="Expiry Date (MM/YY)"
                    placeholder="MM YY"
                    name="expirymonth expiryyear"
                    error={errors}
                    register={register}
                  />
                  <div className="grow">
                    <TextInput
                      title="cvc"
                      placeholder="847"
                      name="cvc"
                      error={errors}
                      maxLength={3}
                      register={register}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="uppercase bg-purple-950 py-2 rounded text-white font-black text-base mt-3"
              >
                confirm
              </button>
            </div>
          </form>
        </section>
      )}
    </section>
  );
};

export default Form;
