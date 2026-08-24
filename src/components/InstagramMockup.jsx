import React, { useState } from 'react';
import { Instagram, CheckCircle2, ExternalLink, Heart, MessageCircle, ChevronDown, UserPlus, Grid, Play, AtSign, UserSquare2, Home, Search, Film, Bell, X, Sparkles, TrendingUp } from 'lucide-react';

export default function InstagramMockup() {
  const [activeTab, setActiveTab] = useState('grid');
  const [likedPosts, setLikedPosts] = useState({ 1: true, 3: true });
  const [activeModalPost, setActiveModalPost] = useState(null);

  const toggleLike = (e, id) => {
    e.stopPropagation();
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 1:1 Recreated posts matching Zapple's real Instagram feed
  const instagramPosts = [
    {
      id: 1,
      type: 'image',
      title: "REAL RESULTS.",
      subtitle: "Delivering Performance Beyond Pledges",
      tag: "META ADS",
      badge: "ROAS 4.8x",
      bgColor: "bg-slate-950",
      content: (
        <div className="w-full h-full bg-slate-950 p-2.5 flex flex-col justify-between text-white relative overflow-hidden border border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800 pb-1">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-red-600 flex items-center justify-center text-[7px] font-black">Z</div>
              <span className="text-[8px] font-extrabold text-slate-300">ZAPPLE ADS</span>
            </div>
            <span className="text-[7px] font-bold text-red-500 bg-red-950 px-1 rounded">LIVE METRICS</span>
          </div>

          <div className="space-y-1 my-auto">
            <div className="text-[11px] font-black tracking-tight leading-none text-yellow-400 uppercase">
              REAL RESULTS.
            </div>
            <div className="text-[7px] text-slate-300 leading-tight">
              Delivering Performance Beyond Pledges
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded border border-slate-800 space-y-1">
              <div className="flex justify-between text-[7px]">
                <span className="text-slate-400">Monthly Ad Spend:</span>
                <span className="font-bold text-slate-200">₹1,25,000</span>
              </div>
              <div className="flex justify-between text-[7px]">
                <span className="text-slate-400">Verified Revenue:</span>
                <span className="font-extrabold text-emerald-400">₹6,00,000 (4.8x)</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[7px] text-slate-400">
            <span>Verified Case Study</span>
            <span className="text-red-400 font-bold">@zapple_digital</span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      type: 'reel',
      title: "5K on Meta Ads Expectations vs Reality",
      subtitle: "Reel Analysis",
      tag: "VIRAL REEL",
      badge: "REEL 12.4K",
      content: (
        <div className="w-full h-full bg-slate-900 p-2 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="flex justify-end z-10">
            <div className="w-5 h-5 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
            </div>
          </div>

          <div className="absolute inset-x-2 top-6 bottom-8 bg-slate-800 rounded border border-slate-700 p-1.5 flex flex-col justify-center items-center">
            <div className="w-full h-2 bg-slate-700 rounded mb-1" />
            <div className="w-3/4 h-1.5 bg-red-600/60 rounded mb-2" />
            <div className="w-full h-8 bg-slate-900/90 rounded p-1 flex items-center justify-center text-[7px] font-mono text-emerald-400">
              [Ads Manager Active]
            </div>
          </div>

          <div className="z-10 bg-white text-slate-900 px-1.5 py-1 rounded shadow-lg text-[8px] font-black text-center leading-tight mx-auto max-w-[90%]">
            5K on Meta Ads<br />
            <span className="text-[7px] font-semibold text-slate-700">Expectations 📈 | Reality 📉</span>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      type: 'image',
      title: "LAUNCH YOUR WEBSITE",
      subtitle: "High Converting Agency Design",
      tag: "WEBSITE DESIGN",
      badge: "NEW LAUNCH",
      content: (
        <div className="w-full h-full bg-white p-2.5 flex flex-col justify-between text-slate-900 relative overflow-hidden border border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded bg-red-600" />
              <span className="text-[8px] font-black text-red-600 tracking-tighter">Zapple</span>
            </div>
            <span className="text-[6px] font-bold text-slate-500">zappledigital.com</span>
          </div>

          <div className="text-center space-y-0.5 py-1">
            <div className="text-[7px] text-slate-500 uppercase font-bold tracking-wider">LAUNCH YOUR</div>
            <div className="text-[12px] font-black text-red-600 leading-none tracking-tight">
              WEBSITE
            </div>
            <div className="w-6 h-0.5 bg-slate-900 mx-auto my-0.5" />
            <div className="text-[6px] text-slate-600 font-semibold">High Conversion • Ultra Fast</div>
          </div>

          <div className="bg-red-600 text-white rounded p-1 text-[7px] font-bold text-center flex items-center justify-center gap-1">
            <span>Call: +91 99626 32103</span>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      type: 'reel',
      title: "YOUR BUSINESS DESERVES MORE LEADS",
      subtitle: "Reel Video",
      tag: "GROWTH REEL",
      badge: "REEL 8.9K",
      content: (
        <div className="w-full h-full bg-slate-950 p-2 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="flex justify-end z-10">
            <div className="w-5 h-5 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
            </div>
          </div>

          <div className="z-10 bg-black/85 p-1.5 rounded border-l-2 border-red-600 space-y-0.5 my-auto">
            <div className="text-[8px] font-black text-white leading-tight">
              YOUR BUSINESS DESERVES
            </div>
            <div className="text-[9px] font-black text-red-500 leading-none">
              MORE LEADS.
            </div>
          </div>

          <div className="z-10 text-[6px] text-slate-400 font-mono">
            @zapple_digital
          </div>
        </div>
      ),
    },
    {
      id: 5,
      type: 'image',
      title: "MORE REACH. MORE IMPACT.",
      subtitle: "Scalable Marketing",
      tag: "VIRAL IMPACT",
      badge: "REACH 10M+",
      content: (
        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-red-950 to-black p-2.5 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="text-[7px] font-extrabold text-red-500 tracking-widest uppercase">ZAPPLE GROWTH</div>

          <div className="space-y-0.5 my-auto">
            <div className="text-[11px] font-black text-white leading-none">
              MORE REACH.
            </div>
            <div className="text-[11px] font-black text-red-500 leading-none">
              MORE IMPACT.
            </div>
            <div className="text-[6px] text-slate-300 pt-1">3D Performance Funnels</div>
          </div>

          <div className="text-[7px] font-bold text-slate-400 border-t border-red-900/50 pt-1 flex justify-between">
            <span>Scale Your Brand</span>
            <span className="text-red-400">📈</span>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      type: 'image',
      title: "Dedicated Business Website",
      subtitle: "Grow your business online",
      tag: "WEB DEV",
      badge: "SOLUTIONS",
      content: (
        <div className="w-full h-full bg-white p-2.5 flex flex-col justify-between text-slate-900 relative overflow-hidden border border-slate-200">
          <div className="flex justify-between items-center text-[7px] font-bold text-red-600">
            <span>Zapple Digital</span>
            <span>SEO & Web</span>
          </div>

          <div className="space-y-1 my-auto text-center">
            <div className="text-[8px] font-extrabold text-slate-800 leading-tight">
              Grow Your Business Online With A Dedicated Website
            </div>
            <div className="w-12 h-1 bg-red-600 mx-auto rounded-full" />
          </div>

          <div className="text-[6px] font-semibold text-slate-500 text-center">
            www.zappledigital.com
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="instagram" className="py-24 relative overflow-hidden bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Zapple Metallic Red Edition Smartphone Chassis */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Pulsing Red Ambient Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-84 h-[440px] bg-red-600/25 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

            {/* Floating Metric Badges */}
            <div className="absolute -top-4 -left-2 sm:left-4 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-red-200 shadow-xl flex items-center gap-2 animate-float">
              <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-red-600 to-red-500 text-white flex items-center justify-center font-black text-xs shadow-md">
                Z
              </div>
              <div>
                <div className="text-[11px] font-black text-slate-900">2,504+ Followers</div>
                <div className="text-[9px] text-red-600 font-bold">@zapple_digital</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-2 sm:right-4 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-emerald-200 shadow-xl flex items-center gap-2 animate-float" style={{ animationDelay: '2s' }}>
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <div>
                <div className="text-[11px] font-black text-slate-900">+340% ROAS</div>
                <div className="text-[9px] text-emerald-600 font-bold">Verified Meta Ads</div>
              </div>
            </div>

            {/* Zapple Crimson Metallic Red Phone Chassis */}
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/18.5] bg-gradient-to-b from-red-600 via-red-700 to-red-900 rounded-[52px] p-3.5 shadow-2xl shadow-red-600/30 border-4 border-red-500/80 ring-4 ring-red-600/20 group transform hover:rotate-1 hover:scale-[1.01] transition-all duration-500">
              
              {/* Metallic Red Side Buttons */}
              <div className="absolute -left-1.5 top-24 w-1 h-8 bg-red-800 rounded-l-sm border-r border-red-500" />
              <div className="absolute -left-1.5 top-36 w-1 h-10 bg-red-800 rounded-l-sm border-r border-red-500" />
              <div className="absolute -left-1.5 top-48 w-1 h-10 bg-red-800 rounded-l-sm border-r border-red-500" />
              <div className="absolute -right-1.5 top-32 w-1 h-14 bg-red-800 rounded-r-sm border-l border-red-500" />

              {/* Dynamic Island Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-between px-2.5 shadow-md border border-slate-800">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
                <div className="w-3 h-3 rounded-full bg-[#0d0d0d] border border-slate-800 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-900/80" />
                </div>
              </div>

              {/* Speaker Ear Piece */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-red-900 rounded-full z-40" />

              {/* Internal Phone Screen (Exact Dark IG Interface) */}
              <div className="w-full h-full bg-[#09090b] rounded-[40px] overflow-hidden flex flex-col pt-6 font-sans text-slate-100 relative shadow-inner select-none border border-black">
                
                {/* Status Bar */}
                <div className="px-5 pt-1 pb-1.5 flex items-center justify-between text-[10px] font-bold text-slate-200 bg-[#09090b]">
                  <span>00:09</span>
                  <div className="text-[9px] text-slate-400 font-mono tracking-tighter">
                    www.instagram.com
                  </div>
                  <div className="flex items-center gap-1 text-[9px]">
                    <span>5G</span>
                    <div className="w-3.5 h-2 rounded-sm border border-slate-300 p-0.5 flex items-center">
                      <div className="w-full h-full bg-slate-200 rounded-xs" />
                    </div>
                  </div>
                </div>

                {/* Top Instagram Header */}
                <div className="px-4 py-2 border-b border-slate-800/80 flex items-center justify-between bg-[#09090b]">
                  <span className="text-slate-300 font-bold text-xs cursor-pointer">‹</span>
                  <div className="flex items-center gap-1">
                    <span className="font-extrabold text-xs text-white">zapple_digital</span>
                  </div>
                  <span className="text-slate-400 text-xs font-bold cursor-pointer">•••</span>
                </div>

                {/* Profile Header */}
                <div className="p-4 space-y-3 bg-[#09090b]">
                  
                  <div className="flex items-center justify-between">
                    {/* Avatar */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-yellow-500 via-red-600 to-purple-600 shadow-md">
                        <div className="w-full h-full rounded-full bg-white p-1">
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm">
                            <div className="flex items-center justify-center gap-0.5">
                              <span className="font-display font-black text-red-600 text-lg leading-none">7.</span>
                              <span className="font-bold text-[8px] text-slate-900 leading-none tracking-tighter">Zapple</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-center">
                      <div>
                        <div className="font-extrabold text-sm text-white">92</div>
                        <div className="text-[10px] text-slate-400 font-medium">posts</div>
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-white">2,504</div>
                        <div className="text-[10px] text-slate-400 font-medium">followers</div>
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-white">40</div>
                        <div className="text-[10px] text-slate-400 font-medium">following</div>
                      </div>
                    </div>
                  </div>

                  {/* Profile Bio */}
                  <div className="space-y-1 text-xs">
                    <div className="font-extrabold text-white text-xs">
                      Zapple Digital
                    </div>
                    <div className="text-slate-300 text-[11px] leading-tight space-y-0.5 font-normal">
                      <div>🚀 Digital Marketing Experts</div>
                      <div>📊 We grow brands with data & creativity</div>
                      <div>🎯 Ads | Content | Lead Generation</div>
                    </div>
                    <a href="https://www.zappledigital.com" className="text-[11px] text-slate-400 hover:underline block font-medium">
                      🔗 www... <span className="text-slate-500">more</span>
                    </a>
                  </div>

                  {/* Social Proof Line */}
                  <div className="flex items-center gap-2 pt-0.5">
                    <div className="w-4 h-4 rounded-full bg-purple-600 flex items-center justify-center text-[8px] text-white font-bold">
                      P
                    </div>
                    <span className="text-[10px] text-slate-400">Followed by <strong className="text-slate-200 font-semibold">pavi_thra_30</strong></span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-12 gap-1.5 text-xs font-semibold pt-1">
                    <button className="col-span-5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-center text-[11px] flex items-center justify-center gap-1">
                      <span>Following</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    <a 
                      href="https://wa.me/919962632103?text=Hi%20Zapple%20Digital!%20Saw%20your%20Instagram%20profile." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="col-span-5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-center text-[11px] flex items-center justify-center"
                    >
                      Message
                    </a>
                    <button className="col-span-2 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center">
                      <UserPlus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Tab Navigation Bar */}
                <div className="grid grid-cols-4 border-t border-b border-slate-800/80 bg-[#09090b] text-center text-xs">
                  <button 
                    onClick={() => setActiveTab('grid')}
                    className={`py-2.5 flex justify-center items-center border-b-2 ${activeTab === 'grid' ? 'border-red-500 text-white' : 'border-transparent text-slate-500'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setActiveTab('reels')}
                    className={`py-2.5 flex justify-center items-center border-b-2 ${activeTab === 'reels' ? 'border-red-500 text-white' : 'border-transparent text-slate-500'}`}
                  >
                    <Film className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setActiveTab('threads')}
                    className={`py-2.5 flex justify-center items-center border-b-2 ${activeTab === 'threads' ? 'border-red-500 text-white' : 'border-transparent text-slate-500'}`}
                  >
                    <AtSign className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setActiveTab('tagged')}
                    className={`py-2.5 flex justify-center items-center border-b-2 ${activeTab === 'tagged' ? 'border-red-500 text-white' : 'border-transparent text-slate-500'}`}
                  >
                    <UserSquare2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Feed Grid */}
                <div className="flex-1 overflow-y-auto p-0.5 bg-black">
                  <div className="grid grid-cols-3 gap-0.5">
                    {instagramPosts.map((post) => (
                      <div 
                        key={post.id}
                        onClick={() => setActiveModalPost(post)}
                        className="aspect-square relative cursor-pointer group/card overflow-hidden"
                      >
                        {post.content}
                        <div className="absolute top-1 right-1 z-20">
                          <button 
                            onClick={(e) => toggleLike(e, post.id)} 
                            className="p-1 rounded-full bg-black/40 backdrop-blur-sm"
                          >
                            <Heart className={`w-3 h-3 ${likedPosts[post.id] ? 'text-red-500 fill-red-500' : 'text-white'}`} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom App Banner */}
                <div className="bg-[#121216] px-3 py-1.5 flex items-center justify-between border-t border-slate-800 text-[10px]">
                  <span className="text-slate-300 font-semibold">Use the app</span>
                  <X className="w-3 h-3 text-slate-400 cursor-pointer" />
                </div>

                {/* Bottom Navigation Dock */}
                <div className="px-4 py-2 bg-black border-t border-slate-900 flex items-center justify-between text-slate-400">
                  <Home className="w-4 h-4 text-white" />
                  <Search className="w-4 h-4" />
                  <Film className="w-4 h-4" />
                  <div className="relative">
                    <Bell className="w-4 h-4" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 rounded-full text-[7px] text-white font-bold flex items-center justify-center">1</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-red-600 text-white text-[8px] font-bold flex items-center justify-center">Z</div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Copy & Agency Social Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-600 uppercase bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200 shadow-sm">
              <Instagram className="w-3.5 h-3.5" />
              <span>OFFICIAL INSTAGRAM HANDLE</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              Follow <span className="text-gradient-brand">@zapple_digital</span> On Instagram
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-medium">
              Check out our live campaign results, client success stories, short-form marketing reels, and creative strategy breakdowns directly from our official Instagram profile.
            </p>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 py-2">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm">
                <div className="font-display font-black text-2xl text-slate-900">2,504+</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Active Followers</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm">
                <div className="font-display font-black text-2xl text-red-600">92</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Case Study Posts</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm">
                <div className="font-display font-black text-2xl text-slate-900">10M+</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Total Reel Views</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://instagram.com/zapple_digital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md shadow-red-600/20 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>FOLLOW @ZAPPLE_DIGITAL</span>
              </a>

              <a
                href="https://wa.me/919962632103?text=Hi%20Zapple%20Digital!%20Found%20your%20Instagram%20profile."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm px-6 py-3.5 rounded-xl border border-slate-300 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>DIRECT MESSAGE ON WHATSAPP</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Post Zoom Modal Preview */}
      {activeModalPost && (
        <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-sm w-full p-6 rounded-3xl border border-slate-200 space-y-4 relative shadow-2xl animate-in zoom-in-95">
            <button
              onClick={() => setActiveModalPost(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
              {activeModalPost.content}
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-red-600">{activeModalPost.tag}</span>
              <h4 className="font-display font-extrabold text-lg text-slate-900">{activeModalPost.title}</h4>
              <p className="text-xs text-slate-600">{activeModalPost.subtitle}</p>
            </div>

            <a
              href="https://instagram.com/zapple_digital"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <Instagram className="w-4 h-4" />
              <span>View Post on Instagram</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
