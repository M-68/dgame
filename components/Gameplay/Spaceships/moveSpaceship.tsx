import React, { useState, useEffect } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

interface Spaceship {
  spaceship_id: number;
  spaceships: {
    name: string;
  };
}

interface ClassifiedPlanet {
  id: number;
  content: string;
}

interface MoveShipToPlanetProps {
  onClose: () => void;
}

const MoveShipToPlanet: React.FC<MoveShipToPlanetProps> = ({ onClose }) => {
  const supabase = useSupabaseClient();
  const session = useSession();
  
  // Specify the types for the selectedSpaceship and selectedPlanet states
  const [selectedSpaceship, setSelectedSpaceship] = useState<number | null>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<number | null>(null);
  
  // Specify the types for userSpaceships and userClassifiedPlanets
  const [userSpaceships, setUserSpaceships] = useState<Spaceship[]>([]);
  const [userClassifiedPlanets, setUserClassifiedPlanets] = useState<ClassifiedPlanet[]>([]);

  useEffect(() => {
    // Fetch user's spaceships from the database
    const fetchUserSpaceships = async () => {
      if (session?.user) {
        try {
          const { data, error } = await supabase
            .from("inventorySPACESHIPS")
            .select("spaceship_id, spaceships(*)")
            .eq("owner", session.user.id);
    
          if (error) {
            console.error("Error fetching user's spaceships:", error);
          } else {
            // Ensure data is an array and specify the correct type
            // Assuming data is an array of objects with spaceship_id and spaceships properties
            const userSpaceshipsData: Spaceship[] = data.map((item: any) => ({
              spaceship_id: item.spaceship_id,
              spaceships: {
                name: item.spaceships.name,
              },
            }));
    
            setUserSpaceships(userSpaceshipsData);
          }
        } catch (error) {
          console.error("Error fetching user's spaceships:", error);
        }
      }
    };

    // Fetch user's classified planets from the database
    const fetchUserClassifiedPlanets = async () => {
      if (session?.user) {
        try {
          const { data, error } = await supabase
            .from("planetsss")
            .select("id, content")
            .eq("owner", session.user.id);

          if (error) {
            console.error("Error fetching user's classified planets:", error);
          } else {
            // Ensure data is an array and specify the correct type
            setUserClassifiedPlanets(data || []);
          }
        } catch (error) {
          console.error("Error fetching user's classified planets:", error);
        }
      }
    };

    fetchUserSpaceships();
    fetchUserClassifiedPlanets();
  }, [session, supabase]);

  const moveSpaceshipToPlanet = () => {
    if (selectedSpaceship !== null && selectedPlanet !== null) {
      // Database update logic here
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-md w-96">
        <h2 className="text-lg font-semibold mb-4">Move Spaceship to Planet</h2>
        <select
          className="w-full border p-2 mb-4"
          value={selectedSpaceship || ""}
          onChange={(e) => setSelectedSpaceship(Number(e.target.value))}
        >
          <option value="">Select Spaceship</option>
          {userSpaceships.map((spaceship) => (
            <option key={spaceship.spaceship_id} value={spaceship.spaceship_id}>
              {/* {spaceship.name} */}
              Spaceship name
            </option>
          ))}
        </select>
        <select
          className="w-full border p-2 mb-4"
          value={selectedPlanet || ""}
          onChange={(e) => setSelectedPlanet(Number(e.target.value))}
        >
          <option value="">Select Planet</option>
          {userClassifiedPlanets.map((planet) => (
            <option key={planet.id} value={planet.id}>
              {planet.content}
            </option>
          ))}
        </select>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={moveSpaceshipToPlanet}
          >
            Move Spaceship
          </button>
          <button
            className="ml-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoveShipToPlanet;