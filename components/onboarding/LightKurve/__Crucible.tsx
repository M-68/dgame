import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import LightkurveQuiz from "./_Quiz1";
import { UserProfileEditBlock } from "../../Posts/Config/UserBlocks";
import Card from "../../Card";

const CrucibleComponent: React.FC = () => {
    const supabase = useSupabaseClient();
    const session = useSession();

    const [isBlockVisible, setIsBlockVisible] = useState(false);

    const toggleBlockVisibility = () => {
        setIsBlockVisible((prev) => !prev);
    };

    // Potentially add a blocker that if the user doesn't have a username set, render only the <UserProfileEditBlock /> component

    return (
        <div className="max-w-3xl mx-auto py-8 px-4 font-sans">
            <div className="container mx-auto py-8">
                <h2 className="text-3xl font-bold mb-4 text-primary bg-gradient-to-r from-gold-500 to-yellow-500"> Unearth Hidden Celestial Bodies </h2>
                <p className="text-gray-700">
                    As a Star Sailor, you don't merely play—you explore, analyse, and collaborate. <br /> <br />
                    Your primary task is to identify potential planets, elusive bodies that orbit stars beyond our solar system. <br /> <br />
                    Harness the power of light analysis to uncover these hidden celestial gems.
                </p><br />
            </div>
            <div className="mb-10">
                <img src="/assets/Onboarding/Missions/Crucible/CrucibleImage1.png" alt="Transit Method" className="w-full" />
            </div>
            <div className="container mx-auto py-8">
                <h2 className="text-3xl font-bold mb-4 text-primary bg-gradient-to-r from-gold-500 to-yellow-500"> Methodology: The Transit Method </h2>
                <p className="text-gray-700">
                    Envision a distant, luminous object. A momentary flicker, akin to a bird passing before a streetlight, is the phenomenon you're hunting. Except, in our case, it's planets we're spotting. <br />
                </p>
                <div className="mt-2"><Card noPadding={false}>
                    🌏 Size Matters: The amount of dimming hints at the planet. A big planet, like Jupiter, will cause a bigger drop in light, while a smaller planet, like Earth, will create a more subtle dip. <br /> <br />
                    <div className="mb-10">
                        <img src="/assets/Onboarding/Missions/Crucible/CrucibleGif.webp" alt="Transit Method" className="w-full" />
                    </div>
                </Card></div>
                <br />
            </div><br />
            <div className="container mx-auto py-8">
                <h2 className="text-3xl font-bold mb-4 text-primary bg-gradient-to-r from-gold-500 to-yellow-500"> Tools for Celestial Analysis: Understanding Light Curves </h2>
                <p className="text-gray-700">
                    Light curves graphically represent a star's luminosity over time. The slight dimming of a star's brightness indicates the presence of a planet. Learn to read these clues with precision. <br />
                </p>
                <div className="mt-2"><Card noPadding={false}>
                    <h2 className="text-lg font-bold mb-4 text-primary bg-gradient-to-r from-gold-500 to-yellow-500"> The Imperative of Human Insight </h2>
                    🤖 Amid the era of Artificial Intelligence, your instinct and discerning eye serve as invaluable assets. Meld human intuition with algorithmic accuracy to ensure no celestial body remains hidden! <br /> <br />
                    <div className="mb-10">
                        <img src="/assets/Onboarding/Missions/Crucible/CrucibleImage2.png" alt="Transit Method" className="w-full" />
                    </div><br />
                </Card></div>
                <h2 className="text-lg font-bold mb-4 text-primary bg-gradient-to-r from-gold-500 to-yellow-500"> Collaboration & Community </h2>
                    1. Team Discourse: Share insights and theorise with fellow Star Sailors. <br />
                    2. Community Voting: Participate in the democratic process to validate or refute discoveries. <br />
                <br />

                <blockquote className="italic bg-beige p-4 border-l-4 border-accent">
                    <p className="text-gray-700">At Star Sailors, everyone has the power to make a difference. That's why our training program is designed to be accessible and engaging for everyone, regardless of their technical background.</p>
                </blockquote>
            </div><br />
            <div className="mb-8 mt-5">
            <h3
                className="text-xl font-bold mb-4 text-primary cursor-pointer"
                onClick={toggleBlockVisibility}
            >
                {isBlockVisible ? (
                    <span className="ml-2">&#9660;</span> // Downward arrow
                ) : (
                    <span className="ml-2">&#9658;</span> // Rightward arrow
                )} Edit your profile
            </h3>
            {isBlockVisible && <UserProfileEditBlock />}
            </div>
        </div>
    )
}

export default CrucibleComponent;