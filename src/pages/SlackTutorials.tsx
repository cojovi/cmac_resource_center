import { Play, ArrowLeft, Users, Settings, Bell, Hash, Video, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const tutorials = [
  {
    id: "T9JSZxRlMVA",
    url: "https://youtu.be/T9JSZxRlMVA?si=LPWyDUvE6EY-ewyJ",
    title: "Getting Started with Slack - Complete Beginner's Guide",
    description: "Learn the basics of Slack and how to get started with your first workspace.",
  },
  {
    id: "NH_rtiLZ6xE",
    url: "https://youtu.be/NH_rtiLZ6xE?si=QMfOrI6Acl1r6poA",
    title: "Slack Channels and Direct Messages Tutorial",
    description: "Master communication through channels and direct messaging.",
  },
  {
    id: "srbd_Ffrj6Y",
    url: "https://youtu.be/srbd_Ffrj6Y?si=0a1CddXqGTUJ0z9q",
    title: "File Sharing and Collaboration in Slack",
    description: "Learn how to share files, collaborate on documents, and manage attachments.",
  },
  {
    id: "c1HJ5mbJdmg",
    url: "https://youtu.be/c1HJ5mbJdmg?si=OPgGkqE7ymabtdKM",
    title: "Slack Notifications and Settings Management",
    description: "Configure notification preferences and customize your Slack experience.",
  },
  {
    id: "zfjuEyRWHwM",
    url: "https://youtu.be/zfjuEyRWHwM?si=CsI-6Nvtxc9gjueM",
    title: "Advanced Slack Features and Shortcuts",
    description: "Discover powerful features and keyboard shortcuts to boost productivity.",
  },
  {
    id: "d5sVPRYUhhM",
    url: "https://youtu.be/d5sVPRYUhhM?si=qIuQs62EWn7z9nYK",
    title: "Slack Apps and Integrations Tutorial",
    description: "Connect your favorite tools and apps to streamline workflow.",
  },
  {
    id: "Oy-512vJDcM",
    url: "https://youtu.be/Oy-512vJDcM?si=77sHHy1cJKZYaNH_",
    title: "Team Management and Administration in Slack",
    description: "Learn how to manage teams, set permissions, and administer your workspace.",
  },
  {
    id: "JT8PySxrvLo",
    url: "https://youtu.be/JT8PySxrvLo?si=mycP3NP5rTZQkA2X",
    title: "Slack Video Calls and Screen Sharing",
    description: "Master video conferencing and screen sharing capabilities in Slack.",
  },
  {
    id: "YzpLi3Lshzk",
    url: "https://youtu.be/YzpLi3Lshzk?si=nr20wNgOgHZiWJfd",
    title: "Slack Best Practices for Teams",
    description: "Implement best practices for effective team communication and collaboration.",
  },
  {
    id: "RIiGiC-inXU",
    url: "https://youtu.be/RIiGiC-inXU",
    title: 'How to set "Out Of Office" in email',
    description: "Set up an automatic out-of-office message in email while away.",
  },
  {
    id: "Bww3F0TGtnM",
    url: "https://youtube.com/shorts/Bww3F0TGtnM?feature=share",
    title: "How To add new meetings to calender",
    description: "Quick walkthrough for adding new meetings to your calendar.",
  },
  {
    id: "upxTUw56D3A",
    url: "https://youtu.be/upxTUw56D3A",
    title: "A Step by Step Guide to Submitting Expense Reports (Desktop)",
    description: "Desktop workflow for preparing and submitting expense reports.",
  },
  {
    id: "iggCp-YUUCI",
    url: "https://youtube.com/shorts/iggCp-YUUCI?feature=share",
    title: "A Step by Step Guide to Submitting Expense Reports (Mobile)",
    description: "Mobile-first walkthrough for capturing receipts and filing expenses.",
  },
];

const SlackTutorials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleVideoPlay = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900/20 transition-colors duration-300">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 h-32 w-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-10 dark:opacity-20 float" />
          <div className="absolute bottom-40 left-32 h-24 w-24 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-10 dark:opacity-20 float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className={`mb-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              data-cursor="hover"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Resource Center</span>
            </Link>
          </div>

          <div className="flex items-center justify-center mb-6">
            <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold text-gray-900 dark:text-white ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
              Video <span className="gradient-text">Tutorials</span>
            </h1>
          </div>

          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 ${isVisible ? "animate-fade-in-up animate-delay-400" : "opacity-0"}`}>
            Access the full original Slack tutorial series plus additional workflow videos for email, calendar, and expense reporting.
          </p>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto ${isVisible ? "animate-fade-in-up animate-delay-600" : "opacity-0"}`}>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <Users className="h-8 w-8 text-blue-500 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Team Productivity</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Standardize how everyone handles recurring tasks</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <Settings className="h-8 w-8 text-purple-500 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Step-by-Step Setup</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Follow practical setup instructions with clear examples</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <Bell className="h-8 w-8 text-green-500 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Faster Onboarding</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Help new team members ramp up quickly with video guides</p>
            </div>
          </div>

          <div className="mt-16 mb-8">
            <h2 className={`text-3xl font-bold text-gray-900 dark:text-white mb-4 ${isVisible ? "animate-fade-in-up animate-delay-700" : "opacity-0"}`}>
              Video Tutorials Library
            </h2>
            <p className={`text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up animate-delay-800" : "opacity-0"}`}>
              Select a video below to play it directly, or open it on YouTube in a new tab.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tutorials.map((tutorial, index) => (
              <div
                key={tutorial.id}
                className={`card-modern p-0 overflow-hidden group ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-t-2xl">
                  {playingVideo === tutorial.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${tutorial.id}?autoplay=1&rel=0&modestbranding=1`}
                      title={tutorial.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${tutorial.id}/maxresdefault.jpg`}
                        alt={tutorial.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />

                      <button
                        onClick={() => handleVideoPlay(tutorial.id)}
                        className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center group cursor-pointer"
                        aria-label={`Play ${tutorial.title}`}
                      >
                        <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 md:p-6 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                          <Play className="h-6 w-6 md:h-8 md:w-8 text-white ml-1" fill="white" />
                        </div>
                      </button>

                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                        Video
                      </div>
                    </>
                  )}
                </div>

                <div className="p-6 text-left">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      Tutorial {index + 1}
                    </span>
                    <div className="text-xs text-gray-500 flex items-center">
                      <Video className="h-3 w-3 mr-1" />
                      Video
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {tutorial.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">{tutorial.description}</p>

                  <div className="flex items-center justify-between">
                    <a
                      href={tutorial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                    >
                      Watch on YouTube
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>

                    <div className="flex items-center text-xs text-gray-400 dark:text-gray-500">
                      <Hash className="h-3 w-3 mr-1" />
                      {index + 1} of {tutorials.length}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlackTutorials;
