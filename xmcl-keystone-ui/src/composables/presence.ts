// import { PresenceServiceKey } from '@xmcl/runtime-api'
import { Ref } from 'vue'
// import { useService } from './service'

//disable discord presence 
export function usePresence(activity: Ref<string> | string) {
}
// export function usePresence(activity: Ref<string> | string) {
//   const { setActivity } = useService(PresenceServiceKey)
//   // let setActivity = (activity: string) => {}; 
//   onMounted(() => {
//     const a = isRef(activity) ? activity.value : activity
//     if (a) {
//       setActivity(a)
//     }
//   })
//   addEventListener('focus', () => {
//     const a = isRef(activity) ? activity.value : activity
//     if (a) {
//       setActivity(a)
//     }
//   })
//   if (isRef(activity)) {
//     watch(activity, (a) => {
//       if (a) {
//         setActivity(a)
//       }
//     })
//   }
// }
