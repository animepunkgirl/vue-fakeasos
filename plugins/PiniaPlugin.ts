import {PiniaPluginContext} from "pinia";
import LocalStorage from "~/services/local-storage/local-storage";

const PiniaPlugin = ({ store }: PiniaPluginContext) => {
  if(store.$id === 'user') {
    store.$onAction((props) => {
      if(props.name === "authorize") {
        props.after(() => {
          LocalStorage.saveToken(store.user.id, store.token)
        })
      }
    })
  }
}

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(PiniaPlugin)
})