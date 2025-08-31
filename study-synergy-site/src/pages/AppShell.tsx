import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Home, Users, MessageSquare, Settings, Menu } from "lucide-react";

import { CreatePost } from "../components/CreatePost";
import { Modal } from "../components/Modal";
import { usePostStore } from "../../store/usePost"; // 👈 Zustand store

export default function Dashboard() {
    const [search, setSearch] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const { posts, loading, fetchPosts } = usePostStore();

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return (
        <div className="flex h-screen bg-gray-50">
            {/* ---------------- Sidebar ---------------- */}
            <div
                className={`fixed inset-0 z-40 bg-black/40 md:hidden ${sidebarOpen ? "block" : "hidden"}`}
                onClick={() => setSidebarOpen(false)}
            />
            <aside
                className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg p-5 flex flex-col transform
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-200 ease-in-out`}
            >
                <h2 className="text-xl font-bold mb-6">Dashboard</h2>

                <nav className="flex flex-col gap-3 text-gray-700">
                    <SidebarItem icon={<Home size={18} />} label="Feed" />
                    <SidebarItem icon={<Users size={18} />} label="Mentors" />
                    <SidebarItem icon={<MessageSquare size={18} />} label="Messages" />
                    <SidebarItem icon={<Settings size={18} />} label="Settings" />
                </nav>

                <div className="mt-auto">
                    <Card className="p-4">
                        <p className="text-sm text-gray-600">Logged in as:</p>
                        <p className="font-medium">John Doe</p>
                    </Card>
                </div>
            </aside>

            {/* ---------------- Main Content ---------------- */}
            <main className="flex-1 p-4 md:p-6 overflow-y-auto">
                {/* -------- Top Bar -------- */}
                <div className="flex items-center justify-between mb-6">
                    {/* Mobile menu button */}
                    <Button
                        variant="ghost"
                        className="md:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu size={22} />
                    </Button>

                    <div className="flex flex-1 items-center gap-3 flex-col sm:flex-row">
                        <div className="relative flex-1 w-full">
                            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                            <Input
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-10 rounded-full w-full"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button onClick={() => setIsModalOpen(true)}>Post</Button>
                            <Avatar>
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>

                {/* Modal for CreatePost */}
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <CreatePost />
                </Modal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* -------- Feed Section -------- */}
                    <section className="lg:col-span-2 space-y-4">
                        {loading ? (
                            <p className="text-gray-500">Loading posts...</p>
                        ) : posts.length === 0 ? (
                            <p className="text-gray-500">No posts yet.</p>
                        ) : (
                            posts
                                .filter((post) =>
                                    post.content.toLowerCase().includes(search.toLowerCase())
                                )
                                .map((post) => (
                                    <PostCard
                                        key={post._id}
                                        name={post.author.name}
                                        role={post.author.role || "Member"}
                                        content={post.content}
                                        media={post.media}
                                    />
                                ))
                        )}
                    </section>

                    {/* -------- Right Sidebar -------- */}
                    <aside className="space-y-6">
                        {/* Recommended People */}
                        <Card>
                            <CardHeader>
                                <h3 className="font-semibold">Recommended for You</h3>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <UserCard name="Riya Sharma" role="Alumni" mutuals="2 mutuals" />
                                <UserCard name="Vikas Mehta" role="Student" mutuals="3 mutuals" />
                            </CardContent>
                        </Card>

                        {/* Trending Tags */}
                        <Card>
                            <CardHeader>
                                <h3 className="font-semibold">Trending Tags</h3>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {["#AI", "#ResumeReview", "#Hackathon", "#Internships"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full cursor-pointer hover:bg-blue-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Upcoming Sessions */}
                        <Card>
                            <CardHeader>
                                <h3 className="font-semibold">Upcoming Sessions</h3>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <SessionItem
                                    title="Resume Review"
                                    date="Aug 31, 2025"
                                    mentor="Harshita N."
                                />
                                <SessionItem
                                    title="Mock Interview"
                                    date="Sep 5, 2025"
                                    mentor="Rohit S."
                                />
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </main>
        </div>
    );
}

/* ---------------- Helper Components ---------------- */
function SidebarItem({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition w-full text-left">
            {icon}
            <span>{label}</span>
        </button>
    );
}

function PostCard({
    name,
    role,
    content,
    media,
}: {
    name: string;
    role: string;
    content: string;
    media?: string;
}) {
    const renderMedia = () => {
        if (!media) return null;

        const lowerMedia = media.toLowerCase();

        if (lowerMedia.endsWith(".pdf")) {
            return (
                <a
                    href={media}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline block"
                >
                    📄 View PDF
                </a>
            );
        }

        if (lowerMedia.endsWith(".mp4") || lowerMedia.endsWith(".webm")) {
            return (
                <video
                    src={media}
                    controls
                    className="rounded-lg max-h-64 w-full object-contain"
                />
            );
        }

        // fallback to image for all other media types
        return (
            <img
                src={media}
                alt="Post media"
                className="rounded-lg max-h-64 w-full object-contain"
            />
        );
    };

    return (
        <Card className="hover:shadow-md transition">
            <CardHeader className="flex flex-row items-center gap-3">
                <Avatar>
                    <AvatarFallback>{name?.[0] ?? "?"}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold">{name}</p>
                    <span className="text-xs text-gray-500">{role}</span>
                </div>
            </CardHeader>

            <CardContent className="space-y-3">
                <p>{content}</p>
                {renderMedia()}
            </CardContent>

            <CardFooter className="flex gap-4 text-sm text-gray-600">
                <button className="hover:text-blue-600">👍 Like</button>
                <button className="hover:text-blue-600">💬 Comment</button>
            </CardFooter>
        </Card>
    );
}



function UserCard({ name, role, mutuals }: { name: string; role: string; mutuals: string }) {
    return (
        <Card className="p-3 hover:shadow-sm transition">
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <p className="font-medium">{name}</p>
                    <span className="text-xs text-gray-500">{role}</span>
                    <p className="text-xs text-green-600">{mutuals}</p>
                </div>
            </div>
            <div className="flex gap-2 mt-3">
                <Button variant="outline" size="sm">
                    Connect
                </Button>
                <Button size="sm">Message</Button>
            </div>
        </Card>
    );
}

function SessionItem({ title, date, mentor }: { title: string; date: string; mentor: string }) {
    return (
        <div className="p-2 rounded-lg border bg-gray-50 hover:bg-gray-100 transition">
            <p className="font-medium">{title}</p>
            <p className="text-xs text-gray-600">
                📅 {date} — {mentor}
            </p>
        </div>
    );
}
