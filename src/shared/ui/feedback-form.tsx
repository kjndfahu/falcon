'use client'
import React, { useState } from "react";
import toast from "react-hot-toast";

interface Props {
    question?: string;
    question2?: string;
    telegram_thread: number;
}

export const FeedbackForm: React.FC<Props> = ({telegram_thread, question2, question }) => {
    const [formData, setFormData] = useState({
        name: "",
        question: "",
        details: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    console.log(success)

    const TELEGRAM_BOT_TOKEN = "7586414621:AAHVHOMUgJr7s364uXJufB71b5Ep-LakCLI";
    const TELEGRAM_CHAT_ID = "-1002487651254";
    const TELEGRAM_THREAD_ID = telegram_thread;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.question.trim() || !formData.details.trim()) {
            toast.error("All fields must be filled!");
            return;
        }

        setIsSubmitting(true);

        const message = `
📩 *New Request:*
👤 *Name:* ${formData.name}
❓ *Question:* ${formData.question}
📝 *Details:* ${formData.details}
        `;

        try {
            const response = await fetch(
                `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        message_thread_id: TELEGRAM_THREAD_ID,
                        text: message,
                        parse_mode: "Markdown",
                    }),
                }
            );

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: "", question: "", details: "" });
                toast.success("Your request has been sent successfully!");
            } else {
                console.error("Error sending message to Telegram");
                toast.error("Failed to send the message. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred while sending the message.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            className="flex flex-col sml:gap-[50px] gap-[25px]"
            onSubmit={handleSubmit}
        >
            <div id="form-referral" className="flex sml:flex-row flex-col w-full sml:gap-[50px] gap-[25px]">
                <div className="flex w-full flex-col gap-3 text-[#0A131D] text-[18px] font-medium leading-[17px]">
                    <h4>Your Name</h4>
                    <div className="px-[16px] py-[19px] rounded-[15px] border-[1px] border-[#DDE6EF] bg-[#F3F5F980]">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Anticipate the information"
                            className="bg-transparent w-full focus:outline-none focus:ring-0"
                        />
                    </div>
                </div>

                <div className="flex w-full flex-col gap-3 text-[#0A131D] text-[18px] font-medium leading-[17px]">
                    <h4>{question || "Question"}</h4>
                    <div className="px-[16px] py-[19px] rounded-[15px] border-[1px] border-[#DDE6EF] bg-[#F3F5F980]">
                        <input
                            id="question"
                            name="question"
                            type="text"
                            value={formData.question}
                            onChange={handleChange}
                            placeholder="Anticipate the information"
                            className="bg-transparent w-full focus:outline-none focus:ring-0"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3 text-[#0A131D] text-[18px] font-medium leading-[17px]">
                <h4>{question2 || "Question"}</h4>
                <div className="px-[16px] py-[19px] rounded-[15px] border-[1px] border-[#DDE6EF] bg-[#F3F5F980]">
                    <input
                        id="details"
                        name="details"
                        type="text"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Anticipate the information"
                        className="bg-transparent h-auto w-full focus:outline-none focus:ring-0"
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="px-[16px] py-[19px] rounded-[15px] bg-[#0057FF] text-white text-[18px] font-medium"
            >
                {isSubmitting ? "Sending..." : "Send"}
            </button>
        </form>
    );
};
