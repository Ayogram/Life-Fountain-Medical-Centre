import Link from "next/link"
import { Calendar, User, ArrowRight, MessageSquare, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "10 Tips for a Healthier Heart",
    slug: "healthier-heart-tips",
    excerpt: "Learn the essential habits that can help you maintain a strong and healthy heart as you age.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    category: "Wellness",
    img: "https://images.unsplash.com/photo-1505751172107-573225a94042?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Understanding Childhood Immunizations",
    slug: "childhood-immunizations",
    excerpt: "Everything parents need to know about the importance and schedule of vaccinations for children.",
    author: "Dr. Michael Chen",
    date: "March 10, 2024",
    category: "Pediatrics",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Importance of Regular Checkups",
    slug: "regular-checkups",
    excerpt: "Why preventative care is the most efficient way to maintain long-term health and catch issues early.",
    author: "Dr. James Miller",
    date: "March 05, 2024",
    category: "General Health",
    img: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Nutrition Guide for Expectant Mothers",
    slug: "maternity-nutrition",
    excerpt: "A comprehensive guide on what to eat and what to avoid during your pregnancy journey.",
    author: "Dr. Emily Brown",
    date: "February 28, 2024",
    category: "Maternity",
    img: "https://images.unsplash.com/photo-1531983412531-1f49a365ff67?auto=format&fit=crop&w=800&q=80"
  }
]

export default function Blog() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6">Health & Wellness Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Stay updated with the latest medical news, health tips, and hospital updates from our expert team.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post, i) => (
            <div key={i} className="group flex flex-col md:flex-row gap-8 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="md:w-2/5 overflow-hidden">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 aspect-[4/3] md:aspect-auto" 
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-accent text-primary text-xs font-bold rounded-full uppercase tracking-widest">{post.category}</span>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
                
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary text-xs">
                      {post.author[4]}
                    </div>
                    <span className="text-xs font-bold text-gray-700">{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="space-y-6 max-w-xl">
            <h2 className="text-4xl font-bold">Health Tips in Your Inbox</h2>
            <p className="text-gray-400 text-lg">Join 5,000+ others and receive weekly health advice and medical articles right to your email.</p>
          </div>
          <div className="w-full lg:max-w-md">
            <form className="flex gap-4 p-2 bg-white/10 backdrop-blur rounded-2xl border border-white/10">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none focus:ring-0 flex-grow px-4 text-white placeholder-gray-500" 
              />
              <Button className="shrink-0 bg-white text-primary hover:bg-gray-100">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
