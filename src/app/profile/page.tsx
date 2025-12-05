import { Shield, Star, Trophy, Swords } from "lucide-react";
import { createClient as createServerClient } from "../../lib/supabase/server";
import { redirect } from "next/navigation";
import { Cinzel } from "next/font/google";
import EditClass from "../../components/edit-class";
import BackToDashBoardLink from "../../components/back-to-dashboard-link";
import checkUserCompletedQuizzes from "@/lib/checkUserCompletedQuizzes";

//font for words
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default async function ProfilePage() {
  const supabase = await createServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const questInfo = await checkUserCompletedQuizzes();

  // Fetch user profile from database
  const { data: profile } = await supabase
    .from("profiles")
    .select("class, quests_completed")
    .eq("id", user.id)
    .maybeSingle(); // Use maybeSingle() instead of single() to handle case where profile doesn't exist

  // Map enum values to display names
  const classDisplayMap: Record<string, string> = {
    warrior: "Python Warrior",
    mage: "Java Mage",
    rogue: "C++ Rogue",
  };

  // Get class from database, default to null (will show as empty or default)
  const userClassEnum = profile?.class as string | null;
  const userClass = userClassEnum ? classDisplayMap[userClassEnum] || userClassEnum : null;

  const username = user.email?.split("@")[0] || "User";

  const joinedDate = user.created_at
    ? new Date(user.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown";

  // Calculate Python progress based on quest completion
  const totalQuests = 10;
  const completedQuests = questInfo.size;
  const pythonProgress = Math.round((completedQuests / totalQuests) * 100);

  return (
    <main className="relative min-h-dvh p-8">
      {/* Background with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/gemininight3.png')",
          filter: "blur(0.5px)",
          zIndex: 0,
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-85" style={{ zIndex: 0 }} />

      {/* Content */}
      <div className={`relative ${cinzel.className}`} style={{ zIndex: 1 }}>
        {/* Back Button */}
        <BackToDashBoardLink />

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: "#be9661" }}>
            Adventurer Profile
          </h1>
          <p className="text-base" style={{ color: "#A0A0A0" }}>
            Your journey through the coding realm
          </p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Avatar Section */}
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: "#191922",
                border: "0.5px solid rgba(190, 150, 97, 0.3)",
              }}
            >
              <div className="flex flex-col items-center">
                {/* Avatar Circle */}
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center mb-4"
                  style={{
                    border: "3px solid #be9661",
                    boxShadow: "0 0 20px rgba(190, 150, 97, 0.5)",
                  }}
                >
                  <Shield size={64} style={{ color: "#be9661" }} />
                </div>
                {/* Switch Avatar Button */}
                <button
                  className="px-4 py-2 rounded-lg flex items-center gap-2"
                  style={{
                    backgroundColor: "#232331",
                    color: "#E0E0E0",
                    borderColor: "rgba(190, 150, 97, 0.3)",
                    borderWidth: "0.5px",
                    borderStyle: "solid",
                  }}
                >
                  <Swords size={16} style={{ color: "#be9661" }} />
                  <span>Switch Avatar</span>
                </button>
              </div>
            </div>

            {/* Skills & Mastery Section */}
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: "#191922",
                border: "0.5px solid rgba(190, 150, 97, 0.3)",
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Star size={20} style={{ color: "#be9661" }} />
                <h2 className="text-xl font-semibold" style={{ color: "#be9661" }}>
                  Skills & Mastery
                </h2>
              </div>

              {/* Python Skill */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-base" style={{ color: "#E0E0E0" }}>
                    Python
                  </span>
                  <span className="text-base" style={{ color: "#E0E0E0" }}>
                    {pythonProgress}%
                  </span>
                </div>
                <div
                  className="h-3 rounded-full overflow-hidden"
                  style={{ backgroundColor: "#404040" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${pythonProgress}%`,
                      background: "linear-gradient(to right, #be9661, #a7e4e7)",
                    }}
                  />
                </div>
              </div>

              {/* Java Skill */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-base" style={{ color: "#E0E0E0" }}>
                    Java
                  </span>
                  <span className="text-base" style={{ color: "#E0E0E0" }}>
                    0%
                  </span>
                </div>
                <div
                  className="h-3 rounded-full overflow-hidden"
                  style={{ backgroundColor: "#404040" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "0%",
                      background: "linear-gradient(to right, #a7e4e7, #be9661)",
                    }}
                  />
                </div>
              </div>

              {/* C++ Skill */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-base" style={{ color: "#E0E0E0" }}>
                    C++
                  </span>
                  <span className="text-base" style={{ color: "#E0E0E0" }}>
                    0%
                  </span>
                </div>
                <div
                  className="h-3 rounded-full overflow-hidden"
                  style={{ backgroundColor: "#404040" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "0%",
                      background: "linear-gradient(135deg, #be9661, #a7e4e7, #be9661)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Combined User Info and Detailed Info Section */}
            <div
              className="rounded-lg p-6 relative"
              style={{
                backgroundColor: "#191922",
                border: "0.5px solid rgba(190, 150, 97, 0.3)",
              }}
            >
              {/* Username */}
              <h2 className="text-3xl font-bold mb-1" style={{ color: "#be9661" }}>
                {username}
              </h2>
              {/* Rank/Title */}
              <p className="text-base mb-6" style={{ color: "#A0A0A0" }}>
                Knight of the Coding Realm
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* Level */}
                <div
                  className="rounded-lg p-4 flex flex-col items-center"
                  style={{
                    backgroundColor: "#191922",
                    borderColor: "rgba(190, 150, 97, 0.3)",
                    borderWidth: "0.5px",
                    borderStyle: "solid",
                  }}
                >
                  <Trophy size={24} style={{ color: "#be9661", marginBottom: "8px" }} />
                  <span className="text-sm mb-1" style={{ color: "#A0A0A0" }}>
                    Level
                  </span>
                  <span className="text-2xl font-bold" style={{ color: "#be9661" }}>
                    0
                  </span>
                </div>

                {/* XP */}
                <div
                  className="rounded-lg p-4 flex flex-col items-center"
                  style={{
                    backgroundColor: "#191922",
                    borderColor: "rgba(190, 150, 97, 0.3)",
                    borderWidth: "0.5px",
                    borderStyle: "solid",
                  }}
                >
                  <Star size={24} style={{ color: "#be9661", marginBottom: "8px" }} />
                  <span className="text-sm mb-1" style={{ color: "#A0A0A0" }}>
                    XP
                  </span>
                  <span className="text-2xl font-bold" style={{ color: "#be9661" }}>
                    0
                  </span>
                </div>

                {/* Quests */}
                <div
                  className="rounded-lg p-4 flex flex-col items-center"
                  style={{
                    backgroundColor: "#191922",
                    borderColor: "rgba(190, 150, 97, 0.3)",
                    borderWidth: "0.5px",
                    borderStyle: "solid",
                  }}
                >
                  <Swords size={24} style={{ color: "#be9661", marginBottom: "8px" }} />
                  <span className="text-sm mb-1" style={{ color: "#A0A0A0" }}>
                    Quests
                  </span>
                  <span className="text-2xl font-bold" style={{ color: "#be9661" }}>
                    {completedQuests}/10
                  </span>
                </div>
              </div>

              {/* Detailed Info */}
              {/* Class */}
              <EditClass
                currentClass={userClass || "Not set"}
                currentClassEnum={userClassEnum}
                userId={user.id}
              />

              {/* Guild */}
              <div className="flex items-start gap-3 mb-4 relative">
                <div
                  className="absolute left-0 top-0 bottom-0 rounded"
                  style={{
                    backgroundColor: "#be9661",
                    width: "4px",
                    marginTop: "-2px",
                    marginBottom: "-2px",
                  }}
                />
                <div className="pl-3">
                  <span className="text-sm block mb-1" style={{ color: "#A0A0A0" }}>
                    Guild
                  </span>
                  <span className="text-base block" style={{ color: "#E0E0E0" }}>
                    The Algorithm Knights
                  </span>
                </div>
              </div>

              {/* Joined Quest */}
              <div className="flex items-start gap-3 mb-4 relative">
                <div
                  className="absolute left-0 top-0 bottom-0 rounded"
                  style={{
                    backgroundColor: "#be9661",
                    width: "4px",
                    marginTop: "-2px",
                    marginBottom: "-2px",
                  }}
                />
                <div className="pl-3">
                  <span className="text-sm block mb-1" style={{ color: "#A0A0A0" }}>
                    Joined Quest
                  </span>
                  <span className="text-base block" style={{ color: "#E0E0E0" }}>
                    {joinedDate}
                  </span>
                </div>
              </div>

              {/* Bio */}
              <div className="flex items-start gap-3 relative">
                <div
                  className="absolute left-0 top-0 bottom-0 rounded"
                  style={{
                    backgroundColor: "#be9661",
                    width: "4px",
                    marginTop: "-2px",
                    marginBottom: "-4px",
                  }}
                />
                <div className="pl-3">
                  <span className="text-sm block mb-1" style={{ color: "#A0A0A0" }}>
                    Bio
                  </span>
                  <span className="text-base block" style={{ color: "#E0E0E0" }}>
                    A seasoned warrior in the realm of code, seeking legendary bugs to slay and epic
                    features to build. Master of multiple languages and slayer of countless bugs.
                    Ready for the next adventure!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
