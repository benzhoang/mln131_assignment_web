import { useState } from 'react';

interface SidebarProps {
    activePage: string;
    onPageChange: (page: string) => void;
}

const Sidebar = ({ activePage, onPageChange }: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        {
            id: 'home',
            title: 'Trang chủ',
            icon: '📚',
            iconText: 'HOME',
            description: 'Giới thiệu chủ đề',
            color: 'from-blue-500 to-blue-600'
        },
        {
            id: 'transition-stages',
            title: 'Giai đoạn quá độ',
            icon: '🔄',
            iconText: 'STAGES',
            description: 'Các giai đoạn quá độ lên CNXH',
            color: 'from-green-500 to-green-600'
        },
        {
            id: 'socialism-characteristics',
            title: 'Đặc trưng CNXH',
            icon: '🏛️',
            iconText: 'SOCIAL',
            description: 'Bản chất của chủ nghĩa xã hội',
            color: 'from-purple-500 to-purple-600'
        },
        {
            id: 'vietnam-practice',
            title: 'Thực tiễn Việt Nam',
            icon: '🌾',
            iconText: 'VIETNAM',
            description: 'Liên hệ thực tiễn ở Việt Nam',
            color: 'from-orange-500 to-orange-600'
        },
        {
            id: 'quiz',
            title: 'Quiz tương tác',
            icon: '📝',
            iconText: 'QUIZ',
            description: 'Kiểm tra kiến thức',
            color: 'from-pink-500 to-pink-600'
        },
        {
            id: 'ai-usage',
            title: 'AI Usage',
            icon: '⚙️',
            iconText: 'AI',
            description: 'Minh bạch sử dụng AI',
            color: 'from-indigo-500 to-indigo-600'
        }
    ];

    return (
        <div className={`bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'
            } min-h-screen shadow-xl border-r border-slate-600`}>
            {/* Header */}
            <div className="p-4 border-b border-slate-600 bg-slate-800/50">
                <div className="flex items-center justify-between">
                    {!isCollapsed && (
                        <div>
                            <h1 className="text-lg font-bold text-white">CNXH Việt Nam</h1>
                            <p className="text-slate-300 text-sm">Quá độ lên CNXH</p>
                        </div>
                    )}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-2 rounded-lg hover:bg-slate-600 transition-colors text-white"
                    >
                        {isCollapsed ? '→' : '←'}
                    </button>
                </div>
            </div>

            {/* Navigation */}
            <nav className="p-3 space-y-2">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onPageChange(item.id)}
                        className={`w-full flex items-center p-3 rounded-xl mb-2 transition-all duration-300 group relative overflow-hidden ${activePage === item.id
                            ? `bg-gradient-to-r ${item.color} shadow-lg transform scale-105`
                            : 'hover:bg-slate-600/50 hover:transform hover:scale-102'
                            }`}
                    >
                        {/* Icon with background and text */}
                        <div className={`relative flex items-center justify-center w-10 h-10 rounded-lg mr-3 transition-all duration-300 ${activePage === item.id
                            ? 'bg-white/20 backdrop-blur-sm'
                            : 'bg-slate-600/50 group-hover:bg-slate-500/70'
                            }`}>
                            <span className="text-lg">{item.icon}</span>
                            {!isCollapsed && (
                                <div className="absolute -bottom-1 -right-1 bg-slate-800 text-white text-xs px-1 rounded font-bold opacity-75">
                                    {item.iconText}
                                </div>
                            )}
                        </div>

                        {!isCollapsed && (
                            <div className="text-left flex-1">
                                <div className="font-medium text-white">{item.title}</div>
                                <div className="text-slate-300 text-xs opacity-90">{item.description}</div>
                            </div>
                        )}

                        {/* Active indicator */}
                        {activePage === item.id && !isCollapsed && (
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        )}
                    </button>
                ))}
            </nav>

        </div>
    );
};

export default Sidebar;