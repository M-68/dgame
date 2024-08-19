import { useSession } from "@supabase/auth-helpers-react";
import React, { Fragment, useState, useEffect } from "react";
import { Unity, useUnityContext } from 'react-unity-webgl';
import SendPlanetsssDataToFlask from "../../Planets/Data/PlanetDataSend";
import RoverImagePage from "../../Planets/RoverData/RandomImage";

export default function UnityBuildSupabaseMesh ({ planetName }) {
    const session = useSession();

    const { unityProvider, sendMessage, addEventListener, removeEventListener } = useUnityContext({
        // loaderUrl: "/assets/Mars/Mesh/Rocky_Earth-base.Mesh.loader.js",
        // dataUrl: "/assets/Mars/Mesh/Rocky_Earth-base.Mesh.data",
        // frameworkUrl: "/assets/Mars/Mesh/Rocky_Earth-base.Mesh.framework.js",
        // codeUrl: "/assets/Mars/Mesh/Rocky_Earth-base.Mesh.wasm",
        loaderUrl: "/assets/Supabase/Supabase_Base.loader.js",
        dataUrl: "/assets/Supabase/Supabase_Base.data",
        frameworkUrl: "/assets/Supabase/Supabase_Base.framework.js",
        codeUrl: "/assets/Supabase/Supabase_Base.wasm",
    });
 
    // const handlePlanetNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setPlanetName(event.target.value);
    // };

    const handleSendPlanetName = () => {
        sendMessage("5", "UpdatePlanetName", planetName);//session?.user?.id);
    };

    const handleTogglePlanetVisibility = () => {
        sendMessage('Planet', 'TogglePlanetVisibility');
    };

    const handleUpdatePlanetSpeed = () => {
        sendMessage("Planet", "UpdatePlanetTurnSpeed", 75); // set value from supa
    };

    const handleUpdatePlanetStrength = () => {
        sendMessage("Planet", "UpdatePlanetStrength", 3); // Set from supa
    }

    const handleGeneratePlanet = () => {
        sendMessage("Planet", "GeneratePlanet");
    };

    return (
        <Fragment>
            <center><Unity unityProvider={unityProvider} style={{ width: "90%", height: "500px" }}/></center>
            {/* <input
                type="text"
                placeholder="Enter planet name"
                value={planetName}
                // onChange={handlePlanetNameChange}
            /> */}
            <center><button className="btn glass mr-5 mt-1.5" onClick={handleSendPlanetName}>Send Planet Name</button>
            <button className="btn glass mr-5 mt-1.5" onClick={handleUpdatePlanetSpeed}>Increase rotation</button>
            <button className="btn glass mr-5 mt-1.5" onClick={handleUpdatePlanetStrength}>Increase strength</button>
            <button className="btn glass mr-5 mt-1.5" onClick={handleTogglePlanetVisibility}>Toggle Planet Visibility</button>
            <button className="btn glass mr-5 mt-1.5" onClick={handleGeneratePlanet}>Generate planet</button></center>
            <SendPlanetsssDataToFlask />
            {/* <RoverImagePage /> */}
        </Fragment>
    );
}


/* State to read data FROM unity scene
const [receivedPlanetName, setReceivedPlanetName] = useState("");
// useEffect(() => {
//     // Add an event listener to listen for messages from Unity
//     const handleUnityMessage = (message) => {
//         if (message.name === "UnityToReactMessage" && message.data === "PlanetNameUpdated") {
//             // Received planet name from Unity, update the state
//             setReceivedPlanetName(message.value);
//         }
//     };

//     // Register the event listener
//     addEventListener("message", handleUnityMessage);

//     // Cleanup by removing the event listener when the component unmounts
//     return () => {
//         removeEventListener("message", handleUnityMessage);
//     };
// }, []);*/