import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getProfile, updateProfile } from "../../services/api";

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await getProfile();
        setProfile(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    try {
      await updateProfile(profile);
      setMessage("تم تحديث الملف الشخصي بنجاح!");
    } catch (err) {
      console.error(err);
      setMessage("فشل التحديث، حاول مرة أخرى.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-4">ملفي الشخصي</h1>
        {loading ? (
          <p>جاري التحميل...</p>
        ) : (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="الاسم"
              value={profile.name || ""}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={profile.email || ""}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="w-full p-2 border rounded"
            />
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              حفظ التغييرات
            </button>
            {message && <p>{message}</p>}
          </div>
        )}
      </main>
    </div>
  );
};

export default ProfilePage;
