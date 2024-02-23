import { useEffect } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { wait } from "@/lib/utils";

import type { ContactProps } from "@/types";
import { formSchema } from "@/lib/FormSchema";

type FormSchema = z.infer<typeof formSchema>;
type PhoneBookFormProps = {
  addEntryToTable: (newContact: ContactProps) => void;
};

export const PhoneBookForm: React.FC<PhoneBookFormProps> = ({
  addEntryToTable,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema) });

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    await wait(3000);
    addEntryToTable(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="firstName">First Name</label>
        <input
          {...register("firstName")}
          type="text"
          id="firstName"
          placeholder="Coder"
          aria-invalid={errors.firstName ? "true" : "false"}
        />
        {errors.firstName && (
          <span role="alert" className="text-red-500 text-sm">
            {errors.firstName?.message}
          </span>
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="lastName">Last Name</label>
        <input
          {...register("lastName")}
          type="text"
          id="lastName"
          placeholder="Byte"
          aria-invalid={errors.lastName ? "true" : "false"}
        />
        {errors.lastName && (
          <span role="alert" className="text-red-500 text-sm">
            {errors.lastName?.message}
          </span>
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          {...register("phoneNumber")}
          type="text"
          id="phoneNumber"
          placeholder="888555999"
          aria-invalid={errors.phoneNumber ? "true" : "false"}
        />
        {errors.phoneNumber && (
          <span role="alert" className="text-red-500 text-sm">
            {errors.phoneNumber?.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="bg-slateColor w-full text-darkColor px-4 py-2 rounded font-semibold disabled:bg-slate-400"
        disabled={!isDirty || isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
