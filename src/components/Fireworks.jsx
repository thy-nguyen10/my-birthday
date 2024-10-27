import React from 'react';
import Lottie from 'react-lottie';
import fireworksAnimation from '../../public/assets/phao-hoa.json'; // Thay đổi đường dẫn cho đúng với tệp hoạt hình của bạn

const Fireworks = () => {
  const defaultOptions = {
    loop: false, // Không lặp lại
    autoplay: true, // Phát tự động
    animationData: fireworksAnimation, // Tệp JSON của hoạt hình
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default Fireworks;
