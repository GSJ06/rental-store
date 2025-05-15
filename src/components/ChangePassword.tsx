// src/components/ChangePassword.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema, ChangePasswordFormData } from "../types/schema";
import { useState } from "react";

interface ChangePasswordProps {
  onSuccess: () => void;
  onError: (message: string) => void;
}

export function ChangePassword({ onSuccess, onError }: ChangePasswordProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = (data: ChangePasswordFormData) => {
    try {
      setLoading(true);
      // Simulate async password change (replace this with real API call)
      !loading && console.log("data", data);
      setTimeout(() => {
        setLoading(false);
        reset();
        onSuccess();
      }, 1000);
    } catch (error) {
      setLoading(false);
      onError("Failed to update password.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass-effect rounded-xl shadow-lg p-6 space-y-6"
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Change Password
      </h2>

      <div className="space-y-2">
        <label className="block text-sm space-x-2 font-medium text-gray-700 dark:text-gray-200">
          Current Password
        </label>
        <input
          type="password"
          {...register("currentPassword")}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
        />
        {errors.currentPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.currentPassword.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="block text-sm space-x-2 font-medium text-gray-700 dark:text-gray-200">
          New Password
        </label>
        <input
          type="password"
          {...register("newPassword")}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
        />
        {errors.newPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.newPassword.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="block text-sm space-x-2 font-medium text-gray-700 dark:text-gray-200">
          Confirm New Password
        </label>
        <input
          type="password"
          {...register("confirmPassword")}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
      >
        {isSubmitting ? "Saving..." : "Change Password"}
      </button>
    </form>
  );
}
