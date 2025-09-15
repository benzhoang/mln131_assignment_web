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
            icon: '/home.png',
            color: 'from-blue-500 to-blue-600',
            isImage: true
        },
        {
            id: 'transition-stages',
            title: 'Các thành phần kinh tế ở Việt Nam qua các giai đoạn',
            icon: '/stategy.webp',
            color: 'from-green-500 to-green-600',
            isImage: true
        },
        {
            id: 'socialism-vietnam',
            title: 'Quá độ lên CNXH ở Việt Nam',
            icon: '/stategy.webp',
            color: 'from-purple-500 to-purple-600',
            isImage: true
        },
        {
            id: 'socialism-characteristics',
            title: 'Đặc trưng CNXH',
            icon: '/stategy.webp',
            color: 'from-purple-500 to-purple-600',
            isImage: true
        },
        {
            id: 'vietnam-practice',
            title: 'Thực tiễn Việt Nam',
            icon: '/thuctien.jpg',
            color: 'from-orange-500 to-orange-600',
            isImage: true
        },
        {
            id: 'quiz',
            title: 'Quiz tương tác',
            icon: '/quiz.png',
            color: 'from-pink-500 to-pink-600',
            isImage: true
        },
        {
            id: 'ai-usage',
            title: 'AI Usage',
            icon: '/826118.png',
            color: 'from-indigo-500 to-indigo-600',
            isImage: true
        }
    ];

    return (
        <div className={`relative text-white transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-80'
            } min-h-screen shadow-xl border-r border-amber-700 overflow-hidden`}>
            {/* Background Image */}
            <div 
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url(/hcm.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(0.3) contrast(1.2)'
                }}
            ></div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-amber-800/70 to-yellow-900/80"></div>
            
            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <div className="p-4 border-b border-amber-700 bg-amber-800/50">
                <div className="flex items-center justify-between">
                    {!isCollapsed && (
                        <div>
                            <h1 className="text-lg font-bold text-white">CNXH Việt Nam</h1>
                            <p className="text-amber-200 text-sm">Quá độ lên CNXH</p>
                        </div>
                    )}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-2 rounded-lg hover:bg-amber-700 transition-colors text-white"
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
                            : 'hover:bg-amber-700/50 hover:transform hover:scale-102'
                            }`}
                    >
                        {/* Icon with background and text */}
                        <div className={`relative flex items-center justify-center w-10 h-10 rounded-lg mr-3 transition-all duration-300 ${activePage === item.id
                            ? 'bg-white/20 backdrop-blur-sm'
                            : 'bg-amber-700/50 group-hover:bg-amber-600/70'
                            } ${item.isImage ? 'group-hover:scale-110' : ''} ${item.isImage ? 'p-1 bg-white/10' : ''}`}>
                            {item.isImage ? (
                                <img 
                                    src={item.icon} 
                                    alt={item.title}
                                    className={`w-6 h-6 object-contain transition-all duration-300 ${
                                        activePage === item.id 
                                            ? 'drop-shadow-lg brightness-110 contrast-110' 
                                            : 'opacity-80 group-hover:opacity-100 brightness-90'
                                    }`}
                                />
                            ) : (
                                <span className="text-lg">{item.icon}</span>
                            )}
                        </div>

                        {!isCollapsed && (
                            <div className="text-left flex-1">
                                <div className="font-medium text-white">{item.title}</div>
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
        </div>
    );
};

export default Sidebar;