import React, { useState } from "react";

interface Props {
  order: boolean;
  setOrder: React.Dispatch<React.SetStateAction<boolean>>;
  items: any;
}
function Order({order, setOrder, items}: Props) {
  console.log(items)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send data to Telegram
    const botToken = "7301932723:AAE02jqEbKTVazXVJvuECROx9J5NQDwcHtk"; // Replace with your bot's token
    const chatId = "814355821"; // Replace with your chat ID
    const message = `
Новый заказ:
Имя: ${formData.name}
Телефон: ${formData.phone}
Электронная почта: ${formData.email}
Адрес: ${formData.address}
Information: 
${items.map((item: any, index: any) => `
  Номер: ${index + 1} 
  Название: ${item.title} 
  Количество: ${item.quantity} 
  Цена: ${item.price} руб
`)}
    `;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });

    console.log("Order sent to Telegram:", formData);
    localStorage.clear();
    window.dispatchEvent(new Event("cart-updated"));
    setOrder(false);
  };

  return (
    <div
      onClick={() => setOrder(false)}
      className={`
        fixed z-10 top-0
        flex justify-center items-center
        w-screen h-screen
        ${order ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} backdrop-blur-sm transition-opacity duration-400
      `}
    >
      <div className="w-[500px] max-w-[90%] bg-[#D9D9D9] rounded-md p-5" onClick={(e) => e.stopPropagation()}>
        <p className="text-center text-gray-800 mb-4 text-[12px] sm:text-[18px]">
          Оплата при доставке
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-[12px] sm:text-[18px]">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Имя"
            className="p-2 rounded-md border border-gray-300"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Телефон"
            className="p-2 rounded-md border border-gray-300"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Электронная почта"
            className="p-2 rounded-md border border-gray-300"
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Адрес"
            className="p-2 rounded-md border border-gray-300"
            required
          />

          <button
            type="submit"
            className="mt-4 p-2 bg-[#242424] text-white rounded-md"
          >
            Заказать сейчас
          </button>
        </form>
      </div>
    </div>
  );
}

export default Order;