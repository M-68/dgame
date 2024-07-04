import React, { useState, useEffect } from 'react';
import { StructureConfigurations } from '@/constants/Structures/Telescopes';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { useActivePlanet } from '@/context/ActivePlanet';

const StructureModal: React.FC<Props> = ({ structureId, iconUrl, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inventoryItem, setInventoryItem] = useState<InventoryItem | null>(null);

  useEffect(() => {
    if (isOpen) {
      fetch('/api/gameplay/inventory')
        .then((response) => response.json())
        .then((data: InventoryItem[]) => {
          const item = data.find((item) => item.id === structureId);
          setInventoryItem(item || null);
        });
    }
  }, [isOpen, structureId]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const missionId = 8; // Example: hardcoded mission ID, you can replace this with the actual logic to get the mission ID
  const structureConfig = StructureConfigurations[structureId];
  const buttons = structureConfig ? (structureConfig[missionId]?.buttons || structureConfig.default?.buttons) : [];

  return (
    <>
      <div onClick={handleOpen} className="cursor-pointer flex flex-col items-center">
        <img src={iconUrl} alt={name} className="w-16 h-16 mb-2" />
        <p className="text-center text-sm font-medium">{name}</p>
      </div>

      {isOpen && (
        <div className={`fixed inset-0 flex items-end justify-center bg-gray-800 bg-opacity-50 z-50 transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="bg-white w-full max-w-md h-5/6 rounded-t-lg shadow-lg p-4 overflow-y-auto">
            <div className="flex justify-center mb-4">
              <img src={iconUrl} alt={name} className="w-24 h-24" />
            </div>
            <div className="text-center mb-4">
              <h2 className="text-2xl font-semibold">{name}</h2>
              <p className="text-gray-600">{inventoryItem?.description}</p>
            </div>
            <div className="space-y-2">
              {buttons?.map((button) => (
                <button
                  key={button.id}
                  className="flex items-center p-2 w-full bg-gray-100 rounded-md hover:bg-gray-200"
                  title={button.tooltip}
                  onClick={button.action}
                >
                  <img src={button.icon} alt={button.text} className="w-6 h-6 mr-2" />
                  <span>{button.text}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const UserStructures: React.FC = () => {
  const supabase = useSupabaseClient();
  const session = useSession();

  const { activePlanet } = useActivePlanet();

  const [userStructures, setUserStructures] = useState<{ ownedItem: OwnedItem; structure: UserStructure }[]>([]);

  useEffect(() => {
    async function fetchData() {
      if (session && activePlanet) {
        try {
          const { data: ownedItemsData, error: ownedItemsError } = await supabase
            .from('inventory')
            .select('*')
            .eq('owner', session.user.id)
            .eq('anomaly', activePlanet.id);

          if (ownedItemsError) {
            throw ownedItemsError;
          }

          if (ownedItemsData) {
            const itemIds = ownedItemsData.map(item => item.item);

            const response = await fetch('/api/gameplay/inventory');
            if (!response.ok) {
              throw new Error('Failed to fetch item details from the API');
            }
            const itemDetailsData: UserStructure[] = await response.json();

            if (itemDetailsData) {
              const structuresData: { ownedItem: OwnedItem; structure: UserStructure }[] = itemDetailsData
                .filter(itemDetail => itemDetail.ItemCategory === 'Structure' && itemIds.includes(itemDetail.id))
                .map(itemDetail => {
                  const ownedItem = ownedItemsData.find(ownedItem => ownedItem.item === itemDetail.id);
                  const structure: UserStructure = {
                    id: itemDetail.id,
                    name: itemDetail.name,
                    icon_url: itemDetail.icon_url,
                    description: itemDetail.description,
                    cost: itemDetail.cost,
                    ItemCategory: itemDetail.ItemCategory,
                    parentItem: itemDetail.parentItem,
                    itemLevel: itemDetail.itemLevel,
                    item: 0
                  };
                  return { ownedItem: ownedItem || { id: '', item: '', quantity: 0, sector: '' }, structure };
                });
              setUserStructures(structuresData);
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }

    fetchData();
  }, [session, activePlanet, supabase]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Structures on your planet</h2>
      <div className="grid gap-4 grid-cols-3 md:grid-cols-3">
        {userStructures.map(({ ownedItem, structure }) => (
          <StructureModal
            key={structure.id}
            structureId={structure.id}
            iconUrl={structure.icon_url}
            name={structure.name}
          />
        ))}
      </div>
    </div>
  );
};

export default UserStructures;

interface OwnedItem {
    id: string;
    item: string;
    quantity: number;
    sector: string;
    anomaly: number;
};

interface UserStructure {
    id: number;
    item: number; // Assuming this should be a number
    name: string;
    description: string;
    cost: number;
    icon_url: string;
    ItemCategory: string;
    parentItem: number | null;
    itemLevel: number;
    // Function (what is executed upon click)
};

interface InventoryItem {
    id: number;
    name: string;
    description: string;
    cost: number;
    icon_url: string;
    ItemCategory: string;
    parentItem: number | null;
    itemLevel: number;
    recipe?: { [key: string]: number };
};
  
  interface Props {
    structureId: number;
    iconUrl: string;
    name: string;
};