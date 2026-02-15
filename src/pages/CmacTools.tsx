import { useState } from 'react';
import { ArrowLeft, ExternalLink, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Tool {
  id: string;
  name: string;
  url: string;
  description: string;
  gradient: string;
}

const tools: Tool[] = [
  {
    id: 'roof-visualizer',
    name: 'CMAC Roof Visualization Engine',
    url: 'https://cmac-shingle-visualizer.vercel.app/',
    description: 'Easy way to upsell customers in the field by showing them what their house will look like with any specific shingle.',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
  },
  {
    id: 'route-finagler',
    name: 'CMAC AI Route Finagler',
    url: 'https://cmac-route-finagler.vercel.app/',
    description: 'Uses AI to map your route, considering traffic timing, time at stops, and efficient routing.',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
  },
];

const CmacTools = () => {
  const navigate = useNavigate();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyLink = async (tool: Tool) => {
    try {
      await navigator.clipboard.writeText(tool.url);
      setCopiedId(tool.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleOpenTool = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Background Effects */}
      <div className="dark:hidden fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 -z-20" />
      <div className="hidden dark:block fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Navigation */}
          <button
            onClick={() => navigate('/')}
            className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group"
            aria-label="Back to Resource Center"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="font-medium">Back to Resource Center</span>
          </button>

          {/* Page Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                CMAC Tools
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Internal tools to help you sell smarter and move faster.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={tool.id}
                className="tool-card group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${tool.gradient}`} />

                {/* Card Content */}
                <div className="p-8 space-y-6">
                  {/* Tool Name */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                      {tool.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed min-h-[4rem]">
                    {tool.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      onClick={() => handleOpenTool(tool.url)}
                      className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white rounded-xl bg-gradient-to-r ${tool.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50`}
                      aria-label={`Open ${tool.name}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Open Tool</span>
                    </button>

                    <button
                      onClick={() => handleCopyLink(tool)}
                      className="flex items-center justify-center gap-2 px-6 py-3 font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
                      aria-label={`Copy link to ${tool.name}`}
                    >
                      {copiedId === tool.id ? (
                        <>
                          <Check className="w-5 h-5 text-green-500" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 text-center animate-fade-in-up animate-delay-400">
            <div className="inline-block px-8 py-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Need help?</span> Contact your team lead for guidance on using these tools effectively.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CmacTools;
