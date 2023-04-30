import React, { useEffect, useState } from "react";

import { GameplayLayout } from "../../components/Core/Layout";

import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Col, Container, Row, Form } from "react-bootstrap";
// import { UserContext } from "../../context/UserContext";
// import { Database } from "../../utils/database.types";

import Login from "../login";
import PlanetGalleryCard from "../../components/Gameplay/Planets/PlanetGalleryCard";
import Link from "next/link";
import PlanetFormCard from "./createPlanet";
import { UserContext } from "../../context/UserContext";

// type Planets = Database['public']['Tables']['planets']['Row'];

export default function PlanetGalleryIndex () {
    const supabase = useSupabaseClient();
    const session = useSession();
    const [planets, setPlanets] = useState([]);
    const [lightKurves, setLightKurves] = useState([]);
    
    useEffect(() => {
        getPlanets();
    }, [session]);

    async function deployImages() {
        const directoryPath = './output';
        const bucketName = 'planets';
      
        const files = await fetch(`${directoryPath}/*`).then(res => res.json());
      
        for (const file of files) {
          const filePath = `${directoryPath}/${file.name}`;
      
          const fileData = await fetch(filePath).then(res => res.blob());
          const fileName = file.name;
          const fileType = file.type;
      
          const { data, error } = await supabase.storage.from(bucketName).upload(fileName, fileData, {
            contentType: fileType
          });
      
          if (error) {
            console.log(`Error uploading file ${fileName}: ${error.message}`);
          } else {
            console.log(`Successfully uploaded file ${fileName}`);
          }
        }
      }

    const getPlanets = async () => {
        try {
            const { data, error } = await supabase
                .from('planetsss')
                .select("*")
                .order('created_at', { ascending: false })
                .limit(20)
                .lt("id", 52); // Temporarily taking out planets that are incomplete
            if (data != null) { setPlanets(data); };
            if (error) throw error;
        } catch (error: any) { alert(error.message); };
        try {
            const { data, error } = await supabase
                .from('lightkurves')
                .select("*")
                .order('created_at', { ascending: false })
                .limit(20)
            if (data != null) { setLightKurves(data); };
            if (error) throw error;
        } catch (error: any) { alert(error.message); };
    };

    if (!session) { return <Login />; };

    return (
        <GameplayLayout><center>
            {/*<button onClick={deployImages}><h1>Deploy images</h1></button>*/}
            <div className="px-10 col-span-2">
                <div className="width-full">{planets.map(planet => ( // TODO: Update to be carousel of cards
                <PlanetGalleryCard key = { planet.id } {...planet}></PlanetGalleryCard>
                ))}{/*{lightKurves.map(planet => (
            <PlanetGalleryCard key = { planet.id } {...planet}></PlanetGalleryCard>
                ))}*/}</div>
                <div className="mx-10">
                    {/*<img src="http://127.0.0.1:5000/get_image" />*/}
                    {/*<PlanetFormCard onCreate={getPlanets} />*/}
                </div> {/* Maybe show user's planets or metadata here... */}
            </div></center>
        </GameplayLayout>
    )
}