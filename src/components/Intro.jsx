import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap'; // Import GSAP
import slider from '../../public/assets/slider.png';
import Fireworks from '../components/Fireworks'; // Import thành phần Fireworks

const Intro = () => {
  const [userName, setUserName] = useState('');
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [showFireworks, setShowFireworks] = useState(false); // Trạng thái hiển thị pháo hoa
  const nameRef = useRef(null); // Tạo ref để tham chiếu đến phần tử tên
  const textRefs = useRef([]); // Array để chứa refs cho từng câu

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName) {
      setIsOverlayVisible(false);
      setShowFireworks(true); // Hiển thị pháo hoa
      setTimeout(animateName, 100); // Đợi một chút trước khi thực hiện hiệu ứng
    }
  };

  // Hàm để thực hiện hiệu ứng nhảy vào
  const animateName = () => {
    gsap.fromTo(
      nameRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: 'bounce.out', onComplete: showTextAnimations }
    );
  };

  // Hàm để hiển thị từng câu một
  const showTextAnimations = () => {
    textRefs.current.forEach((textRef, index) => {
      gsap.fromTo(
        textRef,
        { opacity: 0, y: 20 }, // Bắt đầu từ độ mờ 0 và dịch xuống 20px
        { opacity: 1, y: 0, duration: 0.5, delay: index * 0.5 } // Kết thúc với độ mờ 1 và dịch về vị trí ban đầu
      );
    });
  };

  return (
    <div className="relative flex justify-center">
      {/* Lớp phủ cho việc nhập tên */}
      {isOverlayVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">Nhập tên của bạn:</h2>
            <input
              type="text"
              value={userName}
              onChange={handleNameChange}
              className="border border-gray-300 rounded p-2 mb-4 w-full"
              placeholder="Tên của bạn"
              required
            />
            <button type="submit" className="bg-pink-500 text-white rounded p-2 w-full">
              Xác nhận
            </button>
          </form>
        </div>
      )}

      {/* Nội dung chính */}
      <img 
        src={slider} 
        alt="Slider-Birthday" 
        className="mt-[50px] w-[90%] h-[500px] object-cover rounded-lg shadow-lg opacity-90" 
      />
      {/* Hiển thị pháo hoa khi có tên */}
      {showFireworks && (
        <div className="absolute inset-0 flex items-center justify-center z-40">
          <Fireworks />
        </div>
      )}
      {!isOverlayVisible && (
        <div className="absolute inset-x-40 inset-y-28 flex flex-col items-start justify-start p-6 text-left z-50">
          <p ref={nameRef} className="text-3xl font-extrabold text-pink-500 mb-4">{`Dear, ${userName}`}</p>
          <p ref={(el) => textRefs.current[0] = el} className="text-gray-700 text-xl font-semibold mb-4 opacity-0">
            I want to come to my birthday party!
          </p>
          <p ref={(el) => textRefs.current[1] = el} className="text-gray-700 text-xl font-semibold mb-4 opacity-0">
            Sắp tới ngày 10/11/2024 sẽ là ngày sinh nhật của em, rất mong anh/chị đến tham dự cùng em.
          </p>
          <p ref={(el) => textRefs.current[2] = el} className="text-gray-700 text-xl font-semibold mb-4 opacity-0">
            Bữa ăn sẽ rất vui và ý nghĩa nếu có sự hiện diện của anh/chị. 
          </p>
          <p ref={(el) => textRefs.current[3] = el} className="text-gray-700 text-xl font-semibold opacity-0">
            Em xin chân thành cảm ơn.
          </p>
        </div>
      )}
    </div>
  );
}

export default Intro;
