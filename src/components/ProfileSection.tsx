import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userProfileSchema, UserProfileFormData } from "../types/schema";
import { Camera, Save, X } from "lucide-react";

interface ProfileSectionProps {
  profile: UserProfileFormData;
  onSave: (profile: UserProfileFormData) => void;
  onError: () => void;
}

export function ProfileSection({
  profile,
  onSave,
  onError,
}: ProfileSectionProps) {
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<UserProfileFormData>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: profile,
  });

  const watchedPhoto = watch("profile_photo");

  const handleCancel = () => {
    reset(profile);
    setIsEditing(false);
  };

  const onSubmit = (data: UserProfileFormData) => {
    try {
      onSave(data);
      setIsEditing(false);
    } catch {
      onError();
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      // Save base64 to form field
      reset({ ...watch(), profile_photo: base64 });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="glass-effect rounded-xl shadow-lg p-6 transition-all duration-300">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-0">
          Profile Information
        </h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                     transition-all duration-300 transform hover:scale-105"
          >
            Edit Profile
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Avatar */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative group">
            <img
              src={watchedPhoto}
              alt={watch("full_name")}
              className="w-24 h-24 rounded-full object-cover ring-2 ring-blue-500"
            />
            {isEditing && (
              <>
                <label
                  htmlFor="profile_photo_upload"
                  className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 cursor-pointer"
                >
                  <Camera size={16} />
                </label>
                <input
                  id="profile_photo_upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </>
            )}
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold dark:text-white">
              {watch("full_name")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{watch("email")}</p>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Full Name
            </label>
            <input
              {...register("full_name")}
              disabled={!isEditing}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
            />
            {errors.full_name && (
              <p className="text-red-500 text-sm">{errors.full_name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              {...register("email")}
              disabled={!isEditing}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Phone
            </label>
            <input
              {...register("phone")}
              disabled={!isEditing}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Bio
          </label>
          <textarea
            {...register("bio")}
            rows={4}
            disabled={!isEditing}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
          />

          {errors.bio && (
            <p className="text-red-500 text-sm">{errors.bio.message}</p>
          )}
        </div>

        {/* Toggles */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <label className="flex items-center space-x-2 text-sm  text-gray-700 dark:text-gray-200">
            <input
              type="checkbox"
              {...register("settings.dark_mode")}
              disabled={!isEditing}
              className="h-4 w-4 text-blue-600"
            />
            <span>Dark Mode</span>
          </label>

          <label className="flex items-center space-x-2  text-gray-700 dark:text-gray-200">
            <input
              type="checkbox"
              {...register("settings.email_notifications")}
              disabled={!isEditing}
              className="h-4 w-4 text-blue-600"
            />
            <span>Email Notifications</span>
          </label>
        </div>

        {/* Buttons */}
        {isEditing && (
          <div className="flex flex-col sm:flex-row justify-end gap-4">
            <button
              type="button"
              onClick={handleCancel}
              className="w-full sm:w-auto px-6 py-2.5 border border-gray-300  dark:text-white dark:border-gray-600 rounded-lg 
                       hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
            >
              <X size={16} className="mr-2" />
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                       transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Save size={16} className="mr-2" />
              Save Changes
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
