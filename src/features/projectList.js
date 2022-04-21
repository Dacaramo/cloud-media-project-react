import { createSlice } from "@reduxjs/toolkit";

export const projectListSlice = createSlice({
    name: "projectList",
    initialState: {
        value: [
            {
                projectName: "Proyecto X",
                totalImages: 800, 
                totalVideos: 5, 
                usedStorage: 1.2,
                maxImages: 1000,
                maxVideos: 100,
                maxStorage: 10
            },
            {
                projectName: "Documental Rocky",
                totalImages: 700, 
                totalVideos: 10, 
                usedStorage: 3.2,
                maxImages: 1000,
                maxVideos: 100,
                maxStorage: 10
            },
            {
                projectName:"Animación Crazy Monkeys",
                totalImages:150, 
                totalVideos:2, 
                usedStorage:0.3,
                maxImages: 500,
                maxVideos: 20,
                maxStorage: 5
            },
            {
                projectName: "Animación Wasteland",
                totalImages: 500, 
                totalVideos: 50, 
                usedStorage: 6.3,
                maxImages: 1000,
                maxVideos: 100,
                maxStorage: 15
            },
            {
                projectName: "Documental Plantas",
                totalImages: 300, 
                totalVideos: 3, 
                usedStorage: 0.7,
                maxImages: 500,
                maxVideos: 50,
                maxStorage: 10
            },
            {
                projectName: "Proyecto Haunted",
                totalImages: 800, 
                totalVideos: 5, 
                usedStorage: 1.2,
                maxImages: 1000,
                maxVideos: 100,
                maxStorage: 10
            },
            {
                projectName: "The Badlands",
                totalImages: 700, 
                totalVideos: 10, 
                usedStorage: 3.2,
                maxImages: 1000,
                maxVideos: 100,
                maxStorage: 10
            },
            {
                projectName: "Eureka Kids",
                totalImages: 150, 
                totalVideos: 2, 
                usedStorage: 0.3,
                maxImages: 500,
                maxVideos: 10,
                maxStorage: 5
            }
        ]
    },
    reducers: {
        clearData: (state, action) => {
            state.value = [];
        },
        addProject: (state, action) => {
            state.value.push(action.payload);
        }
    }
});

export const { clearData, addProject } = projectListSlice.actions;

export default projectListSlice.reducer;