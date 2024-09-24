import { NextRequest, NextResponse } from "next/server";
// import { Mission } from "@/types/Missions";

export interface Mission {
    id: number;
    name: string;
    description?: string;
    rewards?: number[];
    anomaly?: number;
};

const planetInitialisationMissions: Mission[] = [
    {
        id: 100001,
        name: "Initialise Mercury",
        anomaly: 10,
    },
    {
        id: 200001,
        name: "Initialise Venus",
        anomaly: 20,
    },
    {
        id: 300001,
        name: "Initialise Earth",
        anomaly: 69,
    },
    {
        id: 3000011,
        name: "Initialise Moon",
        anomaly: 11,
    },
    {
        id: 400001,
        name: "Initialise Mars",
        anomaly: 40,
    },
    {
        id: 500001,
        name: "Initialise Jupiter",
        anomaly: 50,
    },
    {
        id: 600001,
        name: "Initialise Saturn",
        anomaly: 60,
    },
    {
        id: 700001,
        name: "Initialise Uranus",
        anomaly: 70,
    },
    {
        id: 800001,
        name: "Initialise Neptune",
        anomaly: 80,
    },
];

export async function GET(req: NextRequest) {
    return NextResponse.json(planetInitialisationMissions);
};