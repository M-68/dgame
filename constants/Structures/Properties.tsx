import React from "react";
import { MiningScene } from "@/app/components/(structures)/Mining/MiningPanels";
import { AutomatonUpgrader } from "@/app/components/(vehicles)/(automatons)/ActiveAutomaton";
import { MineralDepositsNoAction } from "@/app/components/(structures)/Mining/AvailableDeposits";
import AllAutomatonsOnActivePlanet from "@/app/components/(vehicles)/(automatons)/AllAutomatons";
import { StarterTelescope } from "@/app/components/(structures)/Telescopes/Transiting";
import { StarterLidar } from "@/app/components/(structures)/Lidar/Clouds";
import ClassificationViewer from "@/app/components/(create)/(classifications)/YourClassifications";

interface IndividualStructureProps {
    name?: string;
    title?: string;
    labels: { text: string; variant: "default" | "secondary" | "destructive"; }[];
    imageSrc: string;
    actions?: {
      icon: React.ReactNode;
      text: string;
    }[];
    buttons: {
      icon: React.ReactNode;
      text: string;
      dynamicComponent?: React.ReactNode;
      sizePercentage?: number;
      showInNoModal?: boolean;
    }[];
    onActionClick?: (action: string) => void;
    onClose?: () => void;
};

type StructureConfig = {
    [key: string]: Omit<IndividualStructureProps, 'onActionClick' | 'onClose'>;
};

export const StructuresConfig: StructureConfig = {
    3101: {
      name: "Mining",
      title: "Station",
      labels: [
        { text: "Resources", variant: "default" },
        { text: "Automation", variant: "secondary" },
        { text: "Station", variant: "destructive" },
      ],
      imageSrc: "/placeholder.svg",
      actions: [
        { icon: <HeartIcon className="w-6 h-6 text-[#a3be8c]" />, text: "Cuddle" },
        { icon: <RssIcon className="w-6 h-6 text-[#a3be8c]" />, text: "Feed" },
        { icon: <SaladIcon className="w-6 h-6 text-[#a3be8c]" />, text: "Dress" },
        { icon: <MehIcon className="w-6 h-6 text-[#a3be8c]" />, text: "Meme" },
      ],
      buttons: [
        { 
          icon: <ConstructionIcon className="w-6 h-6 text-[#a3be8c]" />, 
          text: "Mining", 
          dynamicComponent: <MiningScene />
        },
        { 
          icon: <PowerIcon className="w-6 h-6 text-[#a3be8c]" />, 
          text: "Upgrade automaton",
          dynamicComponent: <AutomatonUpgrader />,
          sizePercentage: 50
        },
        { 
          icon: <GemIcon className="w-6 h-6 text-[#a3be8c]" />, 
          text: "View available deposits",
          dynamicComponent: <MineralDepositsNoAction />,
          sizePercentage: 50
        },
      ],
    },
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
        { icon: <RssIcon className="w-6 h-6 text-[#5e81ac]" />, text: "Harvest" },
        { icon: <SaladIcon className="w-6 h-6 text-[#5e81ac]" />, text: "Meditate" },
        { icon: <MehIcon className="w-6 h-6 text-[#5e81ac]" />, text: "Observe" },
      ],
      buttons: [
        { 
          icon: <CaravanIcon className="w-6 h-6 text-[#5e81ac]" />, 
          text: "My Automatons", 
          dynamicComponent: <AllAutomatonsOnActivePlanet />,
          sizePercentage: 30,
        },
        { 
          icon: <CogIcon className="w-6 h-6 text-[#5e81ac]" />, 
          text: "Upgrade your (base) automaton",
          dynamicComponent: <AutomatonUpgrader />,
          sizePercentage: 55,
        },
        { 
          icon: <LockIcon className="w-6 h-6 text-[#FFE3BA]" />, 
          text: "Further interactions - locked" 
        },
        {
          icon: <BookCopy className="w-6 h-6 text-[#5e81ac]" />, text: "Tutorial",
          dynamicComponent: <p></p>,
          sizePercentage: 60,
          showInNoModal: false,
        },
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
        {
          icon: <TelescopeIcon className="w-6 h-6 text-[#5e81ac]" />, text: 'Transit events'
        },
        // Copy action/labels
      ],
      buttons: [
        {
          icon: <TelescopeIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Transit events (Starter)",
          dynamicComponent: <StarterTelescope />,
          sizePercentage: 60,
          showInNoModal: true,
        },
        {
          icon: <CloudCogIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Cloud/Weather Data (LOCKED)",
        },
        {
          icon: <BookDashedIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Your planet discoveries",
          dynamicComponent: <ClassificationViewer classificationType="planet" />,
          sizePercentage: 75,
          showInNoModal: true, // This would be false for things like tutorials
        },
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
      buttons: [
        {
          icon: <DogIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Search your animals",
          dynamicComponent: <StarterZoodex />,
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
      imageSrc: '/assets/Items/Lidar.png',
      buttons: [
        {
          icon: <CloudCogIcon className="w-6 h-6 text-[#5e81ac]" />,
          text: "Search your clouds",
          dynamicComponent: <StarterLidar />,
          sizePercentage: 60,
        },
      ]
    }
};

import { BeanIcon, BookCopy, BookDashedIcon, CaravanIcon, CloudCogIcon, CogIcon, ConstructionIcon, DogIcon, GemIcon, HeartIcon, LockIcon, MehIcon, PickaxeIcon, PowerIcon, RssIcon, SaladIcon, TelescopeIcon, WebcamIcon } from "lucide-react";
import { StarterZoodex } from "@/app/components/(structures)/Zoodex/ClassifyOthersAnimals";
