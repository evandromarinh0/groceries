import AsyncStorage from "@react-native-async-storage/async-storage";

const storageKey = "@comprar:items";

export interface ItemStorage {
  id:string;
  description: string;
  status: string;
}

async function get(): Promise<ItemStorage[]>{
  try {
    const storage = await AsyncStorage.getItem(storageKey);

    return storage ? JSON.parse(storage) : [];
  } catch (e) {
    throw new Error("GET_ITEMS: " + e);
  }
}

async function getByStatus(status: string): Promise<ItemStorage[]>{
  const items = await get();
  return items.filter(item => item.status === status);
}

async function toggleStatus(id: string): Promise<ItemStorage[]>{
  const items = await get();
  const updatedItems = items.map(item => item.id === id
    ? {
        ...item,
        status: item.status === "pending" ? "done" : "pending"
      } 
    : item
  );

  save(updatedItems);
  return updatedItems;
}

async function save(items: ItemStorage[]): Promise<void>{
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(items))
  } catch (e) {
    throw new Error("ITEMS_SAVE: " + e);
  }
}

async function add(newItem: ItemStorage): Promise<ItemStorage[]>{
  const items = await get();
  const updatedItems = [...items, newItem];
  await save(updatedItems);

  return updatedItems;
}

async function remove(id: string): Promise<void>{
  const items = await get();
  const updatedItems = items.filter(item => item.id !== id)
  await save(updatedItems);
}

async function clear(): Promise<void>{
  try {
    await AsyncStorage.removeItem(storageKey);
  } catch (e) {
    throw new Error("ITEMS_CLEAR: " + e)
  }
}

export const itemsStorage = {
  get,
  getByStatus,
  add,
  remove,
  clear,
  toggleStatus
}