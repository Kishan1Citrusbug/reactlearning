import { configureStore,createSt} from "@reduxjs/toolkit";
import { rootreducer } from "../recuders/rootreducer";

export const store = configureStore({
reducer:{fetchreducer:rootreducer}
})
