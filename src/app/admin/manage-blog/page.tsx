"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, Image as ImageIcon, FileText, Loader2, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogManager() {
  const [posts, setPosts] = useState([
    { id: 1, title: "10 Tips for a Healthier Heart", category: "Wellness", author: "Dr. Sarah Johnson", date: "2024-03-15" },
    { id: 2, title: "Understanding Childhood Immunizations", category: "Pediatrics", author: "Dr. Michael Chen", date: "2024-03-10" },
  ])
  const [isAdding, setIsAdding] = useState(false)
  
  const handleDelete = (id: number) => {
    if (confirm("Delete this post?")) {
      setPosts(posts.filter(p => p.id !== id))
    }
  }

  return (
    <div className="space-y-8 pb-10">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-900">Manage Blog Content</h3>
        <Button onClick={() => setIsAdding(true)} className="gap-2">
          <Plus className="w-5 h-5" /> New Post
        </Button>
      </div>

      {isAdding && (
        <div className="bg-white p-8 rounded-[2.5rem] border-2 border-primary/20 shadow-xl animate-in slide-in-from-top-4 duration-300 relative">
          <button onClick={() => setIsAdding(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900"><X /></button>
          <form className="space-y-6">
            <h4 className="text-xl font-bold mb-6">Create New Article</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Article Title</label>
                <input type="text" placeholder="e.g. Modern Dentistry Advances" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Category</label>
                <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary appearance-none">
                  <option>Wellness</option>
                  <option>Pediatrics</option>
                  <option>Maternity</option>
                  <option>Surgery</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Excerpt</label>
              <textarea rows={2} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary" placeholder="Short summary of the article..."></textarea>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Content (Markdown)</label>
              <textarea rows={10} className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary font-mono text-sm" placeholder="Write your content here..."></textarea>
            </div>
            <div className="flex gap-4">
              <Button type="button" variant="outline" className="flex-1" onClick={() => setIsAdding(false)}>Cancel</Button>
              <Button type="submit" className="flex-[2]">Publish Article</Button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <th className="px-8 py-4">Article</th>
                <th className="px-4 py-4">Category</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 line-clamp-1">{post.title}</p>
                        <p className="text-xs text-gray-400">By {post.author} on {post.date}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-6">
                    <span className="px-3 py-1 bg-blue-50 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-4 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-xs font-medium text-gray-600">Published</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors"><Edit className="w-5 h-5" /></button>
                      <button onClick={() => handleDelete(post.id)} className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-5 h-5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
