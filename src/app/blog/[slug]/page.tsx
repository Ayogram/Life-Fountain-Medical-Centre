import Link from "next/link"
import { ArrowLeft, User, Calendar, Share2, MessageSquare, Globe, Link as LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function BlogPost({ params }: { params: { slug: string } }) {
  // In a real app, this would fetch from Supabase
  const post = {
    title: "10 Tips for a Healthier Heart",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    content: `
      Maintaining a healthy heart is one of the most important things you can do for your overall well-being. Heart disease remains a leading cause of health issues worldwide, but many of its risk factors are manageable through lifestyle changes.

      Here are 10 essential tips for a healthier heart:

      1. Eat a Balanced Diet: Focus on fruits, vegetables, whole grains, and lean proteins.
      2. Stay Physically Active: Aim for at least 30 minutes of moderate exercise most days of the week.
      3. Manage Stress: Use techniques like meditation or deep breathing.
      4. Get Enough Sleep: Adults generally need 7-9 hours of quality sleep.
      5. Don't Smoke: Quitting smoking is the single best thing you can do for your heart.
      6. Limit Alcohol: Moderation is key.
      7. Monitor Blood Pressure: Regular checkups are vital.
      8. Control Cholesterol: Be mindful of your saturated fat intake.
      9. Stay Hydrated: Water is essential for cardiovascular health.
      10. Maintain a Healthy Weight: Reducing excess body fat eases the strain on your heart.
    `,
    category: "Wellness",
    img: "https://images.unsplash.com/photo-1505751172107-573225a94042?auto=format&fit=crop&w=1200&q=80"
  }

  return (
    <article className="pb-20">
      {/* Article Header */}
      <section className="relative h-[60vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900">
          <img src={post.img} alt={post.title} className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 space-y-6 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" /> Back to Blog
          </Link>
          <div className="space-y-4">
            <span className="px-4 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-widest">{post.category}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 pt-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">SJ</div>
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" /> {post.date}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Content Body */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            {post.content.split('\n').map((para, i) => (
              para.trim() && <p key={i}>{para.trim()}</p>
            ))}
          </div>

          {/* Social Share */}
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <h4 className="font-bold text-gray-900">Share this article:</h4>
              <div className="flex gap-2">
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Share2 className="w-4 h-4" /></button>
                <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"><LinkIcon className="w-4 h-4" /></button>
              </div>
            </div>
            <Link href="/appointment">
              <Button size="lg">Book a Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
