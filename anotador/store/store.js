// import { create } from 'zustand';

// const useCarpetasStore = create((set) => ({
//   carpetas: [],
//   searchKeyword: '',
//   setSearchKeyword: (keyword) => set({ searchKeyword: keyword }),
//   fetchCarpetas: async () => {
//     try {
//       const response = await fetch('http://localhost:3001/');
//       if (!response.ok) {
//         throw new Error('Failed to fetch carpetas');
//       }
//       const carpetas = await response.json();
//       set({ carpetas });
//     } catch (error) {
//       console.error('Error fetching carpetas:', error);
//     }
//   },
//   searchCarpetas: async () => {
//     try {
//       const { searchKeyword } = useCarpetasStore.getState();
//       const response = await fetch(
//         `http://localhost:3001/?keyword=${searchKeyword}`
//       );
//       if (!response.ok) {
//         throw new Error('Failed to search carpetas');
//       }
//       const carpetas = await response.json();
//       set({ carpetas });
//     } catch (error) {
//       console.error('Error searching carpetas:', error);
//     }
//   },
// }));

// export default useCarpetasStore;
import { create } from 'zustand';

const useCarpetasStore = create((set) => ({
  carpetas: [],
  searchKeyword: '',
  setSearchKeyword: (keyword) => set({ searchKeyword: keyword }),
  fetchCarpetas: async () => {
    try {
      const response = await fetch('http://localhost:3001/');
      if (!response.ok) {
        throw new Error('Failed to fetch carpetas');
      }
      const carpetas = await response.json();
      set({ carpetas });
    } catch (error) {
      console.error('Error fetching carpetas:', error);
    }
  },
  searchCarpetas: async () => {
    try {
      const { searchKeyword } = useCarpetasStore.getState();
      const response = await fetch(
        `http://localhost:3001/search?keyword=${searchKeyword}`
      );
      if (!response.ok) {
        throw new Error('Failed to search carpetas');
      }
      const carpetas = await response.json();
      set({ carpetas });
    } catch (error) {
      console.error('Error searching carpetas:', error);
    }
  },
  agregarCarpeta: async (nuevaCarpeta) => {
    try {
      const response = await fetch('http://localhost:3001/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevaCarpeta),
      });
      if (!response.ok) {
        throw new Error('Failed to add carpeta');
      }
      // Recargar las carpetas después de agregar una nueva
      useCarpetasStore.getState().fetchCarpetas();
    } catch (error) {
      console.error('Error adding carpeta:', error);
    }
  },
}));

export default useCarpetasStore;
