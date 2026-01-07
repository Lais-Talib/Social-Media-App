import React, { useState } from "react";
import { Pencil } from "lucide-react";
import { dummyUserData } from "../assets/assets";

const ProfileModal = () => {
  const user = dummyUserData;

  const [editForm, setEditForm] = useState({
    full_name: user.full_name,
    username: user.username,
    bio: user.bio,
    location: user.location,
    profile_picture: null,
    cover_photo: null,
  });

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    console.log(editForm);
    // submit logic here
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
      <div className="max-w-2xl mx-auto py-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Edit Profile
          </h1>

          <form className="space-y-4" onSubmit={handleSaveProfile}>
            {/* Profile Picture */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Picture
              </label>

              <label htmlFor="profile_picture" className="cursor-pointer">
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  id="profile_picture"
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      profile_picture: e.target.files[0],
                    })
                  }
                />

                <div className="relative group w-fit">
                  <img
                    src={
                      editForm.profile_picture
                        ? URL.createObjectURL(editForm.profile_picture)
                        : user.profile_picture
                    }
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="absolute inset-0 hidden group-hover:flex bg-black/30 rounded-full items-center justify-center">
                    <Pencil className="w-5 h-5 text-white" />
                  </div>
                </div>
              </label>
            </div>

            {/* Cover Photo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Photo
              </label>

              <label htmlFor="cover_photo" className="cursor-pointer">
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  id="cover_photo"
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      cover_photo: e.target.files[0],
                    })
                  }
                />

                <div className="relative group w-fit">
                  <img
                    src={
                      editForm.cover_photo
                        ? URL.createObjectURL(editForm.cover_photo)
                        : user.cover_photo
                    }
                    alt="Cover"
                    className="w-80 h-40 rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 hidden group-hover:flex bg-black/30 rounded-lg items-center justify-center">
                    <Pencil className="w-5 h-5 text-white" />
                  </div>
                </div>
              </label>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Enter your full name"
                value={editForm.full_name}
                onChange={(e) =>
                  setEditForm({ ...editForm, full_name: e.target.value })
                }
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Enter a username"
                value={editForm.username}
                onChange={(e) =>
                  setEditForm({ ...editForm, username: e.target.value })
                }
              />
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                rows={3}
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Write something about yourself"
                value={editForm.bio}
                onChange={(e) =>
                  setEditForm({ ...editForm, bio: e.target.value })
                }
              />
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
