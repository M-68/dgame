import BuildFirstRover from "@/components/Gameplay/Automations/BuildRover";
import { AutomatonControlPanel, RoverControlPanel } from "@/components/Gameplay/Inventory/Automation";
import { AllStructures, CreateStructure } from "@/components/Gameplay/Inventory/Structure";
import Layout from "@/components/Layout";
import { useActivePlanet } from "@/context/ActivePlanet";

export default function () {
    // const { activePlanet, activeSector } = useActivePlanet();
    const { activePlanet, userSector } = useActivePlanet();
    

    const handleStructureSelected = (structure: any) => {
        console.log('Selected structure: ', structure);
    };

    return (
        <Layout bg={false}>
            {/* <div className="my-4 mb-6 px-3"><AutomatonControlPanel /></div>
            <RoverControlPanel /> */}
            {activePlanet?.content} Hello
            {userSector}
            <AllStructures />
            <BuildFirstRover />
            <CreateStructure onStructureSelected={handleStructureSelected} activeSectorId={0} />
            <p>Whatever I want goes in here, lol</p>
        </Layout>
    );
};