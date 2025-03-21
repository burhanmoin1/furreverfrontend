"use client"; // Ensure this runs on the client side
import { useState } from "react";
import Image from "next/image";
import { supabase } from "./lib/supabaseClient"; 

export default function EmailTaker() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        if (!email) {
            setMessage("Please enter a valid email.");
            return;
        }

        const { data, error } = await supabase.from("emails").insert([{ email }]);

        if (error) {
            setMessage("Failed to save. Try again.");
        } else {
            setMessage("Email saved successfully!");
            setEmail(""); // Clear input
        }
    };

    return (
        <div id="email-taker" className="h-[100vh] flex flex-col items-center justify-center bg-[#6BCCD5] relative">
            <Image src='/Group 33.svg' alt="FurrEver Curves" width={100} height={100} className="w-full hidden md:block md:absolute 2xl:top-[-7.5rem] md:top-[-6rem] z-40"/>
            <Image src='/Group 33.svg' alt="FurrEver Curves" width={100} height={100} className="w-full hidden md:block md:absolute 2xl:bottom-[-8rem] md:bottom-[-6rem] z-40"/>
            <div className="relative w-[200px] 2xl:hidden md:hidden mr-14">
                        <Image src='/Heart Beat.svg' width={600} height={100} alt="Heart Beat" className="left-10"/>
                        <Image 
                            src='/Heart.svg' 
                            width={30} 
                            height={100} 
                            alt="Heart" 
                            className="absolute bottom-[2.5rem] right-[1.5rem] transform -translate-x-1/2 -translate-y-1/2 heartbeat-animation"
                            />

                    </div>
            <h2 className="2xl:text-6xl font-semibold mt-14 md:text-3xl">Get Involved Today!</h2>

            <div className="flex md:flex-row flex-col justify-between w-[80%] mt-14">
            <div className="relative md:w-[600px] hidden 2xl:flex md:flex justify-center">
                        <Image src='/Heart Beat.svg' width={600} height={100} alt="Heart Beat" className="md:w-[70%] 2xl:w-[100%]"/>
                        <Image 
                            src='/Heart.svg' 
                            width={80} 
                            height={100} 
                            alt="Heart" 
                            className="absolute md:top-[58%] md:left-[66%] md:w-[10%] 2xl:w-[13%] 2xl:top-[58%] 2xl:left-[72.4%] transform -translate-x-1/2 -translate-y-[10%] heartbeat-animation"
                        />
                    </div>

                <div className="flex flex-col md:w-[40%] space-y-4 justify-center">
                    <h2 className="2xl:text-3xl w-[65vmin] text-center self-center md:text-xl">
                        Be part of the FurrEver revolution before it&apos;s too late. Sign up with your email to stay updated
                    </h2>

                    <input 
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white text-black placeholder:text-gray py-4 px-4 rounded-sm border border-gray-400"
                    />

                    <button 
                        onClick={handleSubmit}
                        className="text-black bg-[#FFC909] hover:shadow-2xl hover:cursor-pointer w-fit self-center px-10 border-black border-[0.2px] py-3 rounded-md"
                    >
                        Submit
                    </button>

                    {message && <p className="text-white text-center">{message}</p>}
                </div>
            </div>
        </div>
    );
}
