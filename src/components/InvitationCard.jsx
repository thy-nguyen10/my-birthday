import React, { useState } from "react";

function InvitationCard() {
  const [name, setName] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowCard(true); // Hiển thị thiệp mời sau khi nhập tên
  };

  return (
    <div>
      {!showCard ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded shadow-md text-center"
          >
            <h2 className="text-xl font-bold mb-4">Nhập tên của bạn</h2>
            <input
              type="text"
              value={name}
              onChange={handleInputChange}
              placeholder="Tên của bạn"
              className="border border-gray-300 rounded px-4 py-2 mb-4"
              required
            />
            <br />
            <button
              type="submit"
              className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
            >
              Gửi
            </button>
          </form>
        </div>
      ) : (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
          <img
            src="https://via.placeholder.com/60"
            alt="Birthday Icon"
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-pink-500">
            Lời Mời Sinh Nhật!
          </h1>
          <p className="mt-2 text-gray-700">{`Dear, ${name}`}</p>
          <p className="mt-2 text-gray-700">I want to come to my birthday party!</p>
          <p className="mt-4 font-semibold text-gray-900">
            Thời gian: 19h00, 12/11/2024
          </p>
          <p className="text-gray-900">Địa điểm: Nhà hàng XYZ, đường ABC</p>
          <p className="mt-4 text-gray-600">
            Hãy đến và cùng chia sẻ niềm vui với chúng tôi nhé!
          </p>
          <button className="mt-6 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition">
            Tham gia ngay
          </button>
        </div>
      )}
    </div>
  );
}

export default InvitationCard;
