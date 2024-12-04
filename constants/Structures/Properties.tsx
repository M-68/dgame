"use client";

import React from "react";
import AutomatonUpgrade from "@/components/Structures/Config/AutomatonUpgradeBox";
import AllAutomatonsOnActivePlanet from "@/components/Structures/Auto/AllAutomatons";
import { StarterTelescope } from "@/components/Projects/Telescopes/Transiting";
import { StarterLidar } from "@/components/Projects/Lidar/Clouds";
import { BarChart, BeanIcon, BookAIcon, BookAudioIcon, BookCopy, BookDashedIcon, BriefcaseIcon, CameraIcon, CameraOffIcon, CaravanIcon, CloudCogIcon, CogIcon, ConstructionIcon, DogIcon, DotSquare, EarthIcon, GemIcon, GlassesIcon, HeartIcon, LockIcon, LucideSalad, MehIcon, MicroscopeIcon, MoonStarIcon, PenBox, PhoneIcon, PickaxeIcon, PowerIcon, RssIcon, SaladIcon, StarIcon, SunIcon, SwitchCamera, TelescopeIcon, TestTubeDiagonal, TestTubeDiagonalIcon, TreePalmIcon, WebcamIcon } from "lucide-react";
import StructureRepair from "@/components/Structures/Config/RepairStructure";
import { RoverPhoto } from "@/components/Projects/Auto/Mars-Photos";
import { AnomalyRoverPhoto } from "@/components/Structures/Auto/AutomatonClassificationShell";
import ModernTechTree from "@/components/Structures/Research/TechTree";
import MiningScene from "@/app/scenes/mining/page";
import { DataSourcesModal } from "@/components/Data/unlockNewDataSources";
import { TelescopeSunspotDetector } from "@/components/Projects/Telescopes/Sunspots";
import { TelescopeDiskDetector } from "@/components/Projects/Telescopes/DiskDetector";
import LaunchpadStructure from "@/components/Structures/Launchpad/Dashboard";
import CameraComponent from "@/components/Projects/Zoodex/Upload/Camera";
import { PlanktonPortal, PlanktonPortalTutorial } from "@/components/Projects/Zoodex/planktonPortal";
import SwitchPlanet from "@/components/(scenes)/travel/SolarSystem";
import { ExoplanetTransitHunter } from "@/components/Projects/Telescopes/ExoplanetC23";
import { AiForMarsProject } from "@/components/Projects/Auto/AI4Mars";
import { DailyMinorPlanet } from "@/components/Projects/Telescopes/DailyMinorPlanet";
import { PlanetFourProject } from "@/components/Projects/Satellite/PlanetFour";
import { LidarJVHSatellite } from "@/components/Projects/Lidar/JovianVortexHunter";
import AllClassifications from "@/content/Starnet/YourClassifications";
import { BurrowingOwl } from "@/components/Projects/Zoodex/burrowingOwls";
import TutorialPopup from "@/content/Dialogue/helpButton";
import FreeformUploadData from "@/components/Projects/(classifications)/FreeForm";

interface IndividualStructureProps {
    name?: string;
    title?: string;
    labels: { text: string; variant: "default" | "secondary" | "destructive"; }[];
    imageSrc: string;
    actions?: {
      icon: React.ReactNode;
      text: string;
      dynamicComponent?: React.ReactNode;
      sizePercentage?: number;
    }[];
    buttons: {
      icon: React.ReactNode;
      text: string;
      dynamicComponent?: React.ReactNode;
      sizePercentage?: number;
      showInNoModal?: boolean;
    }[];
    modals?: {
      icon: React.ReactNode;
      text: string;
      component: React.ReactNode
    }[];
    onActionClick?: (action: string) => void;
    onClose?: () => void;
    structureId?: number;
};

type StructureConfig = {
    [key: string]: Omit<IndividualStructureProps, 'onActionClick' | 'onClose'>;
};

export const StructuresConfig: StructureConfig = {
    3102: {
      name: "Automaton station",
      title: "Roovers",
      labels: [
        { text: "Ethereal", variant: "default" },
        { text: "Magical", variant: "secondary" },
        { text: "Dense", variant: "destructive" },
      ],
      imageSrc: "/forest.svg",
      actions: [
        { icon: <PickaxeIcon className="w-6 h-6 text-[#5e81ac]" />, text: "Explore" },
        { icon: <CogIcon className="w-6 h-6 text-[#5e81ac]" />, text: "Repair", dynamicComponent: <StructureRepair inventoryId={3102} /> },
        {
          icon: <MicroscopeIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Research",
          dynamicComponent: <DataSourcesModal structureId="3102" structure="Rover" />,
        },
        
      ],
      buttons: [
        { 
          icon: <CaravanIcon className="w-6 h-6 text-[#5e81ac]" />, 
          text: "My Automatons", 
          dynamicComponent: <AllAutomatonsOnActivePlanet />,
          sizePercentage: 30,
        },
        // { 
        //   icon: <CogIcon className="w-6 h-6 text-[#5e81ac]" />, 
        //   text: "Upgrade your (base) automaton",
        //   dynamicComponent: <AutomatonUpgrade />,
        //   sizePercentage: 55,
        // },
        {
          icon: <PickaxeIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: `Go mining`,
          dynamicComponent: <MiningScene />,
          sizePercentage: 73,
        },
        {
          icon: <SwitchCamera className="w-6 h-6 text-[#5e81ac]" />,
          text: 'View rover photos',
          dynamicComponent: <AnomalyRoverPhoto />,
          sizePercentage: 73,
        },
        {
          icon: <CameraOffIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: 'Map the surface of planets',
          dynamicComponent: <AiForMarsProject />,
          sizePercentage: 50,
        },
        // {
        //   icon: <BookCopy className="w-6 h-6 text-[#5e81ac]" />, text: `Tutorial`,
        //   dynamicComponent: <p></p>,
        //   sizePercentage: 60,
        //   showInNoModal: false,
        // },
      ],
    }, 
    3103: {
      name: "Transiting Telescope",
      labels: [
        {
          text: "Transit events", variant: "default",
        },
        {
          text: 'Meteorology data', variant: 'default', // Combine styling/content with actions
        },
        {
          text: 'Orbital & Surface', variant: 'secondary', // structure types
        },
      ],
      imageSrc: '/assets/Items/TransitingTelescope.png',
      actions: [
        // {
        //   icon: <DotSquare className="w-6 h-6 text-[#5e81ac]" />
        //   , text: 'Durability/Repair'
        //   , dynamicComponent: <StructureRepair inventoryId={3103} />,
        //   sizePercentage: 40, 
        // },
        {
          icon: <MicroscopeIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Research",
          dynamicComponent: <DataSourcesModal structureId="3103" structure="Telescope" />,
        },
        {
          icon: <BarChart className="w-6 h-6 text-[#5e81ac]" />,
          text: "View all discoveries",
          dynamicComponent: <AllClassifications initialType="planet" />

        },
        {
          icon: <CameraIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Upload content",
          dynamicComponent: <FreeformUploadData />,
        }
        // Copy action/labels
      ],
      buttons: [
        {
          icon: <TelescopeIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Discover planets", // Transit events, microlensing, etc
          dynamicComponent: <StarterTelescope />,
          sizePercentage: 60,
          showInNoModal: true,
        },
        // {
        //   icon: <EarthIcon className="w-6 h-6 text-[#5e81ac]" />,
        //   text: "Find new worlds",
        //   dynamicComponent: <ExoplanetTransitHunter />,
        //   sizePercentage: 80,
        // },
        {
          icon: <SunIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Sunspot data",
          dynamicComponent: <TelescopeSunspotDetector />,
          sizePercentage: 60,
        },
        {
          icon: <TestTubeDiagonalIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Find early solar systems",
          dynamicComponent: <TelescopeDiskDetector />,
          sizePercentage: 70,
        },
        {
          icon: <MoonStarIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Discover asteroids",
          dynamicComponent: <DailyMinorPlanet />,
          sizePercentage: 50,
        },
        // {
        //   icon: <RssIcon className="w-6 h-6 text-[#5e81ac]" />,
        //   text: "Planet Four Test",
        //   dynamicComponent: <PlanetFourProject />,
        //   sizePercentage: 50,
        // },
        // {
        //   icon: <StarIcon className="w-6 h-6 text-[#5e81ac]" />,
        //   text: "Comets & Asteroids",
        // },
      ],
    },
    3104: {
      name: "Zoodex",
      title: "Animal Observations",
      labels: [
        {
          text: "Earth-based animals", variant: "default",
        },
      ],
      imageSrc: '/assets/Items/Zoodex.png',
      actions: [
        // {
        //   icon: <DotSquare className="w-6 h-6 text-[#5e81ac]" />
        //   , text: 'Durability/Repair'
        //   , dynamicComponent: <StructureRepair inventoryId={3104} />,
        //   sizePercentage: 40,
        // },
        {
          icon: <MicroscopeIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Research",
          dynamicComponent: <DataSourcesModal structureId="3104" structure="Zoodex" />,
        },
        {
          icon: <CameraIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Capture animals",
          dynamicComponent: <CameraComponent />,
          sizePercentage: 60,
        },
      ],
      buttons: [
        // {
        //   icon: <TreePalmIcon className="w-6 h-6 text-[#5e81ac]" />,
        //   text: "Greenhouse",
        // },
        // {
        //   icon: <PhoneIcon className="w-6 h-6 text-[#5e81ac]" />,
        //   text: "Upload media"
        // }
        {
          icon: <BriefcaseIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Burrowing Owls",
          dynamicComponent: <BurrowingOwl />,
          sizePercentage: 60,
        },
      ],
    },
    3105: {
      name: "LIDAR Detector",
      labels: [
        {
          text: "Clouds", variant: "default",
        },
        {
          text: "Sunspots", variant: "default",
        },
      ],
      actions: [
        // {
        //   icon: <DotSquare className="w-6 h-6 text-[#5e81ac]" />
        //   , text: 'Durability/Repair'
        //   , dynamicComponent: <StructureRepair inventoryId={3104} />,
        //   sizePercentage: 40,
        // },
        {
          icon: <MicroscopeIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Research",
          dynamicComponent: <DataSourcesModal structureId="3105" structure="LIDAR" />,
        },
        // {
        //   icon: <BookAudioIcon className="w-6 h-6 text-[#5e81ac]" />,
        //   text: "My discoveries", 
        //   dynamicComponent: <ClassificationViewer classificationType="lidar" />,
        // },
      ],
      imageSrc: '/assets/Items/Lidar.png',
      buttons: [
        {
          icon: <CloudCogIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Search your clouds",
          dynamicComponent: <StarterLidar />,
          sizePercentage: 60,
        },
        {
          icon: <GlassesIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Map gaseous planets",
          dynamicComponent: <LidarJVHSatellite />,
          sizePercentage: 60,
        },
      ],
    },
    3106: {
      name: "Research station",
      labels: [
        {
          text: "Technology", variant: "destructive",
        },
        {
          text: "Alien artifacts", variant: "secondary",
        },
      ],
      imageSrc: '/assets/Items/Research.png',
      buttons: [
        { 
          icon: <CaravanIcon className="w-6 h-6 text-[#5e81ac]" />, 
          text: "Research technology", 
          dynamicComponent: <ModernTechTree />,
          sizePercentage: 60,
        },
      ],
      modals: [
        {
          icon: <TestTubeDiagonalIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Research technology",
          component: <ModernTechTree />,
        },
        // {
        //   icon: <BookAIcon className="w-6 h-6 text-[#5e81ac]" />,
        //   text: "Decrypt manuscripts",
        // },
      ],
    },
    3107: {
      name: "Launchpad",
      title: "Rocket Launchpad",
      labels: [
        {
          text: "Manned Vehicles",
          variant: "default",
        },
      ],
      imageSrc: '/assets/Items/Launchpad.jpg',
      actions: [
        {
          icon: <CogIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Repair",
          dynamicComponent: <StructureRepair inventoryId={3107} />,
        },
      ],
      buttons: [
        // {
        //   icon: <CaravanIcon className="w-6 h-6 text-[#5e81ac]" />,
        //   text: "Build a rocket",
        // },
        {
          icon: <PowerIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Launch a rocket (travel)",
          // dynamicComponent: <LaunchpadStructure />,
          dynamicComponent: <SwitchPlanet />,
          sizePercentage: 60,

        },
      ]
    },
    10600: {
      name: "Helicopter (test)",
      labels: [],
      imageSrc: '/assets/Items/Helicopter.png',
      buttons: [
        {
          icon: <TestTubeDiagonal className="w-6 h-6 text-[#5e81ac]" />,
          text: "Test",
        },
      ],
    },
};