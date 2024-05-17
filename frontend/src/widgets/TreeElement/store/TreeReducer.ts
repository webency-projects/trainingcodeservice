import {TreeModel} from "../model/TreeModel.ts";
import {createSlice} from "@reduxjs/toolkit";
import {DataTree} from "../lib/data.ts"
interface TreeState {
    TreeNodes: TreeModel[]
}

const initialState: TreeState = {
    TreeNodes: DataTree
}

export const treeSlice = createSlice({
    name: 'TreeData',
    initialState,
    reducers: {
        addElement(state, action) {
            state.TreeNodes.push(action.payload)
        }
    }
})
export default treeSlice.reducer;