import { useState, useEffect } from "react";
import { ProfileSection } from "./components/ProfileSection";
import { RentalHistory } from "./components/RentalHistory";
import { Toast } from "./components/Toast";
import { userProfile, rentalHistory } from "./data/mockData";
import { UserProfile, Toast as ToastType } from "./types";
import { ChangePassword } from "./components/ChangePassword";

function App() {
  const [profile, setProfile] = useState<UserProfile>(userProfile);
  const [darkMode, setDarkMode] = useState(userProfile.settings.dark_mode);
  const [toast, setToast] = useState<ToastType | null>(null);

  const [activeTab, setActiveTab] = useState<
    "profile" | "rentals" | "password"
  >("profile");

  useEffect(() => {
    console.log("darkMode: ", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleProfileUpdate = (updatedProfile: UserProfile) => {
    setProfile(updatedProfile);
    setDarkMode(updatedProfile.settings.dark_mode);
    setToast({
      message: "Profile updated successfully!",
      type: "success",
    });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex space-x-4 border-b border-gray-300 dark:border-gray-700 mb-6">
          <button
            onClick={() => setActiveTab("profile")}
            className={`pb-2 text-sm font-medium transition-colors ${
              activeTab === "profile"
                ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab("rentals")}
            className={`pb-2 text-sm font-medium transition-colors ${
              activeTab === "rentals"
                ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
            }`}
          >
            Rental History
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`pb-2 text-sm font-medium transition-colors ${
              activeTab === "password"
                ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
            }`}
          >
            Change Password
          </button>
        </div>
        {activeTab === "profile" && (
          <ProfileSection
            profile={profile}
            onSave={handleProfileUpdate}
            onError={() =>
              setToast({ message: "An error occurred", type: "error" })
            }
          />
        )}

        {activeTab === "rentals" && <RentalHistory rentals={rentalHistory} />}

        {activeTab === "password" && (
          <ChangePassword
            onSuccess={() =>
              setToast({
                message: "Password updated successfully!",
                type: "success",
              })
            }
            onError={(message) => setToast({ message, type: "error" })}
          />
        )}
      </div>
      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
    </div>
  );
}

export default App;
