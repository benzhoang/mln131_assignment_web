const AIUsagePage = () => {
    const aiTools = [
        {
            tool: "NotebookLM",
            purpose: "Tạo mind map nội dung chính xác và rõ ràng từ Slide thầy cung cấp",
            usage: "Upload tài slide chương 3",
            prompt: "Tạo mind map chi tiết về quá độ lên chủ nghĩa xã hội ở Việt Nam dựa trên tài liệu đã upload, làm rõ các giai đoạn, đặc trưng và thực tiễn",
            rawOutput: "AI tạo ra sơ đồ tư duy dạng text với các nhánh chính: 1) Khái niệm quá độ CNXH, 2) Các giai đoạn phát triển, 3) Đặc trưng bản chất CNXH, 4) Thực tiễn Việt Nam. Mỗi nhánh có các điểm con chi tiết nhưng chưa có ví dụ cụ thể và số liệu thống kê.",
            result: "Sơ đồ tư duy có cấu trúc rõ ràng, phân cấp thông tin từ tổng quan đến chi tiết, kết nối logic giữa các khái niệm",
            editing: "Sinh viên kiểm tra độ chính xác, bổ sung thông tin từ nguồn chính thống, điều chỉnh cấu trúc cho phù hợp với mục tiêu học tập"
        },
        {
            tool: "ChatGPT (GPT)",
            purpose: "Hỗ trợ nghiên cứu và tạo nội dung học thuật",
            usage: "Upload slide Chương 3: Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam",
            prompt: "Tóm tắt Chương 3 MLN131 theo mindmap, làm rõ CQ3.1-CQ3.6",
            rawOutput: "AI tạo ra bản tóm tắt dạng bullet points với các chủ đề chính: Quá độ CNXH, Đặc trưng CNXH, Giai đoạn phát triển. Tuy nhiên, nội dung còn chung chung, thiếu ví dụ cụ thể về Việt Nam và chưa có số liệu thống kê.",
            result: "Nội dung tóm tắt có cấu trúc, câu hỏi quiz từ dễ đến khó, phân tích đặc trưng CNXH",
            editing: "Sinh viên đối chiếu với giáo trình, bổ sung ví dụ thực tiễn, kiểm chứng thông tin",
            principles: {
                steps: [
                    "Xác định yêu cầu: Từ nội dung Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội, xác định nội dung  Trình bày các giai đoạn quá độ lên chủ nghĩa xã hội và các đặc trưng bản chất của chủ nghĩa xã hội. Liên hệ với thực tiễn ở Việt Nam.",
                    "Sinh nội dung thô: ChatGPT cung cấp tóm tắt và giải thích",
                    "Đối chiếu: So sánh với giáo trình MLN131 và văn kiện Đảng",
                    "Biên tập: Chỉnh sửa, bổ sung ví dụ và cập nhật số liệu"
                ],
                applications: [
                    "Tóm tắt nhanh giáo trình để tạo outline báo cáo",
                    "Sinh câu hỏi ôn tập/quiz tăng tương tác lớp học",
                    "Hỗ trợ viết content: gợi ý cấu trúc, viết mở đầu/kết luận",
                    "Liên hệ thực tiễn: phân tích đặc trưng CNXH với thành tựu Đổi mới"
                ],
                ethics: [
                    "AI chỉ hỗ trợ, không thay thế: Luôn kiểm chứng thông tin",
                    "Minh bạch: Nêu rõ công cụ sử dụng, prompt và kết quả",
                    "Sáng tạo: Biến nội dung lý thuyết thành infographic, quiz"
                ],
                examples: [
                    {
                        type: "Tóm tắt giáo trình:",
                        prompt: "Tóm tắt Chương 3 MLN131 theo mindmap, làm rõ CQ3.1-CQ3.6"
                    },
                    {
                        type: "Quiz tương tác:",
                        prompt: "Tạo câu hỏi từ dễ đến khó về 8 đặc trưng CNXH VN"
                    }
                ]
            }
        },
        {
            tool: "Dify AI (Gemini 2.5 Pro)",
            purpose: "Xây dựng chatbot hỗ trợ tự học và ôn tập",
            usage: "Tạo chatbot trả lời câu hỏi liên quan đến môn học, tăng tính tương tác",
            prompt: "Bạn là chuyên gia triết học Marxist-Leninist, chuyên nghiên cứu về chủ nghĩa xã hội và quá trình xây dựng chủ nghĩa xã hội tại Việt Nam. Trả lời ngắn gọn, chính xác, ưu tiên dựa trên nguồn tài liệu đã cung cấp.",
            rawOutput: "Chatbot AI tạo ra các câu trả lời cơ bản về khái niệm CNXH, nhưng câu trả lời còn chung chung, thiếu ví dụ cụ thể và đôi khi có thông tin không chính xác về lịch sử Việt Nam.",
            result: "Chatbot trả lời được hầu hết câu hỏi kiến thức cơ bản (khái niệm, định nghĩa, đặc điểm)",
            editing: "Rà soát câu trả lời AI, chỉnh sửa cho sát phong cách học thuật, loại bỏ phần suy diễn không có trong tài liệu chính thống"
        },
        {
            tool: "Cursor (Agent: Claude Sonnet 4)",
            purpose: "Hỗ trợ thiết kế và phát triển website",
            usage: "Tạo code React, TypeScript, Tailwind CSS cho các component và page",
            prompt: "Tạo website về chủ đề quá độ lên chủ nghĩa xã hội ở Việt Nam với React và Tailwind CSS",
            rawOutput: "AI tạo ra code cơ bản với cấu trúc component đơn giản, layout cơ bản và styling cơ bản. Code chưa có nội dung thực tế, chỉ có placeholder text và chưa có tính năng tương tác.",
            result: "Cấu trúc website hoàn chỉnh với Sidebar, 4 trang chính, styling đẹp mắt",
            editing: "Sinh viên chỉnh sửa nội dung, bổ sung thông tin, cải thiện UI/UX"
        },
        {
            tool: "Tailwind CSS Documentation",
            purpose: "Tham khảo styling và layout",
            usage: "Sử dụng utility classes để tạo giao diện responsive và đẹp mắt",
            prompt: "Tạo gradient backgrounds, card layouts, responsive grids",
            rawOutput: "Tài liệu cung cấp các class CSS cơ bản như bg-gradient-to-r, rounded-lg, p-4. Chưa có hướng dẫn cụ thể về cách kết hợp các class để tạo layout phức tạp.",
            result: "Giao diện hiện đại với màu sắc hài hòa và responsive design",
            editing: "Sinh viên tùy chỉnh màu sắc, spacing, và hiệu ứng animation"
        }
    ];

    const verificationSources = [
        {
            source: "Giáo trình Chủ nghĩa xã hội khoa học",
            content: "Lý thuyết về quá độ lên CNXH, các giai đoạn phát triển",
            usage: "Làm cơ sở lý luận cho nội dung các trang"
        },
        {
            source: "Văn kiện Đại hội Đảng XIII",
            content: "Định hướng phát triển đất nước đến 2030, 2045",
            usage: "Bổ sung thông tin về mục tiêu và triển vọng tương lai"
        },
        {
            source: "Báo cáo của Bộ Kế hoạch và Đầu tư",
            content: "Thành tựu kinh tế - xã hội của Việt Nam",
            usage: "Số liệu thống kê về tăng trưởng, xóa đói giảm nghèo"
        },
        {
            source: "Nghị quyết Trung ương về đổi mới",
            content: "Quá trình đổi mới và xây dựng nền kinh tế thị trường định hướng XHCN",
            usage: "Phân tích giai đoạn đổi mới 1986-nay"
        }
    ];

    const academicIntegrity = {
        commitment: "Chúng tôi cam kết rằng AI chỉ đóng vai trò hỗ trợ kỹ thuật trong việc tạo code và thiết kế giao diện. Toàn bộ nội dung học thuật, phân tích lý luận và liên kết thực tiễn đều do sinh viên nghiên cứu, biên soạn và chịu trách nhiệm.",
        aiOutput: [
            "Code HTML, CSS, TypeScript cho giao diện",
            "Cấu trúc component React",
            "Styling với Tailwind CSS",
            "Layout và responsive design"
        ],
        studentWork: [
            "Nội dung lý luận về quá độ CNXH",
            "Phân tích các giai đoạn phát triển của Việt Nam",
            "Đặc trưng bản chất của CNXH",
            "Liên hệ thực tiễn với tình hình Việt Nam",
            "Thiết kế quiz tương tác và nội dung câu hỏi",
            "Bổ sung dẫn chứng từ nguồn chính thống"
        ],
        verification: "Tất cả thông tin được kiểm chứng qua giáo trình LLCT, văn kiện Đảng và báo cáo chính thức của các cơ quan nhà nước."
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-200 rounded-full opacity-25 animate-pulse"></div>
            </div>
            <div className="relative z-10 p-8 max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in-up">
                    <h1 className="text-4xl font-bold mb-4">
                        Minh bạch về sử dụng AI
                    </h1>
                    <p className="text-xl opacity-90">
                        Báo cáo chi tiết về việc ứng dụng AI có trách nhiệm trong dự án
                    </p>
                </div>

                {/* 4 Yếu tố đánh giá AI có trách nhiệm */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Yếu tố đánh giá ứng dụng AI có trách nhiệm</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-green-800 mb-3">1. Minh bạch</h3>
                                <ul className="space-y-2 text-green-700">
                                    <li>• <strong>Tên công cụ:</strong> NotebookLM, ChatGPT, Dify AI, Cursor AI</li>
                                    <li>• <strong>Mục đích sử dụng:</strong> Tạo mind map, tóm tắt nội dung, phát triển website, xây dựng chatbot</li>
                                    <li>• <strong>Prompt chính:</strong> Dựa vào prompt để sinh ra nội dung mong muốn</li>
                                    <li>• <strong>Kết quả thô:</strong> Hiển thị output gốc từ AI</li>
                                    <li>• <strong>Phần chỉnh sửa:</strong> Chỉnh sửa nội dung theo ý muốn</li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-blue-800 mb-3">2. Trách nhiệm</h3>
                                <ul className="space-y-2 text-blue-700">
                                    <li>• <strong>Kiểm chứng thông tin:</strong> Đối chiếu với giáo trình và văn kiện chính thống</li>
                                    <li>• <strong>Cam kết học thuật:</strong> AI chỉ hỗ trợ kỹ thuật, nội dung được biên soạn giáo trình chủ nghĩa xã hội khoa học không chuyên</li>
                                    <li>• <strong>Nguồn tham khảo:</strong> Sử dụng tài liệu chính thức của giao trình chính thức biên soạn, thêm những tư liệu, báo tríí của Đảng và Nhà nước</li>
                                    <li>• <strong>Đạo đức học thuật:</strong> Không copy-paste trực tiếp từ AI</li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-purple-800 mb-3">3. Sáng tạo</h3>
                                <ul className="space-y-2 text-purple-700">
                                    <li>• <strong>Thiết kế độc đáo:</strong> Website với UI/UX hiện đại, gradient backgrounds</li>
                                    <li>• <strong>Nội dung tương tác:</strong> Quiz, timeline tương tác</li>
                                    <li>• <strong>Ứng dụng đa dạng:</strong> Mind map, chatbot, responsive design</li>
                                    <li>• <strong>Kết hợp công nghệ:</strong> React + TypeScript + Tailwind CSS</li>
                                </ul>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-orange-800 mb-3">4. Hiệu quả</h3>
                                <ul className="space-y-2 text-orange-700">
                                    <li>• <strong>Tăng hiệu suất:</strong> Tiết kiệm thời gian tạo code và thiết kế</li>
                                    <li>• <strong>Nâng cao chất lượng:</strong> Nội dung có cấu trúc, dễ hiểu</li>
                                    <li>• <strong>Hỗ trợ học tập:</strong> Mind map giúp tóm tắt kiến thức hiệu quả</li>
                                    <li>• <strong>Ứng dụng thực tế:</strong> Website có thể sử dụng trong giảng dạy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI Tools Usage */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Công cụ AI được sử dụng</h2>
                    <div className="space-y-8">
                        {aiTools.map((tool, index) => {
                            const colors = [
                                { bg: 'from-blue-500 to-cyan-500', card: 'bg-gradient-to-br from-blue-50 to-cyan-50', border: 'border-blue-200', text: 'text-blue-800' },
                                { bg: 'from-green-500 to-emerald-500', card: 'bg-gradient-to-br from-green-50 to-emerald-50', border: 'border-green-200', text: 'text-green-800' },
                                { bg: 'from-purple-500 to-pink-500', card: 'bg-gradient-to-br from-purple-50 to-pink-50', border: 'border-purple-200', text: 'text-purple-800' },
                                { bg: 'from-orange-500 to-red-500', card: 'bg-gradient-to-br from-orange-50 to-red-50', border: 'border-orange-200', text: 'text-orange-800' },
                                { bg: 'from-indigo-500 to-purple-500', card: 'bg-gradient-to-br from-indigo-50 to-purple-50', border: 'border-indigo-200', text: 'text-indigo-800' }
                            ];
                            const colorScheme = colors[index % colors.length];
                            
                            return (
                                <div key={index} className={`${colorScheme.card} ${colorScheme.border} border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                                    {/* Header với gradient */}
                                    <div className={`bg-gradient-to-r ${colorScheme.bg} rounded-xl p-6 text-white mb-6`}>
                                        <h3 className="text-2xl font-bold mb-2">{tool.tool}</h3>
                                        <p className="text-lg opacity-90">{tool.purpose}</p>
                                    </div>

                                    {/* Thông tin chính */}
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        {/* Cột trái - Thông tin cơ bản */}
                                        <div className="space-y-6">
                                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                                    Cách sử dụng
                                                </h4>
                                                <p className="text-gray-600">{tool.usage}</p>
                                            </div>
                                            
                                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                    Prompt chính
                                                </h4>
                                                <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-400">
                                                    <p className="text-gray-700 italic">"{tool.prompt}"</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Cột phải - Kết quả và chỉnh sửa */}
                                        <div className="space-y-6">
                                            <div className="bg-yellow-50 rounded-lg p-4 shadow-sm border-l-4 border-yellow-400">
                                                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                                                    Kết quả thô (Raw Output)
                                                </h4>
                                                <p className="text-yellow-700">{tool.rawOutput}</p>
                                            </div>
                                            
                                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                                    Kết quả sau chỉnh sửa
                                                </h4>
                                                <p className="text-gray-600">{tool.result}</p>
                                            </div>
                                            
                                            <div className="bg-white rounded-lg p-4 shadow-sm">
                                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                                                    Phần sinh viên chỉnh sửa
                                                </h4>
                                                <p className="text-gray-600">{tool.editing}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Hiển thị nguyên tắc sử dụng cho ChatGPT */}
                                    {tool.tool === "ChatGPT (GPT)" && tool.principles && (
                                        <div className="mt-8 border-t-2 border-gray-200 pt-8">
                                            <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">Nguyên tắc sử dụng ChatGPT</h4>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-4">
                                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 shadow-sm">
                                                        <h5 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                                                            <span className="text-2xl mr-2">✅</span>
                                                            Các bước sử dụng
                                                        </h5>
                                                        <ol className="space-y-3 text-green-700">
                                                            {tool.principles.steps.map((step, stepIndex) => (
                                                                <li key={stepIndex} className="flex items-start">
                                                                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                                                                        {stepIndex + 1}
                                                                    </span>
                                                                    <span>{step}</span>
                                                                </li>
                                                            ))}
                                                        </ol>
                                                    </div>
                                                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 shadow-sm">
                                                        <h5 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                                                            <span className="text-2xl mr-2">🎯</span>
                                                            Ứng dụng cụ thể
                                                        </h5>
                                                        <ul className="space-y-2 text-blue-700">
                                                            {tool.principles.applications.map((app, appIndex) => (
                                                                <li key={appIndex} className="flex items-start">
                                                                    <span className="text-blue-500 mr-2 mt-1">•</span>
                                                                    <span>{app}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="space-y-4">
                                                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6 shadow-sm">
                                                        <h5 className="text-lg font-bold text-purple-800 mb-4 flex items-center">
                                                            <span className="text-2xl mr-2">⚖️</span>
                                                            Nguyên tắc đạo đức
                                                        </h5>
                                                        <ul className="space-y-2 text-purple-700">
                                                            {tool.principles.ethics.map((ethic, ethicIndex) => (
                                                                <li key={ethicIndex} className="flex items-start">
                                                                    <span className="text-purple-500 mr-2 mt-1">•</span>
                                                                    <span>{ethic}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-6 shadow-sm">
                                                        <h5 className="text-lg font-bold text-orange-800 mb-4 flex items-center">
                                                            <span className="text-2xl mr-2">📝</span>
                                                            Ví dụ prompt
                                                        </h5>
                                                        <div className="space-y-3 text-orange-700">
                                                            {tool.principles.examples.map((example, exampleIndex) => (
                                                                <div key={exampleIndex} className="bg-white p-4 rounded-lg border-l-4 border-orange-400 shadow-sm">
                                                                    <p className="font-semibold text-orange-800 mb-1">{example.type}</p>
                                                                    <p className="text-sm italic text-orange-600">"{example.prompt}"</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>


                {/* Verification Sources */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Nguồn kiểm chứng thông tin</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {verificationSources.map((source, index) => (
                            <div key={index} className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-blue-200">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">{source.source}</h3>
                                <div className="space-y-2">
                                    <div>
                                        <h4 className="font-medium text-gray-700">Nội dung:</h4>
                                        <p className="text-gray-600 text-sm">{source.content}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">Cách sử dụng:</h4>
                                        <p className="text-gray-600 text-sm">{source.usage}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Academic Integrity */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Cam kết liêm chính học thuật</h2>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                        <h3 className="text-lg font-semibold text-green-800 mb-3">📝 Cam kết của nhóm</h3>
                        <p className="text-green-700">{academicIntegrity.commitment}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-blue-800 mb-3">🤖 Output từ AI</h3>
                            <ul className="space-y-2">
                                {academicIntegrity.aiOutput.map((item, index) => (
                                    <li key={index} className="flex items-start space-x-2">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <span className="text-blue-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-purple-800 mb-3">👨‍🎓 Công việc của sinh viên</h3>
                            <ul className="space-y-2">
                                {academicIntegrity.studentWork.map((item, index) => (
                                    <li key={index} className="flex items-start space-x-2">
                                        <span className="text-purple-500 mt-1">•</span>
                                        <span className="text-purple-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-yellow-800 mb-3">✅ Kiểm chứng nguồn</h3>
                        <p className="text-yellow-700">{academicIntegrity.verification}</p>
                    </div>
                </div>

                {/* Creative Application */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">💡 Ứng dụng sáng tạo AI</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Sáng tạo trong thiết kế:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Gradient backgrounds đẹp mắt</li>
                                <li>• Icon với text labels sinh động</li>
                                <li>• Quiz tương tác với scoring system</li>
                                <li>• Responsive design cho mọi thiết bị</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Sáng tạo trong nội dung:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Timeline tương tác cho các giai đoạn</li>
                                <li>• Bảng so sánh với các chế độ khác</li>
                                <li>• Card layout với thông tin chi tiết</li>
                                <li>• Trang minh bạch AI usage</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIUsagePage;
