import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Getapi from "../../APIs/Getapi";
import PatchApi from "../../APIs/PatchApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loder from "../Loader/Loder";

const Profile = () => {
  const userId = useSelector((state) => state?.auth?.user?._id);
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [editingName, setEditingName] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState("https://via.placeholder.com/100");
  const [avatarFile, setAvatarFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Fetch user data
  useEffect(() => {
    if (!userId) {
      setLoading(false);
      setError("Unauthorized. Please log in.");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await Getapi(`user/${userId}`);
        const fetchedUser = res.data?.user;

        if (!fetchedUser) {
          throw new Error("User data not returned");
        }

        setUser(fetchedUser);
        setName(fetchedUser.name);
        setAvatarPreview(fetchedUser.avatar?.url || "https://via.placeholder.com/100");
      } catch (err) {
        console.error("Failed to fetch user", err);
        toast.error("Error fetching user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveAvatar = () => {
    setAvatarFile(null);
    setAvatarPreview("https://via.placeholder.com/100");
  };

  const handleProfileUpdate = async () => {
    const formData = new FormData();
    formData.append("name", name);
    if (avatarFile) formData.append("avatar", avatarFile);

    try {
      setSaving(true);
      const res = await PatchApi(`user/update/${userId}`, formData);

      if (res?.updatedUser) {
        setUser(res.updatedUser);
        setName(res.updatedUser.name);
        setAvatarPreview(res.updatedUser.avatar?.url || "https://via.placeholder.com/100");
        toast.success("Profile updated successfully");
        setEditingName(false);
        setAvatarFile(null);
      } else {
        throw new Error("Unexpected response");
      }
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Loder />;

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-80 text-center text-red-600">
        <ToastContainer />
        <p className="text-xl font-semibold mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <ToastContainer />
      <main className="p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Profile Details</h2>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          <img
            src={avatarPreview}
            alt="Avatar"
            className="w-28 h-28 rounded-full border object-cover"
          />
          <div className="flex gap-4 items-center">
            <label className="border border-gray-300 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100">
              Change photo
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </label>
            <button onClick={handleRemoveAvatar} className="text-red-500 hover:underline">
              Remove
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Name */}
          <div className="md:flex items-center gap-4">
            <label className="w-32 text-gray-600">Name</label>
            {editingName ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 border border-gray-300 p-2 rounded-md"
              />
            ) : (
              <input
                type="text"
                value={name}
                disabled
                className="flex-1 border border-gray-300 p-2 rounded-md bg-gray-100 cursor-not-allowed"
              />
            )}
            <button
              onClick={() => setEditingName(!editingName)}
              className="mt-2 md:mt-0 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              {editingName ? "Cancel" : "Edit"}
            </button>
          </div>

          {/* Email (check user exists first) */}
          {user?.email && (
            <div className="md:flex items-center gap-4">
              <label className="w-32 text-gray-600">Email</label>
              <input
                type="text"
                value={user.email}
                disabled
                className="flex-1 border border-gray-300 p-2 rounded-md bg-gray-100 cursor-not-allowed"
              />
            </div>
          )}

          {/* Save Button */}
          <div>
            <button
              onClick={handleProfileUpdate}
              className={`bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 ${
                saving ? "opacity-70 cursor-not-allowed" : ""
              }`}
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
