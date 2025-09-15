import {useState} from 'react';

const VietNameSocialism = () => {
    const [expandedSections, setExpandedSections] = useState({
        section1: true,
        section2: true,
        section3: true,
        cq35: false,
        cq35Answer1: false,
        cq35Answer2: false
    });

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className="min-h-screen w-full relative"
             style={{
                 backgroundImage: `url(/hcm.jpg)`,
                 backgroundRepeat: "no-repeat",
                 backgroundSize: "cover",
                 backgroundPosition: "center center",
                 backgroundAttachment: "fixed"
             }}
        >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 p-8 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
                    <p className="text-xl text-white/90 mt-6 max-w-4xl mx-auto leading-relaxed">
                        Con đường cách mạng tất yếu khách quan của Việt Nam trong thời đại ngày nay
                    </p>
                </div>

                {/* Main Content Container */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-8 animate-fade-in-up"
                     style={{animationDelay: '0.2s'}}>
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Tổng quan</h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                            Việt Nam tiến lên chủ nghĩa xã hội trong điều kiện vừa thuận lợi vừa khó khăn đan xen,
                            có những đặc trưng cơ bản và nội dung quan trọng cần được hiểu rõ.
                        </p>
                    </div>

                    {/* Section 1: Điều kiện và đặc trưng */}
                    <div className="mb-12">
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center mb-4">
                                <span
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 text-xl">1</span>
                                <h3 className="text-3xl font-bold text-gray-800">Điều kiện và đặc trưng cơ bản</h3>
                                <button
                                    onClick={() => toggleSection('section1')}
                                    className="ml-4 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                >
                                    <svg
                                        className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${expandedSections.section1 ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </button>
                            </div>
                            <p className="text-gray-600 text-lg">Bối cảnh lịch sử và điều kiện thực tế của Việt Nam</p>
                        </div>

                        {/* 2x2 Grid Layout */}
                        {expandedSections.section1 && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Điều kiện khó khăn */}
                                <div
                                    className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-200 hover:shadow-lg transition-all duration-300">
                                    <h4 className="text-xl font-bold text-red-800 mb-4 text-center">Điều kiện khó
                                        khăn</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="bg-white/60 p-3 rounded-lg">
                                            <p className="text-sm text-gray-700">• Xuất phát từ xã hội thuộc địa, nửa
                                                phong kiến</p>
                                        </div>
                                        <div className="bg-white/60 p-3 rounded-lg">
                                            <p className="text-sm text-gray-700">• Lực lượng sản xuất rất thấp</p>
                                        </div>
                                        <div className="bg-white/60 p-3 rounded-lg">
                                            <p className="text-sm text-gray-700">• Chiến tranh ác liệt, kéo dài nhiều
                                                thập kỷ</p>
                                        </div>
                                        <div className="bg-white/60 p-3 rounded-lg">
                                            <p className="text-sm text-gray-700">• Tàn dư thực dân, phong kiến còn
                                                nhiều</p>
                                        </div>
                                    </div>
                                    <div className="mt-3 bg-white/60 p-3 rounded-lg">
                                        <p className="text-sm text-gray-700">• Các thế lực thù địch phá hoại</p>
                                    </div>
                                </div>

                                {/* Cơ hội phát triển */}
                                <div
                                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200 hover:shadow-lg transition-all duration-300">
                                    <h4 className="text-xl font-bold text-green-800 mb-4 text-center">Cơ hội phát
                                        triển</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="bg-white/60 p-3 rounded-lg">
                                            <p className="text-sm text-gray-700">• Cách mạng khoa học công nghệ hiện
                                                đại</p>
                                        </div>
                                        <div className="bg-white/60 p-3 rounded-lg">
                                            <p className="text-sm text-gray-700">• Quốc tế hóa sâu sắc</p>
                                        </div>
                                        <div className="bg-white/60 p-3 rounded-lg">
                                            <p className="text-sm text-gray-700">• Thời cơ phát triển nhanh</p>
                                        </div>
                                        <div className="bg-white/60 p-3 rounded-lg">
                                            <p className="text-sm text-gray-700">• Hợp tác quốc tế</p>
                                        </div>
                                    </div>
                                    <div className="mt-3 bg-white/60 p-3 rounded-lg">
                                        <p className="text-sm text-gray-700">• Tiếp thu thành tựu nhân loại</p>
                                    </div>
                                </div>

                                {/* Bối cảnh thời đại - Full width */}
                                <div
                                    className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all duration-300">
                                    <h4 className="text-xl font-bold text-blue-800 mb-4 text-center">Bối cảnh thời
                                        đại</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                        <div className="bg-white/60 p-3 rounded-lg">
                                            <p className="text-sm text-gray-700">• Thời đại quá độ từ TBCN lên XHCN</p>
                                        </div>
                                        <div className="bg-white/60 p-3 rounded-lg">
                                            <p className="text-sm text-gray-700">• Các nước cùng tồn tại, vừa hợp tác
                                                vừa đấu tranh</p>
                                        </div>
                                        <div className="bg-white/60 p-3 rounded-lg">
                                            <p className="text-sm text-gray-700">• Cạnh tranh gay gắt vì lợi ích quốc
                                                gia</p>
                                        </div>
                                        <div className="bg-white/60 p-3 rounded-lg">
                                            <p className="text-sm text-gray-700">• Đấu tranh vì hòa bình, độc lập, dân
                                                chủ</p>
                                        </div>
                                        <div className="bg-white/60 p-3 rounded-lg">
                                            <p className="text-sm text-gray-700">• Quy luật tiến hóa lịch sử</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 2: Sự lựa chọn tất yếu */}
                    <div className="mb-12">
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center mb-4">
                                <span
                                    className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 text-xl">2</span>
                                <h3 className="text-3xl font-bold text-gray-800">Sự lựa chọn tất yếu và đúng đắn</h3>
                                <button
                                    onClick={() => toggleSection('section2')}
                                    className="ml-4 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                >
                                    <svg
                                        className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${expandedSections.section2 ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </button>
                            </div>
                            <p className="text-gray-600 text-lg">Con đường duy nhất đúng của cách mạng Việt Nam</p>
                        </div>
                        {expandedSections.section2 && (
                            <div
                                className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-200 shadow-lg">
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-xl shadow-md">
                                        <p className="text-lg text-gray-700 leading-relaxed text-left">
                                            <strong className="text-2xl text-gray-800">Quá độ lên chủ nghĩa xã hội bỏ
                                                qua chế độ tư bản chủ nghĩa</strong>
                                            <span/> là sự lựa chọn duy nhất đúng, khoa học, phản ánh đúng quy luật phát
                                            triển khách quan của cách mạng Việt Nam trong thời đại ngày nay.
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div
                                            className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-md transition-all duration-300">
                                            <div className="text-center mb-4">
                                                <h4 className="text-xl font-bold text-blue-800">Cương lĩnh 1930</h4>
                                            </div>
                                            <p className="text-blue-700 text-center italic">
                                                "Sau khi hoàn thành cách mạng dân tộc, dân chủ nhân dân, sẽ tiến lên chủ
                                                nghĩa xã hội"
                                            </p>
                                        </div>
                                        <div
                                            className="bg-green-50 p-6 rounded-xl border-2 border-green-200 hover:shadow-md transition-all duration-300">
                                            <div className="text-center mb-4">
                                                <h4 className="text-xl font-bold text-green-800">Đại hội IX</h4>
                                            </div>
                                            <p className="text-green-700 text-center italic">
                                                "Con đường đi lên của nước ta là sự phát triển quá độ lên chủ nghĩa xã
                                                hội bỏ qua chế độ tư bản chủ nghĩa"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 3: Nội dung cơ bản - 2x2 Grid */}
                    <div className="mb-12">
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center mb-4">
                                <span
                                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 text-xl">3</span>
                                <h3 className="text-3xl font-bold text-gray-800">Nội dung cơ bản của quá độ bỏ qua
                                    TBCN</h3>
                                <button
                                    onClick={() => toggleSection('section3')}
                                    className="ml-4 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                >
                                    <svg
                                        className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${expandedSections.section3 ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </button>
                            </div>
                            <p className="text-gray-600 text-lg">Bốn nội dung cốt lõi cần hiểu rõ</p>
                        </div>

                        {expandedSections.section3 && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Nội dung 1 */}
                                <div
                                    className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 hover:shadow-lg transition-all duration-300">
                                    <div className="text-center mb-4">
                                        <div
                                            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mx-auto mb-3 text-lg">1
                                        </div>
                                        <h4 className="text-xl font-bold text-purple-800">Con đường cách mạng tất yếu
                                            khách quan</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là con đường cách
                                        mạng tất yếu khách quan,
                                        con đường xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta.
                                    </p>
                                </div>

                                {/* Nội dung 2 */}
                                <div
                                    className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all duration-300">
                                    <div className="text-center mb-4">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mx-auto mb-3 text-lg">2
                                        </div>
                                        <h4 className="text-xl font-bold text-blue-800">Bỏ qua vị trí thống trị của
                                            TBCN</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                        Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng
                                        tầng tư bản chủ nghĩa.
                                    </p>
                                    <div className="space-y-2">
                                        <div className="bg-white/60 p-2 rounded text-xs">
                                            <strong>Sở hữu:</strong> Nhiều hình thức sở hữu, sở hữu tư nhân TBCN không
                                            chủ đạo
                                        </div>
                                        <div className="bg-white/60 p-2 rounded text-xs">
                                            <strong>Phân phối:</strong> Theo lao động chủ đạo + theo đóng góp + phúc lợi
                                        </div>
                                        <div className="bg-white/60 p-2 rounded text-xs">
                                            <strong>Quan hệ:</strong> Bóc lột TBCN không thống trị
                                        </div>
                                    </div>
                                </div>

                                {/* Nội dung 3 */}
                                <div
                                    className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200 hover:shadow-lg transition-all duration-300">
                                    <div className="text-center mb-4">
                                        <div
                                            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mx-auto mb-3 text-lg">3
                                        </div>
                                        <h4 className="text-xl font-bold text-green-800">Tiếp thu thành tựu nhân
                                            loại</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                        Tiếp thu, kế thừa những thành tựu mà nhân loại đã đạt được dưới chủ nghĩa tư
                                        bản.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                        <div className="bg-white/60 p-2 rounded text-center text-xs">
                                            <div className="font-semibold text-gray-800">Khoa học</div>
                                            <div className="text-gray-600">Công nghệ</div>
                                        </div>
                                        <div className="bg-white/60 p-2 rounded text-center text-xs">
                                            <div className="font-semibold text-gray-800">Quản lý</div>
                                            <div className="text-gray-600">Phát triển xã hội</div>
                                        </div>
                                        <div className="bg-white/60 p-2 rounded text-center text-xs">
                                            <div className="font-semibold text-gray-800">Kinh tế</div>
                                            <div className="text-gray-600">Hiện đại</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Nội dung 4 */}
                                <div
                                    className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200 hover:shadow-lg transition-all duration-300">
                                    <div className="text-center mb-4">
                                        <div
                                            className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mx-auto mb-3 text-lg">4
                                        </div>
                                        <h4 className="text-xl font-bold text-orange-800">Sự nghiệp khó khăn, phức tạp,
                                            lâu dài</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                        Tạo ra sự biến đổi về chất của xã hội trên tất cả các lĩnh vực, là sự nghiệp rất
                                        khó khăn,
                                        phức tạp, lâu dài với nhiều chặng đường.
                                    </p>
                                    <div className="bg-white/60 p-3 rounded">
                                        <div className="font-semibold text-gray-800 text-sm mb-2">Yêu cầu:</div>
                                        <ul className="space-y-1 text-xs text-gray-600">
                                            <li>• Quyết tâm chính trị cao của toàn Đảng</li>
                                            <li>• Khát vọng lớn của toàn dân</li>
                                            <li>• Nhiều hình thức tổ chức kinh tế, xã hội có tính chất quá độ</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


                {/* CQ3.5: Câu hỏi về thời điểm quá độ và nội hàm "không kinh qua" */}
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <button
                            onClick={() => toggleSection('cq35')}
                            className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="flex items-center justify-center">
                                <span
                                    className="bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 text-xl font-bold">CQ3.5</span>
                                <div className="text-left">
                                    <h3 className="text-2xl font-bold text-white mb-2">Thời điểm quá độ và nội hàm
                                        "không kinh qua" chế độ tư bản chủ nghĩa</h3>
                                    <p className="text-white/90 text-lg">Hồ Chí Minh đã nhấn mạnh về đặc điểm của Việt
                                        Nam trong quá trình quá độ lên CNXH</p>
                                </div>
                                <svg
                                    className={`w-8 h-8 text-white ml-4 transition-transform duration-200 ${expandedSections.cq35 ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M19 9l-7 7-7-7"/>
                                </svg>
                            </div>
                        </button>
                    </div>

                    {expandedSections.cq35 && (
                        <div
                            className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-indigo-200 shadow-2xl">
                            <div className="text-center mb-8">
                                <div
                                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full mb-4">
                                    <span className="text-2xl text-white font-bold">?</span>
                                </div>
                                <h4 className="text-3xl font-bold text-indigo-800 mb-6">Câu hỏi & Trả lời CQ3.5</h4>

                                <div
                                    className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-indigo-100">
                                    <div
                                        className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl border-l-4 border-red-400 mb-6">
                                        <p className="text-lg text-gray-800 leading-relaxed mb-3">
                                            <strong className="text-red-700">Hồ Chí Minh đã nhấn mạnh:</strong>
                                        </p>
                                        <blockquote
                                            className="text-xl text-gray-700 italic font-medium leading-relaxed">
                                            "Đặc điểm to nhất là từ một nước nông nghiệp lạc hậu tiến thẳng lên CNXH
                                            không phải kinh qua giai đoạn phát triển tư bản chủ nghĩa"
                                        </blockquote>
                                        <cite className="text-sm text-gray-500 block mt-3 text-right">
                                            [Hồ Chí Minh: Toàn tập, Nxb. Chính trị quốc gia, H, 2011, t.12, tr. 411]
                                        </cite>
                                    </div>

                                    <div
                                        className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-400 mb-8">
                                        <p className="text-lg text-gray-800 font-semibold mb-4 flex items-center">
                                            <span
                                                className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">!</span>
                                            Bằng lý luận và thực tiễn hãy làm rõ:
                                        </p>
                                        <ol className="space-y-4">
                                            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-blue-200 hover:shadow-md transition-all duration-200 cursor-pointer"
                                                onClick={() => toggleSection('cq35Answer1')}>
                                                <span
                                                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 text-sm font-bold flex-shrink-0">1</span>
                                                <span className="text-lg text-gray-700 font-medium">Ở Việt Nam thời điểm thực hiện quá độ khi nào?</span>
                                                <svg
                                                    className={`w-5 h-5 text-gray-400 ml-auto transition-transform duration-200 ${expandedSections.cq35Answer1 ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                          d="M19 9l-7 7-7-7"/>
                                                </svg>
                                            </li>
                                            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-blue-200 hover:shadow-md transition-all duration-200 cursor-pointer"
                                                onClick={() => toggleSection('cq35Answer2')}>
                                                <span
                                                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 text-sm font-bold flex-shrink-0">2</span>
                                                <span className="text-lg text-gray-700 font-medium">Làm rõ nội hàm của "không kinh qua" (không trải qua) giai đoạn phát triển tư bản chủ nghĩa.</span>
                                                <svg
                                                    className={`w-5 h-5 text-gray-400 ml-auto transition-transform duration-200 ${expandedSections.cq35Answer2 ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                          d="M19 9l-7 7-7-7"/>
                                                </svg>
                                            </li>
                                        </ol>
                                    </div>

                                    {/* Trả lời câu hỏi 1: Thời điểm thực hiện quá độ */}
                                    {expandedSections.cq35Answer1 && (
                                        <div className="mb-8">
                                            <div
                                                className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-400 mb-6">
                                                <h5 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                                                    <span
                                                        className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
                                                    Trả lời: Ở Việt Nam thời điểm thực hiện quá độ khi nào?
                                                </h5>

                                                <div className="grid md:grid-cols-3 gap-4">
                                                    <div
                                                        className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
                                                        <div className="text-center mb-3">
                                                            <div
                                                                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                                                <span
                                                                    className="text-white font-bold text-sm">1930</span>
                                                            </div>
                                                            <h6 className="font-bold text-blue-800">Cương lĩnh 1930</h6>
                                                        </div>
                                                        <p className="text-blue-700 text-sm">
                                                            Đảng Cộng sản Việt Nam đã lựa chọn con đường "quá độ lên
                                                            CNXH bỏ qua chế độ tư bản chủ nghĩa" ngay từ Cương lĩnh
                                                            1930.
                                                        </p>
                                                    </div>

                                                    <div
                                                        className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
                                                        <div className="text-center mb-3">
                                                            <div
                                                                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                                                <span
                                                                    className="text-white font-bold text-sm">1945</span>
                                                            </div>
                                                            <h6 className="font-bold text-green-800">Cách mạng Tháng
                                                                Tám</h6>
                                                        </div>
                                                        <p className="text-green-700 text-sm">
                                                            Sau Cách mạng Tháng Tám 1945 thành công, Việt Nam bắt đầu
                                                            bước vào thời kỳ quá độ.
                                                        </p>
                                                    </div>

                                                    <div
                                                        className="bg-white p-4 rounded-lg shadow-sm border border-orange-200">
                                                        <div className="text-center mb-3">
                                                            <div
                                                                className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                                                <span
                                                                    className="text-white font-bold text-xs">1954-1975</span>
                                                            </div>
                                                            <h6 className="font-bold text-orange-800">Giai đoạn thực
                                                                chất</h6>
                                                        </div>
                                                        <p className="text-orange-700 text-sm">
                                                            Do chiến tranh kéo dài nên thực chất công cuộc xây dựng CNXH
                                                            mới được đẩy mạnh từ khi miền Bắc giải phóng năm 1954 và sau
                                                            đó cả nước thống nhất 1975.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Trả lời câu hỏi 2: Nội hàm "không kinh qua" */}
                                    {expandedSections.cq35Answer2 && (
                                        <div className="mb-8">
                                            <div
                                                className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-400">
                                                <h5 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                                                    <span
                                                        className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
                                                    Trả lời: Làm rõ nội hàm của "không kinh qua" chế độ tư bản chủ nghĩa
                                                </h5>

                                                <div className="space-y-6">
                                                    <div
                                                        className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                                        <h6 className="font-bold text-yellow-800 mb-2 flex items-center">
                                                            <span className="text-lg mr-2">💡</span>
                                                            Khái niệm "Bỏ qua"
                                                        </h6>
                                                        <p className="text-yellow-700">
                                                            "Bỏ qua" không có nghĩa là phủ nhận sạch trơn CNTB, mà là:
                                                        </p>
                                                    </div>

                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                                            <h6 className="font-bold text-red-800 mb-2 flex items-center">
                                                                <span className="text-lg mr-2">❌</span>
                                                                Không xác lập vị trí thống trị
                                                            </h6>
                                                            <p className="text-red-700 text-sm">
                                                                Không xác lập vị trí thống trị của quan hệ sản xuất và
                                                                kiến trúc thượng tầng tư bản chủ nghĩa.
                                                            </p>
                                                        </div>

                                                        <div
                                                            className="bg-green-50 p-4 rounded-lg border border-green-200">
                                                            <h6 className="font-bold text-green-800 mb-2 flex items-center">
                                                                <span className="text-lg mr-2">✅</span>
                                                                Tiếp thu thành tựu
                                                            </h6>
                                                            <p className="text-green-700 text-sm">
                                                                Tiếp thu, kế thừa thành tựu của nhân loại dưới CNTB,
                                                                nhất là khoa học – công nghệ, quản lý kinh tế – xã hội.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                                                        <h6 className="font-bold text-indigo-800 mb-2 flex items-center">
                                                            <span className="text-lg mr-2">🎯</span>
                                                            Mục tiêu phát triển
                                                        </h6>
                                                        <p className="text-indigo-700 mb-3">
                                                            Để phát triển nhanh lực lượng sản xuất, xây dựng nền kinh tế
                                                            hiện đại.
                                                        </p>

                                                        <div className="bg-white p-3 rounded border border-indigo-100">
                                                            <h6 className="font-bold text-gray-800 mb-2 text-sm">Tư
                                                                tưởng sáng tạo của Đảng ta:</h6>
                                                            <ul className="space-y-1 text-sm text-gray-700">
                                                                <li>• Vừa phù hợp điều kiện lịch sử – xã hội của Việt
                                                                    Nam (một nước nông nghiệp lạc hậu)
                                                                </li>
                                                                <li>• Vừa bám sát quy luật phát triển thời đại</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Kết luận */}
                                    <div
                                        className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl border border-gray-200">
                                        <h6 className="font-bold text-gray-800 mb-3 flex items-center">
                                            <span className="text-lg mr-2">📝</span>
                                            Kết luận
                                        </h6>
                                        <p className="text-gray-700 leading-relaxed">
                                            Việt Nam đã lựa chọn con đường quá độ lên CNXH bỏ qua chế độ tư bản chủ
                                            nghĩa từ rất sớm (1930),
                                            bắt đầu thực hiện từ 1945 và đẩy mạnh từ 1954-1975. "Không kinh qua" có
                                            nghĩa là không để TBCN
                                            thống trị nhưng vẫn tiếp thu thành tựu của nó để phát triển nhanh chóng, phù
                                            hợp với điều kiện
                                            lịch sử và quy luật phát triển thời đại.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Section */}
                <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Kết luận</h3>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là con đường tất yếu,
                            khoa học và đúng đắn của Việt Nam, phản ánh đúng quy luật phát triển khách quan
                            và nguyện vọng thiết tha của dân tộc.
                        </p>
                        <div className="mt-6 flex justify-center">
                            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VietNameSocialism;
