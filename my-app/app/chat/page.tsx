"use client"

import  PageLayout  from '@/components/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Send, Search, Users, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function ChatSystem() {
  const [message, setMessage] = useState('')

  const conversations = [
    { id: 1, name: "Project Alpha Team", lastMessage: "Great progress on the frontend!", time: "2m ago", unread: 3 },
    { id: 2, name: "Dr. Sarah Johnson", lastMessage: "Let's schedule a meeting to discuss your research", time: "1h ago", unread: 1 },
    { id: 3, name: "Mentorship Group", lastMessage: "Thanks for the feedback on my portfolio", time: "3h ago", unread: 0 },
    { id: 4, name: "React Study Group", lastMessage: "Anyone free for a coding session tomorrow?", time: "1d ago", unread: 0 },
  ]

  const messages = [
    { id: 1, sender: "Alice", content: "Hey everyone! How's the project coming along?", time: "10:30 AM", isMe: false },
    { id: 2, sender: "You", content: "Making good progress on the backend API. Should be ready for testing soon.", time: "10:32 AM", isMe: true },
    { id: 3, sender: "Bob", content: "Frontend is almost done too. We're on track for the deadline!", time: "10:35 AM", isMe: false },
    { id: 4, sender: "Alice", content: "Excellent! Let's do a quick demo tomorrow morning.", time: "10:37 AM", isMe: false },
  ]

  return (
    <PageLayout title="Chat System" description="Connect and collaborate with your team members">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>Conversations</span>
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search conversations..."
                className="pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className="p-4 hover:bg-gray-700/50 cursor-pointer border-b border-gray-700/50 last:border-b-0"
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={`/placeholder-user.jpg`} />
                      <AvatarFallback className="bg-blue-600 text-white">
                        {conv.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-white truncate">{conv.name}</p>
                        <span className="text-xs text-gray-400">{conv.time}</span>
                      </div>
                      <p className="text-sm text-gray-400 truncate">{conv.lastMessage}</p>
                    </div>
                    {conv.unread > 0 && (
                      <div className="bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {conv.unread}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Messages */}
        <Card className="lg:col-span-2 bg-gray-800/50 border-gray-700 flex flex-col">
          <CardHeader className="border-b border-gray-700">
            <CardTitle className="text-white flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Project Alpha Team</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.isMe 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-700 text-gray-100'
                  }`}>
                    {!msg.isMe && (
                      <p className="text-xs text-gray-300 mb-1">{msg.sender}</p>
                    )}
                    <p className="text-sm">{msg.content}</p>
                    <p className={`text-xs mt-1 ${
                      msg.isMe ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    // Handle send message
                    setMessage('')
                  }
                }}
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  )
}
