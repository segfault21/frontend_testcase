import { MobxStore, observableStore } from '../useMobx'
import catalogApi from "../../api/catalog";
import {Product} from "~/api/catalog/products";

@observableStore
export class CatalogStore extends MobxStore {
    data: Product[]
    loading: boolean
    async initialize() {

    }

    info() {
        return this.data
    }
    setInfo(data: Product[]) {

    }
}
