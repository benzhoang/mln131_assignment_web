import {useEffect, useState} from 'react';

interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

const QuizPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // Tạo âm thanh bằng Web Audio API
    const createTone = (frequency: number, duration: number, type: OscillatorType = 'sine') => {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.type = type;

        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    };

    // Âm thanh khi chọn đúng
    const playCorrectSound = () => {
        createTone(523.25, 0.2); // C5
        setTimeout(() => createTone(659.25, 0.2), 100); // E5
        setTimeout(() => createTone(783.99, 0.3), 200); // G5
    };

    // Âm thanh khi chọn sai
    const playWrongSound = () => {
        createTone(200, 0.5, 'sawtooth'); // Âm trầm
        setTimeout(() => createTone(150, 0.5, 'sawtooth'), 200);
    };

    // Âm thanh chuyển câu tiếp theo
    const playNextQuestionSound = () => {
        createTone(440, 0.1); // A4
        setTimeout(() => createTone(554.37, 0.1), 50); // C#5
        setTimeout(() => createTone(659.25, 0.2), 100); // E5
    };

    // Âm thanh hoàn thành quiz
    const playCompletionSound = () => {
        const notes = [523.25, 587.33, 659.25, 698.46, 783.99]; // C5, D5, E5, F5, G5
        notes.forEach((note, index) => {
            setTimeout(() => createTone(note, 0.3), index * 150);
        });
    };

    // Nhạc nền (âm thanh nhẹ nhàng)
    const playBackgroundMusic = () => {
        if (isPlaying) return;
        setIsPlaying(true);

        const playMelody = () => {
            const melody = [261.63, 293.66, 329.63, 349.23, 392.00, 349.23, 329.63, 293.66]; // C4, D4, E4, F4, G4, F4, E4, D4
            melody.forEach((note, index) => {
                setTimeout(() => createTone(note, 0.5), index * 800);
            });
        };

        playMelody();
        const interval = setInterval(playMelody, 8000); // Lặp lại mỗi 8 giây

        return () => clearInterval(interval);
    };

    // Khởi tạo âm thanh khi component mount
    useEffect(() => {
        // Âm thanh chào mừng khi bắt đầu quiz
        setTimeout(() => {
            createTone(523.25, 0.2); // C5
            setTimeout(() => createTone(659.25, 0.2), 100); // E5
            setTimeout(() => createTone(783.99, 0.3), 200); // G5
        }, 500);

        const cleanup = playBackgroundMusic();
        return cleanup;
    }, []);

    const questions: Question[] = [
        {
            id: 1,
            question: "Việt Nam lựa chọn con đường quá độ lên CNXH bỏ qua chế độ tư bản chủ nghĩa vì:",
            options: [
                "Chủ nghĩa tư bản không tồn tại ở Việt Nam",
                "Việt Nam có nền kinh tế phát triển cao từ trước",
                "Nguyện vọng của nhân dân và sự lãnh đạo của Đảng",
                "Do ảnh hưởng từ các nước xã hội chủ nghĩa"
            ],
            correctAnswer: 2,
            explanation: "Việt Nam lựa chọn con đường quá độ lên CNXH bỏ qua chế độ tư bản chủ nghĩa dựa trên nguyện vọng của nhân dân và sự lãnh đạo sáng suốt của Đảng Cộng sản Việt Nam."
        },
        {
            id: 2,
            question: "Thời kỳ quá độ lên chủ nghĩa xã hội là giai đoạn:",
            options: [
                "Chuyển tiếp từ tư bản chủ nghĩa lên xã hội chủ nghĩa",
                "Giữa xã hội cộng sản nguyên thủy và chiếm hữu nô lệ",
                "Giữa chủ nghĩa xã hội và chủ nghĩa cộng sản",
                "Giữa chế độ phong kiến và tư bản chủ nghĩa"
            ],
            correctAnswer: 0,
            explanation: "Thời kỳ quá độ lên chủ nghĩa xã hội là giai đoạn chuyển tiếp từ tư bản chủ nghĩa lên xã hội chủ nghĩa, đây là quá trình lịch sử tự nhiên theo quy luật phát triển của xã hội."
        },
        {
            id: 3,
            question: "Đại hội nào của Đảng Cộng sản Việt Nam khởi xướng công cuộc Đổi mới, mở ra giai đoạn quá độ mới?",
            options: [
                "Đại hội VII (1991)",
                "Đại hội XI (2011)",
                "Đại hội IV (1976)",
                "Đại hội VI (1986)"
            ],
            correctAnswer: 3,
            explanation: "Đại hội VI (1986) của Đảng Cộng sản Việt Nam đã khởi xướng công cuộc Đổi mới, mở ra giai đoạn quá độ mới với những đổi mới quan trọng về kinh tế và xã hội."
        },
        {
            id: 4,
            question: "Giai đoạn 1976 – 1985 trong quá độ lên CNXH ở Việt Nam chủ yếu gặp khó khăn gì?",
            options: [
                "Chưa có sự lãnh đạo của Đảng Cộng sản",
                "Việt Nam chưa gia nhập ASEAN",
                "Chưa giành được độc lập dân tộc",
                "Mô hình kinh tế tập trung quan liêu bao cấp bộc lộ nhiều hạn chế"
            ],
            correctAnswer: 3,
            explanation: "Giai đoạn 1976-1985, mô hình kinh tế tập trung quan liêu bao cấp bộc lộ nhiều hạn chế, dẫn đến khủng hoảng kinh tế-xã hội, tạo tiền đề cho công cuộc Đổi mới."
        },
        {
            id: 5,
            question: "Đặc trưng 'Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân' có ý nghĩa là gì?",
            options: [
                "Nhà nước tư sản kiểu mới",
                "Nhà nước hoạt động theo pháp luật, phục vụ nhân dân",
                "Nhà nước tách rời xã hội",
                "Nhà nước do cá nhân lãnh đạo tuyệt đối"
            ],
            correctAnswer: 1,
            explanation: "Đặc trưng này có ý nghĩa là nhà nước hoạt động theo pháp luật và phục vụ nhân dân, thể hiện tính dân chủ và pháp quyền của nhà nước xã hội chủ nghĩa."
        },
        {
            id: 6,
            question: "Đặc trưng cơ bản của CNXH được khẳng định trong Cương lĩnh 2011 là:",
            options: [
                "Nhân dân lao động làm chủ, công bằng xã hội",
                "Kinh tế tập trung quan liêu bao cấp",
                "Nhà nước đa đảng, tam quyền phân lập",
                "Kinh tế thị trường tự do tư bản chủ nghĩa"
            ],
            correctAnswer: 0,
            explanation: "Đặc trưng cơ bản của CNXH được khẳng định trong Cương lĩnh 2011 là nhân dân lao động làm chủ và công bằng xã hội, thể hiện bản chất dân chủ và tiến bộ của chế độ xã hội chủ nghĩa."
        },
        {
            id: 7,
            question: "Thách thức lớn nhất của Việt Nam trong quá trình quá độ hiện nay là:",
            options: [
                "Giữ vững vai trò lãnh đạo của Đảng",
                "Phát triển văn hóa tiên tiến, đậm đà bản sắc dân tộc",
                "Quan hệ hữu nghị quốc tế",
                "Kết hợp tăng trưởng kinh tế với công bằng xã hội"
            ],
            correctAnswer: 3,
            explanation: "Thách thức lớn nhất hiện nay là kết hợp tăng trưởng kinh tế với công bằng xã hội, đảm bảo phát triển bền vững và công bằng trong quá trình quá độ lên CNXH."
        },
        {
            id: 8,
            question: "Tại sao công cuộc Đổi mới 1986 được coi là bước ngoặt trong quá độ lên CNXH ở Việt Nam?",
            options: [
                "Thực hiện đa nguyên chính trị",
                "Xóa bỏ hoàn toàn kinh tế tư nhân",
                "Đưa Việt Nam thành nước công nghiệp phát triển",
                "Chuyển sang mô hình kinh tế thị trường định hướng XHCN, giải quyết khủng hoảng kinh tế – xã hội"
            ],
            correctAnswer: 3,
            explanation: "Công cuộc Đổi mới 1986 là bước ngoặt vì đã chuyển sang mô hình kinh tế thị trường định hướng XHCN và giải quyết được khủng hoảng kinh tế-xã hội, mở ra thời kỳ phát triển mới."
        },
        {
            id: 9,
            question: "Trong 8 đặc trưng của CNXH, đặc trưng nào được xem là khó đạt nhất hiện nay và vì sao?",
            options: [
                "Nhân dân lao động làm chủ – do dân trí chưa cao",
                "Công bằng xã hội – do khoảng cách giàu nghèo và bất bình đẳng vùng miền",
                "Quan hệ hữu nghị quốc tế – do hội nhập toàn cầu",
                "Nhà nước pháp quyền XHCN – do hệ thống luật pháp chưa hoàn thiện"
            ],
            correctAnswer: 1,
            explanation: "Công bằng xã hội là đặc trưng khó đạt nhất hiện nay do khoảng cách giàu nghèo và bất bình đẳng vùng miền vẫn còn lớn, đòi hỏi nhiều nỗ lực và thời gian để giải quyết."
        },
        {
            id: 10,
            question: "Nếu không tiến hành Đổi mới 1986, con đường quá độ lên CNXH của Việt Nam có thể sẽ:",
            options: [
                "Phát triển nhanh hơn",
                "Trở thành nước tư bản phát triển",
                "Gia nhập EU sớm hơn",
                "Tiếp tục khủng hoảng, trì trệ, mất lòng tin của nhân dân"
            ],
            correctAnswer: 3,
            explanation: "Nếu không có Đổi mới 1986, Việt Nam sẽ tiếp tục khủng hoảng, trì trệ và mất lòng tin của nhân dân, không thể phát triển được theo định hướng xã hội chủ nghĩa."
        }
    ];

    const handleAnswerSelect = (answerIndex: number) => {
        setSelectedAnswer(answerIndex);
        // Phát âm thanh khi chọn đáp án (âm thanh nhẹ)
        createTone(440, 0.1); // A4
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion < questions.length - 1) {
            playNextQuestionSound();
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowResult(false);
        } else {
            playCompletionSound();
            setQuizCompleted(true);
        }
    };

    const handleShowResult = () => {
        setShowResult(true);
        // Phát âm thanh dựa trên kết quả
        if (selectedAnswer === questions[currentQuestion].correctAnswer) {
            playCorrectSound();
        } else {
            playWrongSound();
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setScore(0);
        setShowResult(false);
        setQuizCompleted(false);
        setIsPlaying(false);
        // Phát âm thanh reset
        createTone(261.63, 0.2); // C4
        setTimeout(() => createTone(329.63, 0.2), 100); // E4
        setTimeout(() => createTone(392.00, 0.3), 200); // G4
    };

    const getScoreMessage = () => {
        const percentage = (score / questions.length) * 100;
        if (percentage >= 80) return "Xuất sắc! Bạn có hiểu biết sâu sắc về quá độ CNXH ở Việt Nam! 🎉";
        if (percentage >= 60) return "Tốt! Bạn đã nắm được những kiến thức cơ bản! 👍";
        if (percentage >= 40) return "Khá! Hãy ôn tập thêm để hiểu sâu hơn! 📚";
        return "Cần cố gắng thêm! Hãy xem lại nội dung website! 💪";
    };

    if (quizCompleted) {
        return (
            <div
                className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div
                        className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
                    <div
                        className="absolute top-40 right-20 w-24 h-24 bg-emerald-200 rounded-full opacity-30 animate-bounce"></div>
                    <div
                        className="absolute bottom-20 left-1/4 w-40 h-40 bg-teal-200 rounded-full opacity-25 animate-pulse"></div>
                </div>
                <div className="relative z-10 p-8 max-w-4xl mx-auto">
                    <div
                        className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce-in">
                        <h1 className="text-4xl font-bold mb-4">Kết quả Quiz</h1>
                        <div className="text-6xl mb-4">{score}/{questions.length}</div>
                        <p className="text-xl mb-6">{getScoreMessage()}</p>
                        <button
                            onClick={resetQuiz}
                            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 active:scale-95"
                        >
                            Làm lại Quiz
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
                <div
                    className="absolute top-40 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-30 animate-bounce"></div>
                <div
                    className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-200 rounded-full opacity-25 animate-pulse"></div>
                <div
                    className="absolute bottom-40 right-1/3 w-28 h-28 bg-purple-300 rounded-full opacity-20 animate-bounce"></div>
            </div>
            <div className="relative z-10 p-8 max-w-4xl mx-auto">
                {/* Header */}
                <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-slide-in-down">
                    <h1 className="text-4xl font-bold mb-4">
                        📘 Bộ 10 Câu Hỏi Trắc Nghiệm
                    </h1>
                    <p className="text-xl opacity-90">
                        Kiểm tra kiến thức về Quá độ lên CNXH ở Việt Nam
                    </p>
                    <div className="mt-4 text-sm opacity-80">
                        <p>Mức độ: Dễ → Trung bình → Khó → Vận dụng cao</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm">Câu {currentQuestion + 1}/{questions.length}</span>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => {
                                    setIsPlaying(!isPlaying);
                                    if (!isPlaying) {
                                        playBackgroundMusic();
                                    }
                                }}
                                className="text-white/80 hover:text-white transition-colors"
                                title={isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
                            >
                                {isPlaying ? "🔊" : "🔇"}
                            </button>
                            <div className="w-32 bg-white/20 rounded-full h-2">
                                <div
                                    className="bg-white h-2 rounded-full transition-all duration-300"
                                    style={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Question */}
                <div
                    className="bg-white rounded-xl shadow-lg p-8 mb-6 transform hover:scale-102 transition-all duration-300 hover:shadow-xl animate-fade-in-up"
                    style={{animationDelay: '0.2s'}}>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">
                        {questions[currentQuestion].question}
                    </h2>

                    <div className="space-y-3">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(index)}
                                disabled={showResult}
                                className={`w-full p-4 rounded-lg text-left transition-all duration-200 transform hover:scale-105 active:scale-95 ${selectedAnswer === index
                                    ? showResult
                                        ? index === questions[currentQuestion].correctAnswer
                                            ? 'bg-green-100 border-2 border-green-500 text-green-800 animate-pulse'
                                            : 'bg-red-100 border-2 border-red-500 text-red-800 animate-pulse'
                                        : 'bg-blue-100 border-2 border-blue-500 text-blue-800'
                                    : showResult && index === questions[currentQuestion].correctAnswer
                                        ? 'bg-green-100 border-2 border-green-500 text-green-800 animate-pulse'
                                        : 'bg-gray-50 border-2 border-gray-200 hover:bg-gray-100 text-gray-700'
                                }`}
                            >
                                <span className="font-medium mr-3">
                                    {String.fromCharCode(65 + index)}.
                                </span>
                                {option}
                            </button>
                        ))}
                    </div>

                    {selectedAnswer !== null && !showResult && (
                        <div className="mt-6 text-center">
                            <button
                                onClick={handleShowResult}
                                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105 active:scale-95"
                            >
                                Xem kết quả
                            </button>
                        </div>
                    )}

                    {showResult && (
                        <div className="mt-6 p-4 rounded-lg bg-gray-50">
                            <h3 className="font-semibold text-gray-800 mb-2">
                                {selectedAnswer === questions[currentQuestion].correctAnswer
                                    ? "✅ Chính xác!"
                                    : "❌ Sai rồi!"}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {questions[currentQuestion].explanation}
                            </p>
                            <button
                                onClick={handleNextQuestion}
                                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors transform hover:scale-105 active:scale-95"
                            >
                                {currentQuestion < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả cuối"}
                            </button>
                        </div>
                    )}
                </div>

                {/* Tips */}
                <div
                    className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200 animate-fade-in-up"
                    style={{animationDelay: '0.3s'}}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">💡 Mẹo học tập:</h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>• <strong>Mức độ dễ:</strong> Nhận biết khái niệm cơ bản và giai đoạn lịch sử</li>
                        <li>• <strong>Mức độ trung bình:</strong> Hiểu đặc trưng CNXH và thách thức quá độ</li>
                        <li>• <strong>Mức độ khó:</strong> Phân tích ý nghĩa và tác động của Đổi mới 1986</li>
                        <li>• <strong>Vận dụng cao:</strong> Đánh giá tình huống và phản biện</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
