import Link from "next/link";
import React from "react";

export default function PublicLanding() {

    return (
        <div className="mt-2">
            Welcome to Star Sailors! Please log in!
            <Link href="/auth"><button className="btn">
                Go to Auth Page
            </button></Link>
        </div>
    );
};