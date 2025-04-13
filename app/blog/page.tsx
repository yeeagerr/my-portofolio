"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"
import BlogModal from "@/components/blog-modal"

// Sample blog posts data with expanded content
const blogPosts = [
  {
    id: 1,
    title: "Web Dev Glow-Up: Why Tailwind CSS is Your New BFF",
    excerpt: "Ditch the CSS stress and let Tailwind make your web projects pop like a Gen Z TikTok trend.",
    content: (
      <>
        <p>
          Yo, writing CSS from scratch is like trying to untangle Christmas lights in July—frustrating and nobody asked for it. Enter Tailwind CSS, the utility-first framework that’s basically the fairy godmother of web dev. It’s fast, it’s flexible, and it makes your site look like it belongs in 2025, not 2005. Sound dope, right?
        </p>
        <p>
          Let’s break down why Tailwind is the ultimate glow-up for your web projects and how it saves you from the eternal “why won’t this div center” meltdown.
        </p>
        <h3>What’s the Vibe with Tailwind?</h3>
        <p>
          Tailwind lets you style right in your HTML with pre-built classes. No more jumping between files like you’re playing CSS ping-pong. Want a button that’s bold, blue, and bouncy? Just slap on `bg-blue-500 text-white font-bold py-2 px-4 rounded hover:scale-105`. Boom, done. It’s like building a LEGO set, but the instructions actually make sense.
        </p>
        <p>
          Plus, it’s customizable. You can tweak colors, spacing, whatever, to match your brand without rewriting a million lines. Ever tried that with vanilla CSS? Yeah, I’d rather binge-watch a coding tutorial playlist.
        </p>
        <h3>Why It Slaps for Devs</h3>
        <ul>
          <li>Speed: Build faster than you can say “responsive design.”</li>
          <li>No Bloat: Purge unused styles so your site loads quicker than a Gen Z meme going viral.</li>
          <li>Consistency: Your UI stays clean, like your Spotify Wrapped aesthetic.</li>
          <li>Community: Plugins galore, from forms to typography. It’s like the App Store for CSS.</li>
        </ul>
        <p>
          Look, Tailwind isn’t perfect—it’s got a learning curve, and some devs say it makes HTML look like a keyboard smash. But once you get the hang of it, it’s smoother than a fresh jar of Nutella. Ready to give it a spin?
        </p>
      </>
    ),
    date: "April 13, 2025",
    category: "Development",
    image: "https://pbs.twimg.com/media/ELYsGXAW4AIsTRk.jpg",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "AI in Web Dev: Is It Coding Our Jobs Away or Nah?",
    excerpt: "AI tools are popping off, but are they here to steal our keyboards or just make us better devs?",
    content: (
      <>
        <p>
          Okay, real talk: AI is everywhere, like avocado toast at a brunch spot. From GitHub Copilot spitting out code to AI design tools mocking up sites, it’s got web devs wondering, “Are we about to get yeeted out of a job?” Spoiler: probably not, but let’s unpack it like it’s a mystery box from an eBay haul.
        </p>
        <br />
        <p>
          AI’s changing the game, no cap, but is it a teammate or a takeover? Here’s the tea on how AI’s shaking up web dev.
        </p>
        <h3>AI’s Got Skills, But It’s Not You</h3>
        <p>
          AI can crank out boilerplate code faster than you can Google “CSS flexbox cheat sheet.” Tools like Copilot or ChatGPT are like that one friend who’s *really* good at trivia—they’ve got answers, but they don’t always get the vibe. Need a React component? AI’s got you. Need it to match your client’s weirdly specific brand guidelines? Good luck, buddy.
        </p>
        <br />

        <p>
          Plus, AI’s not out here solving the big stuff—like debugging a production bug at 2 a.m. or convincing a client that Comic Sans isn’t “modern.” That’s where your brain still wins, right?
        </p>
        <br />

        <h3>How to Ride the AI Wave</h3>
        <ul>
          <li>Use AI for grunt work: Let it handle repetitive tasks like form validation.</li>
          <li>Learn to prompt: Asking AI the right questions is like training a puppy—takes practice.</li>
          <li>Stay creative: AI can’t dream up a UI that screams “iconic” like you can.</li>
          <li>Upskill: Dive into AI integrations to make your projects next-level.</li>
        </ul>
        <br />

        <p>
          At the end of the day, AI’s like a super-smart intern—helpful, but it needs you to steer the ship. So, keep coding, keep creating, and maybe let AI write your next README. Thoughts? Is AI your new sidekick or what?
        </p>
      </>
    ),
    date: "April 10, 2025",
    category: "AI",
    image: "https://preview.redd.it/finally-thanks-ai-s-v0-qoih7zhsyyoa1.jpg?width=1080&crop=smart&auto=webp&s=f66584b0413f9ff3c5b9305191d6d58021312b96",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Gen Z Memes: Why They’re the Secret Sauce of Web Design",
    excerpt: "How Gen Z’s chaotic meme energy can level up your site’s vibe and keep users scrolling.",
    content: (
      <>
        <p>
          If you’ve ever scrolled X and laughed at a Gen Z meme about “adulting” or “low battery anxiety,” you know they hit different. That raw, unfiltered chaos? It’s gold for web design. Memes aren’t just for giggles—they’re a masterclass in grabbing attention and keeping it. Wanna make your site stickier than a viral TikTok? Let’s talk memes.
        </p>
        <p>
          Here’s how Gen Z’s meme obsession can inspire your next web project to slap harder than a “nobody:” caption.
        </p>
        <h3>Memes = Instant Vibes</h3>
        <p>
          Gen Z memes are short, punchy, and relatable—like a good website should be. Think about it: a homepage with a cheeky “404: Motivation Not Found” easter egg? Instant win. Memes cut through the noise because they’re real, and users can smell fake from a mile away. Ever tried making a boring corporate site “fun”? Yeah, it’s like putting socks on a cat.
        </p>
        <p>
          The key is balance. You don’t wanna turn your portfolio into a Reddit thread, but a splash of meme energy—like quirky microcopy or a playful loading animation—makes your site feel alive.
        </p>
        <h3>Steal These Meme Moves</h3>
        <ul>
          <li>Bold visuals: Use loud colors or retro aesthetics like a “sad Affleck” vibe.</li>
          <li>Snappy text: Microcopy like “Oops, we broke the internet” for errors.</li>
          <li>Interactive bits: Add a hover effect that says “sksksk and I oop.”</li>
          <li>Relatability: Design for the “I’m just a girl” struggle—keep it human.</li>
        </ul>
        <p>
          Memes are like hot sauce—a little goes a long way. Too much, and your site’s giving 2010 Tumblr energy. So, what’s your fave meme to sneak into a project? Spill the tea!
        </p>
      </>
    ),
    date: "April 7, 2025",
    category: "Design",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1VWy54dkxjPYx1Shhx7_EphTdFYZJ3AvGQ&s",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "AI-Powered Websites: Building Smarts, Not Just Looks",
    excerpt: "How to sprinkle AI magic into your web projects for a site that thinks as good as it looks.",
    content: (
      <>
        <p>
          Yo, building a website that’s just pretty is like making a sandwich with only bread—kinda useless. These days, AI can make your site *smart*, like it’s got a PhD in user experience. From chatbots that don’t suck to personalized content, AI’s here to make your web game unstoppable. Excited yet?
        </p>
        <p>
          Let’s dive into how you can use AI to build websites that aren’t just eye candy but actually *do* stuff.
        </p>
        <h3>Why AI Makes Sites Pop</h3>
        <p>
          AI’s like that friend who always knows what you’re craving before you do. It can analyze user behavior and serve up custom content—like recommending blog posts or products—faster than you can say “algorithm.” Imagine a site that tweaks its layout based on who’s clicking. Wild, right?
        </p>
        <p>
          And don’t sleep on chatbots. A good AI chatbot can answer FAQs, guide users, and not sound like a robot from a 90s sci-fi flick. It’s like having a 24/7 hype man for your site.
        </p>
        <h3>Easy AI Wins for Your Site</h3>
        <ul>
          <li>Personalization: Use AI to suggest content based on user habits.</li>
          <li>Chatbots: Add one that’s actually helpful, not “please hold for eternity.”</li>
          <li>Analytics: AI can spot patterns in traffic you’d miss, like a sneaky UX flaw.</li>
          <li>Voice search: Optimize for AI assistants because, yes, people talk to their phones.</li>
        </ul>
        <p>
          Sure, AI sounds fancy, but tools like TensorFlow.js or even no-code platforms make it easier than assembling IKEA furniture. So, what’s stopping you from making your site a brainiac? Let’s hear it!
        </p>
      </>
    ),
    date: "April 4, 2025",
    category: "AI",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Coding with Gen Z Energy: Embracing the Chaos",
    excerpt: "How Gen Z’s wild, meme-fueled vibe is reshaping the way we code and create.",
    content: (
      <>
        <p>
          Coding used to feel like a super serious “grown-up” thing, like wearing a tie or paying taxes. But Gen Z? They’re out here turning dev life into a vibe—think late-night hackathons, meme-filled Slack channels, and “deployed it, no bugs, I’m a god” energy. Wanna code like you’re starring in a Gen Z montage? Let’s get into it.
        </p>
        <p>
          Here’s how Gen Z’s chaotic brilliance is flipping the script on coding culture.
        </p>
        <h3>The Gen Z Coding Aesthetic</h3>
        <p>
          Forget boring beige cubicles—Gen Z coders are all about aesthetic. Neon VS Code themes, lo-fi beats on repeat, and commit messages like “fixed the thing, don’t ask.” They’re not just writing code; they’re *curating* an experience. Ever seen a dev’s GitHub profile look like a Pinterest board? That’s the energy.
        </p>
        <p>
          And the memes—oh, the memes. Nothing says “I’m stuck on a bug” like spamming a “crying cat” GIF in the group chat. It’s like therapy, but free.
        </p>
        <h3>How to Code with That Zest</h3>
        <ul>
          <li>Embrace chaos: Messy code? Refactor it with a “no thoughts, just vibes” mindset.</li>
          <li>Meme it up: Use humor to survive the grind—name your variables `yeet` or `bruh`.</li>
          <li>Collab hard: Pair program like you’re hyping each other up for a TikTok dance.</li>
          <li>Stay curious: Gen Z learns fast—dive into new frameworks like it’s a side quest.</li>
        </ul>
        <p>
          Coding with Gen Z energy is like throwing a party where everyone’s invited, even the bugs. So, what’s your go-to meme when the code won’t compile? Drop it below!
        </p>
      </>
    ),
    date: "April 1, 2025",
    category: "Development",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Web Dev Hacks You Wish You Knew Sooner",
    excerpt: "Time-saving tricks to make your coding life easier than a sunny day with no bugs.",
    content: (
      <>
        <p>
          Look, web dev can feel like wrestling a bear sometimes—messy, stressful, and you’re not sure who’s winning. But what if I told you there’s a bag of hacks that can make your life smoother than a fresh Spotify playlist? These are the shortcuts I wish someone DM’d me when I started. Ready to level up?
        </p>
        <p>
          Let’s spill some web dev secrets that’ll have you coding like you’ve got cheat codes.
        </p>
        <h3>Hacks That Hit Different</h3>
        <p>
          First up: DevTools is your sidekick, not just a fancy console. Use the “Inspect Element” to test CSS changes live—tweak colors, sizes, whatever—without touching your codebase. It’s like trying on clothes before you buy. Ever spent an hour debugging only to realize it was a typo? Yeah, DevTools saves you from that vibe.
        </p>
        <p>
          Another gem? Use `console.table()` for arrays or objects. It’s like turning your messy data into a cute little spreadsheet. Why didn’t I know this sooner? No clue.
        </p>
        <h3>More Tricks to Steal</h3>
        <ul>
          <li>Snippets: Save reusable code in VS Code for instant copy-paste wins.</li>
          <li>Emmet: Type `div.container>ul>li*3` and watch HTML unfold like magic.</li>
          <li>Lazy load: Only load images when they’re in view—your site’s now Usain Bolt.</li>
          <li>Hotkeys: Learn your IDE’s shortcuts. It’s like gaming with a pro controller.</li>
        </ul>
        <p>
          These hacks are like finding $20 in your pocket—small, but they make your day. What’s the one dev trick you can’t live without? Tell me, I’m curious!
        </p>
      </>
    ),
    date: "March 29, 2025",
    category: "Development",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    readTime: "5 min read",
  },
  {
    id: 7,
    title: "Meme Vibe Coder: Surviving Dev Life with LOLs",
    excerpt: "How to code, cry, and meme your way through the wild world of web development.",
    content: (
      <>
        <p>
          Being a coder is like being a chef in a kitchen fire—chaotic, sweaty, and you’re just hoping the end result doesn’t suck. But if you’re a *meme vibe coder*, you’re out here seasoning your commits with “LGTM” GIFs and naming branches `fix-this-pls`. It’s not just a job; it’s a lifestyle. Wanna join the club?
        </p>
        <p>
          Here’s how to embrace the meme vibe coder life and make dev work feel like a Discord hangout.
        </p>
        <h3>The Meme Vibe Starter Pack</h3>
        <p>
          First, your setup’s gotta scream “I’m unhinged but productive.” Think RGB keyboard, a second monitor for memes, and a playlist that’s 50% lo-fi, 50% “Never Gonna Give You Up.” Your code comments? Pure poetry, like `// why does this work, I’m scared`. Ever pushed code at 3 a.m. with a “this is fine” dog meme in the PR? That’s the spirit.
        </p>
        <p>
          And bugs? They’re not problems—they’re plot twists. Slap a “surprised Pikachu” meme in the group chat and keep grinding. It’s all about the vibes.
        </p>
        <h3>How to Thrive as a Meme Vibe Coder</h3>
        <ul>
          <li>Commit with flair: Messages like “touched grass, broke everything” are chef’s kiss.</li>
          <li>Slack memes: Drop a “Distracted Boyfriend” when you pivot to a new bug.</li>
          <li>Embrace chaos: Your codebase is a masterpiece, even if it’s held together by duct tape.</li>
          <li>Stay hydrated: Coffee, energy drinks, or tears—pick your poison.</li>
        </ul>
        <p>
          Being a meme vibe coder is about finding joy in the grind, like laughing at a 500 error because what else can you do? So, what’s your go-to meme for surviving a deploy gone wrong? Hit me with it!
        </p>
      </>
    ),
    date: "April 13, 2025",
    category: "Development",
    image: "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    readTime: "6 min read",
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <main className="min-h-screen bg-white pt-24 pb-24">
      <CustomCursor />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6">
            Blog & Insights
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughts, ideas, and insights on design, development, and the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.slice(0, 2).map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: post.id * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="flex items-center text-xs text-gray-500">
                  <Calendar className="h-3 w-3 mr-1" />
                  {post.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                Read More
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(2).map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>
              <h2 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
              <div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                Read More
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      <BlogModal post={selectedPost} isOpen={!!selectedPost} onClose={() => setSelectedPost(null)} />
    </main>
  )
}
