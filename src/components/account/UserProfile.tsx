import React from 'react';
import { Mail, MapPin, Calendar } from 'lucide-react';

const UserProfile: React.FC = () => {
  // Mock user data
  const user = {
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    country: 'United States',
    joinDate: '2024-01-15',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500" />
      <div className="px-6 py-8 relative">
        <div className="absolute -top-16 left-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <div className="ml-40">
          <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
          <div className="space-y-2 text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{user.country}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Joined {new Date(user.joinDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;