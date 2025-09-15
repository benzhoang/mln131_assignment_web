import {useState} from 'react';

const SocialismCharacteristicsPage = () => {
    const [expandedSections, setExpandedSections] = useState({
        characteristics: true,
        directions: true,
        tasks: false,
        relationships: false
    });

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const mainCharacteristics = [
        {
            title: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
            description: "Mục tiêu tổng quát, phản ánh bản chất và lý tưởng xã hội chủ nghĩa.",
            details: [
                "Kết hợp hài hòa giữa tăng trưởng kinh tế và công bằng xã hội",
                "Phát triển toàn diện trên các lĩnh vực: kinh tế, chính trị, văn hóa, xã hội",
                "Bảo đảm công bằng, tiến bộ xã hội và phúc lợi nhân dân",
                "Xây dựng đất nước văn minh, hiện đại, hội nhập"
            ],
            color: "from-red-500 to-yellow-500"
        },
        {
            title: "Do nhân dân làm chủ",
            description: "Nhân dân giữ vai trò chủ thể của quyền lực xã hội.",
            details: [
                "Mọi quyền lực thuộc về nhân dân",
                "Nhân dân tham gia quản lý nhà nước và xã hội",
                "Phát huy dân chủ trực tiếp và dân chủ đại diện",
                "Tăng cường đoàn kết và đồng thuận xã hội"
            ],
            color: "from-blue-500 to-indigo-500"
        },
        {
            title: "Nền kinh tế phát triển cao",
            description: "Dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ, phù hợp.",
            details: [
                "Phát triển kinh tế thị trường định hướng XHCN",
                "Ứng dụng khoa học, công nghệ hiện đại",
                "Kết hợp phát triển nhanh và bền vững",
                "Xây dựng quan hệ sản xuất tiến bộ, công bằng"
            ],
            color: "from-green-500 to-teal-500"
        },
        {
            title: "Nền văn hóa tiên tiến, đậm đà bản sắc dân tộc",
            description: "Văn hóa vừa hiện đại, vừa kế thừa truyền thống dân tộc.",
            details: [
                "Tiếp thu tinh hoa văn hóa nhân loại",
                "Bảo tồn và phát huy giá trị văn hóa dân tộc",
                "Đấu tranh chống lại các tệ nạn, hủ tục",
                "Xây dựng con người mới XHCN"
            ],
            color: "from-orange-500 to-pink-500"
        },
        {
            title: "Con người có cuộc sống ấm no, tự do, hạnh phúc",
            description: "Mỗi người đều có điều kiện phát triển toàn diện.",
            details: [
                "Bảo đảm quyền con người, quyền công dân",
                "Nâng cao chất lượng cuộc sống, phúc lợi xã hội",
                "Cơ hội phát triển công bằng cho mọi người",
                "Hướng tới tự do, hạnh phúc bền vững"
            ],
            color: "from-purple-500 to-fuchsia-500"
        },
        {
            title: "Các dân tộc bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển",
            description: "Củng cố đại đoàn kết toàn dân tộc.",
            details: [
                "Bảo đảm quyền bình đẳng giữa các dân tộc",
                "Tôn trọng bản sắc và văn hóa riêng",
                "Đoàn kết, tương trợ trong phát triển",
                "Không kỳ thị, phân biệt đối xử"
            ],
            color: "from-cyan-500 to-sky-500"
        },
        {
            title: "Nhà nước pháp quyền XHCN",
            description: "Của nhân dân, do nhân dân, vì nhân dân, do Đảng lãnh đạo.",
            details: [
                "Quyền lực thống nhất, có phân công, phối hợp và kiểm soát",
                "Pháp luật là tối thượng trong quản lý xã hội",
                "Nhà nước trong sạch, vững mạnh, hiệu lực, hiệu quả",
                "Dưới sự lãnh đạo của Đảng Cộng sản Việt Nam"
            ],
            color: "from-gray-600 to-gray-800"
        },
        {
            title: "Quan hệ hữu nghị và hợp tác với các nước",
            description: "Đối ngoại hòa bình, hợp tác, phát triển.",
            details: [
                "Độc lập, tự chủ trong chính sách đối ngoại",
                "Đa dạng hóa, đa phương hóa quan hệ quốc tế",
                "Hợp tác bình đẳng, cùng có lợi",
                "Chủ động hội nhập quốc tế"
            ],
            color: "from-emerald-500 to-lime-500"
        }
    ];

    const developmentDirections = [
        {
            title: "Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước",
            description: "Gắn với phát triển kinh tế tri thức, bảo vệ tài nguyên, môi trường",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa",
            description: "Xây dựng nền kinh tế vận hành đầy đủ, đồng bộ theo quy luật thị trường",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc",
            description: "Xây dựng con người, nâng cao đời sống nhân dân, thực hiện tiến bộ và công bằng xã hội",
            color: "from-orange-500 to-pink-500"
        },
        {
            title: "Bảo đảm vững chắc quốc phòng và an ninh quốc gia",
            description: "Trật tự, an toàn xã hội, bảo vệ Tổ quốc xã hội chủ nghĩa",
            color: "from-red-500 to-rose-500"
        },
        {
            title: "Thực hiện đường lối đối ngoại độc lập, tự chủ",
            description: "Hòa bình, hữu nghị, hợp tác và phát triển; chủ động và tích cực hội nhập quốc tế",
            color: "from-purple-500 to-indigo-500"
        },
        {
            title: "Xây dựng nền dân chủ xã hội chủ nghĩa",
            description: "Thực hiện đại đoàn kết toàn dân tộc, tăng cường và mở rộng mặt trận dân tộc thống nhất",
            color: "from-cyan-500 to-sky-500"
        },
        {
            title: "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa",
            description: "Của nhân dân, do nhân dân, vì nhân dân",
            color: "from-gray-600 to-slate-600"
        },
        {
            title: "Xây dựng Đảng trong sạch, vững mạnh",
            description: "Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng",
            color: "from-yellow-500 to-amber-500"
        }
    ];

    const keyTasks = [
        {
            number: "1",
            title: "Phát triển kinh tế nhanh và bền vững",
            description: "Tăng trưởng kinh tế cao hơn 5 năm trước, đổi mới mô hình tăng trưởng, cơ cấu lại nền kinh tế"
        },
        {
            number: "2",
            title: "Hoàn thiện thể chế, phát triển kinh tế thị trường định hướng XHCN",
            description: "Nâng cao hiệu lực, hiệu quả, kỷ luật, kỷ cương trong quản lý kinh tế"
        },
        {
            number: "3",
            title: "Đổi mới căn bản và toàn diện giáo dục, đào tạo",
            description: "Nâng cao chất lượng nguồn nhân lực; đẩy mạnh nghiên cứu, phát triển, ứng dụng khoa học, công nghệ"
        },
        {
            number: "4",
            title: "Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc",
            description: "Con người Việt Nam phát triển toàn diện đáp ứng yêu cầu phát triển bền vững"
        },
        {
            number: "5",
            title: "Quản lý tốt sự phát triển xã hội",
            description: "Bảo đảm an sinh xã hội, nâng cao phúc lợi xã hội, chất lượng cuộc sống của nhân dân"
        },
        {
            number: "6",
            title: "Khai thác, sử dụng và quản lý hiệu quả tài nguyên thiên nhiên",
            description: "Bảo vệ môi trường; chủ động phòng, chống thiên tai, ứng phó với biến đổi khí hậu"
        },
        {
            number: "7",
            title: "Kiên quyết, kiên trì đấu tranh bảo vệ vững chắc độc lập, chủ quyền",
            description: "Thống nhất, toàn vẹn lãnh thổ của Tổ quốc, giữ vững an ninh chính trị, trật tự, an toàn xã hội"
        },
        {
            number: "8",
            title: "Thực hiện đường lối đối ngoại độc lập, tự chủ",
            description: "Đa phương hóa, đa dạng hóa, chủ động và tích cực hội nhập quốc tế"
        },
        {
            number: "9",
            title: "Hoàn thiện, phát huy dân chủ xã hội chủ nghĩa",
            description: "Quyền làm chủ của nhân dân; củng cố, phát huy sức mạnh của khối đại đoàn kết toàn dân tộc"
        },
        {
            number: "10",
            title: "Tiếp tục hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa",
            description: "Xây dựng bộ máy nhà nước tinh gọn, trong sạch, vững mạnh; hoàn thiện hệ thống pháp luật"
        },
        {
            number: "11",
            title: "Xây dựng Đảng trong sạch, vững mạnh",
            description: "Nâng cao năng lực lãnh đạo, tăng cường bản chất giai cấp công nhân và tính tiên phong"
        },
        {
            number: "12",
            title: "Quán triệt và xử lý tốt các quan hệ lớn",
            description: "Giữa đổi mới, ổn định và phát triển; giữa kinh tế và chính trị; giữa Nhà nước và thị trường..."
        }
    ];

    const keyRelationships = [
        "Quan hệ giữa đổi mới, ổn định và phát triển",
        "Giữa đổi mới kinh tế và đổi mới chính trị",
        "Giữa tuân theo các quy luật thị trường và bảo đảm định hướng xã hội chủ nghĩa",
        "Giữa phát triển lực lượng sản xuất và xây dựng, hoàn thiện từng bước quan hệ sản xuất xã hội chủ nghĩa",
        "Giữa Nhà nước và thị trường",
        "Giữa tăng trưởng kinh tế và phát triển văn hóa, thực hiện tiến bộ và công bằng xã hội",
        "Giữa xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc xã hội chủ nghĩa",
        "Giữa độc lập, tự chủ và hội nhập quốc tế",
        "Giữa Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ"
    ];


    return (
        <div
            className="min-h-screen bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
                <div
                    className="absolute top-40 right-20 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
                <div
                    className="absolute bottom-20 left-1/4 w-40 h-40 bg-yellow-200 rounded-full opacity-25 animate-pulse"></div>
            </div>
            <div className="relative z-10 p-8 max-w-7xl mx-auto">
                {/* Header */}
                <div
                    className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-2xl p-8 text-white mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
                    <h1 className="text-4xl font-bold mb-4">
                        3.2. Những đặc trưng của chủ nghĩa xã hội và phương hướng xây dựng chủ nghĩa xã hội ở Việt Nam
                        hiện nay
                    </h1>
                    <p className="text-xl opacity-90">
                        Vận dụng sáng tạo chủ nghĩa Mác-Lênin vào điều kiện cụ thể của Việt Nam
                    </p>
                </div>

                {/* Section 1: Đặc trưng bản chất */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center">
                            <span
                                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">3.2.1</span>
                            <h2 className="text-3xl font-bold text-gray-800">Những đặc trưng bản chất của chủ nghĩa xã
                                hội Việt Nam</h2>
                        </div>
                        <button
                            onClick={() => toggleSection('characteristics')}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            <svg
                                className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${expandedSections.characteristics ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                    </div>

                    {expandedSections.characteristics && (
                        <div className="space-y-8">
                            {/* Lịch sử phát triển nhận thức - Timeline */}
                            <div
                                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-400 mb-6">
                                <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">Lịch sử phát triển nhận
                                    thức về chủ nghĩa xã hội Việt Nam</h3>

                                {/* Timeline */}
                                <div className="relative">
                                    {/* Timeline Line */}
                                    <div
                                        className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500 rounded-full shadow-lg"></div>

                                    {/* Đại hội IV (1976) */}
                                    <div className="relative flex items-start mb-12">
                                        <div
                                            className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-xl border-4 border-white">
                                            1976
                                        </div>
                                        <div
                                            className="ml-8 flex-1 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="text-xl font-bold text-gray-800">Đại hội IV (1976)</h4>
                                                <span
                                                    className="text-sm text-gray-500 bg-blue-100 px-3 py-1 rounded-full font-medium">
                                                    Định hướng
                                                </span>
                                            </div>
                                            <p className="text-gray-600 mb-4">
                                                Nhận thức của Đảng ta về chủ nghĩa xã hội và con đường phát triển của
                                                cách mạng nước ta mới dừng ở mức độ định hướng.
                                            </p>
                                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                                <p className="text-blue-800 font-medium italic">
                                                    "Trên cơ sở phương hướng đúng, hãy hành động thực tế cho câu trả
                                                    lời"
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Đại hội VII (1991) */}
                                    <div className="relative flex items-start mb-12">
                                        <div
                                            className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-xl border-4 border-white">
                                            1991
                                        </div>
                                        <div
                                            className="ml-8 flex-1 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="text-xl font-bold text-gray-800">Đại hội VII (1991)</h4>
                                                <span
                                                    className="text-sm text-gray-500 bg-green-100 px-3 py-1 rounded-full font-medium">
                                                    Định hình
                                                </span>
                                            </div>
                                            <p className="text-gray-600 mb-4">
                                                Nhận thức của Đảng Cộng sản Việt Nam về chủ nghĩa xã hội và con đường đi
                                                lên chủ nghĩa xã hội đã sáng tỏ hơn, không chỉ dừng ở nhận thức định
                                                hướng, định tính mà từng bước đạt tới trình độ định hình, định lượng.
                                            </p>
                                            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                                                <p className="text-green-800 font-medium">
                                                    <strong>Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ
                                                        nghĩa xã hội (1991)</strong> đã xác định mô hình chủ nghĩa xã
                                                    hội ở nước ta với <strong>6 đặc trưng</strong>.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Đại hội XI (2011) */}
                                    <div className="relative flex items-start">
                                        <div
                                            className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-xl border-4 border-white">
                                            2011
                                        </div>
                                        <div
                                            className="ml-8 flex-1 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="text-xl font-bold text-gray-800">Đại hội XI (2011)</h4>
                                                <span
                                                    className="text-sm text-gray-500 bg-purple-100 px-3 py-1 rounded-full font-medium">
                                                    Hoàn thiện
                                                </span>
                                            </div>
                                            <p className="text-gray-600 mb-4">
                                                Trên cơ sở tổng kết 25 năm đổi mới, nhận thức của Đảng ta về chủ nghĩa
                                                xã hội và con đường đi lên chủ nghĩa xã hội đã có bước phát triển mới.
                                            </p>
                                            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                                                <p className="text-purple-800 font-medium">
                                                    <strong>Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ
                                                        nghĩa xã hội (bổ sung, phát triển năm 2011)</strong> đã phát
                                                    triển mô hình chủ nghĩa xã hội Việt Nam với <strong>8 đặc
                                                    trưng</strong>, trong đó có đặc trưng về mục tiêu, bản chất, nội
                                                    dung của xã hội xã hội chủ nghĩa mà nhân dân ta xây dựng.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 8 đặc trưng chính - 4x2 Grid Layout */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {mainCharacteristics.map((characteristic, index) => (
                                    <div key={index}
                                         className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                        {/* Header với gradient */}
                                        <div className={`bg-gradient-to-r ${characteristic.color} p-3 text-white`}>
                                            <div className="text-center">
                                                <div
                                                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                                    <span className="text-lg font-bold text-white">{index + 1}</span>
                                                </div>
                                                <h3 className="text-sm font-bold mb-1 leading-tight">{characteristic.title}</h3>
                                                <p className="text-xs opacity-90 leading-relaxed">{characteristic.description}</p>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-3">
                                            <div className="space-y-1">
                                                {characteristic.details.map((detail, idx) => (
                                                    <div key={idx} className="flex items-start space-x-1">
                                                        <span
                                                            className="text-blue-500 mt-0.5 font-bold text-xs flex-shrink-0">•</span>
                                                        <span
                                                            className="text-gray-700 text-xs leading-relaxed">{detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Section 2: Phương hướng xây dựng */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center">
                            <span
                                className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">3.2.2</span>
                            <h2 className="text-3xl font-bold text-gray-800">Phương hướng xây dựng chủ nghĩa xã hội ở
                                Việt Nam hiện nay</h2>
                        </div>
                        <button
                            onClick={() => toggleSection('directions')}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            <svg
                                className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${expandedSections.directions ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                    </div>

                    {expandedSections.directions && (
                        <div className="space-y-8">
                            {/* 8 phương hướng cơ bản */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {developmentDirections.map((direction, index) => (
                                    <div key={index}
                                         className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className={`bg-gradient-to-r ${direction.color} text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0`}>
                                                {index + 1}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-gray-800 mb-2">{direction.title}</h3>
                                                <p className="text-gray-600 text-sm">{direction.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Section 3: 12 nhiệm vụ cơ bản */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center">
                            <span
                                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">3.2.3</span>
                            <h2 className="text-3xl font-bold text-gray-800">12 nhiệm vụ cơ bản (Đại hội XII -
                                2016)</h2>
                        </div>
                        <button
                            onClick={() => toggleSection('tasks')}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            <svg
                                className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${expandedSections.tasks ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                    </div>

                    {expandedSections.tasks && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {keyTasks.map((task, index) => (
                                <div key={index}
                                     className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start space-x-4">
                                        <div
                                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold flex-shrink-0">
                                            {task.number}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-gray-800 mb-2">{task.title}</h3>
                                            <p className="text-gray-600 text-sm">{task.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Section 4: 9 mối quan hệ lớn */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center">
                            <span
                                className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">3.2.4</span>
                            <h2 className="text-3xl font-bold text-gray-800">9 mối quan hệ lớn cần nhận thức và giải
                                quyết</h2>
                        </div>
                        <button
                            onClick={() => toggleSection('relationships')}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            <svg
                                className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${expandedSections.relationships ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                    </div>

                    {expandedSections.relationships && (
                        <div
                            className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-l-4 border-orange-400">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {keyRelationships.map((relationship, index) => (
                                    <div key={index}
                                         className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                                        <div className="flex items-start space-x-3">
                                            <span
                                                className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1">
                                                {index + 1}
                                            </span>
                                            <span className="text-gray-700 text-sm">{relationship}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Kết luận */}
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-8 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Kết luận</h3>
                    <p className="text-lg text-gray-700 text-center leading-relaxed">
                        Thực hiện tám phương hướng và giải quyết thành công những mối quan hệ lớn chính là đưa cách mạng
                        nước ta
                        theo đúng con đường phát triển quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa ở nước
                        ta.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SocialismCharacteristicsPage;
