"use client";

import { FormEvent, useState } from "react";
import { submitContact } from "@/lib/api";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitContact(form);
      setStatus("success");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Unable to send message.");
    }
  };

  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <h2 className="section-title">Contact</h2>
      <form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-4">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Name</span>
          <input
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full border border-line bg-white px-3 py-2 outline-none focus:border-black"
            required
            maxLength={120}
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full border border-line bg-white px-3 py-2 outline-none focus:border-black"
            required
            maxLength={255}
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">Message</span>
          <textarea
            value={form.message}
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            className="min-h-36 w-full border border-line bg-white px-3 py-2 outline-none focus:border-black"
            required
            maxLength={5000}
          />
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="border border-black bg-black px-5 py-2 text-sm font-medium text-white disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Submit"}
        </button>

        {status === "success" ? (
          <p className="text-sm text-green-700" role="status">
            Message sent successfully.
          </p>
        ) : null}

        {status === "error" ? (
          <p className="text-sm text-red-700" role="alert">
            {errorMessage}
          </p>
        ) : null}
      </form>
    </section>
  );
}
