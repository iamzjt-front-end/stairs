type JTReactive = Record<any, any>;

/**
 * 判断val是否是一个空对象
 * @param {JTReactive} val
 * @returns {boolean}
 */
export function useJTRIsEmpty(val: JTReactive) {
	return Object.keys(val).length === 0;
}

// /**
//  * 判断val是否是一个对象
//  * @param val
//  */
// export function useJTRIsObject(val: unknown): val is Record<any, any> {
//   return val !== null && typeof val === "object";
// }
//
// /**
//  * 清空val中的所有属性
//  * @param {JTReactive} val
//  */
// export function useJTRClear(val: JTReactive) {
//   Object.keys(val).forEach(key => {
//     Reflect.deleteProperty(val, key);
//   });
// }
//
// /**
//  * 匹配val中key的类型，并返回对应的值
//  * @param val
//  * @param key
//  */
// function patchKey(val, key) {
//   let res;
//   switch (typeof val[key]) {
//     case "string":
//       res = "";
//       break;
//     case "number":
//       res = 0;
//       break;
//     case "boolean":
//       res = false;
//       break;
//     case "object":
//       res = Array.isArray(val[key]) ? [] : {};
//       break;
//     default:
//       res = null;
//   }
//   return res;
// }
//
// /**
//  * 清空val中的所有属性的值
//  * @param {JTReactive} val
//  */
// export function useJTRClearValue(val: JTReactive) {
//   Object.keys(val).forEach(key => {
//     val[key] = patchKey(val, key);
//   });
// }
//
// /**
//  * 清空val中的指定属性
//  * @param {JTReactive} val
//  * @param {string[]} pick
//  */
// export function useJTRClearPick(val: JTReactive, pick: string[]) {
//   Object.keys(val).forEach(key => {
//     if (pick.includes(key)) {
//       val[key] = patchKey(val, key);
//     }
//   });
// }
//
// /**
//  * 清空val中的所有属性，但是不清空except中指定的属性
//  * @param {JTReactive} val
//  * @param {string[]} except
//  */
// export function useJTRClearExcept(val: JTReactive, except: string[]) {
//   Object.keys(val).forEach(key => {
//     if (!except.includes(key)) {
//       Reflect.deleteProperty(val, key);
//     }
//   });
// }
//
// /**
//  * 从val2中拷贝所有属性到val1中
//  * @param {JTReactive} val1
//  * @param args
//  */
// export function useJTRAssign(val1: JTReactive, ...args) {
//   args.forEach(val2 => {
//     Object.keys(val2).forEach(key => {
//       val1[key] = val2[key];
//     });
//   });
// }
//
// /**
//  * 从val中拷贝一份除了expect中的属性，返回一个新的对象
//  * @param val
//  * @param expect
//  */
// export function useJTRAssignExpect(val: JTReactive, expect: string[]) {
//   const res = {};
//   Object.keys(val).forEach(key => {
//     if (!expect.includes(key)) {
//       res[key] = val[key];
//     }
//   });
//   return res;
// }
//
// /**
//  * 深拷贝val
//  * @param val
//  */
// export function useJTRDeepClone(val: JTReactive) {
//   const clone = Array.isArray(val) ? [] : {};
//
//   if (useJTRIsObject(val)) {
//     for (const key in val) {
//       // TODO
//       // eslint-disable-next-line no-prototype-builtins
//       if (val.hasOwnProperty(key)) {
//         //判断ojb子元素是否为对象 -> 递归
//         if (useJTRIsObject(val[key])) {
//           clone[key] = useJTRDeepClone(val[key]);
//         } else {
//           clone[key] = val[key];
//         }
//       }
//     }
//   }
//   return clone;
// }
//
// /**
//  * 深拷贝val，但是不拷贝except中指定的属性
//  * @param val
//  * @param expect
//  * @returns {JTReactive}
//  */
// export function useJTRDeepCloneExpect(val: JTReactive, expect: string[]) {
//   const res = {};
//   Object.keys(val).forEach(key => {
//     if (!expect.includes(key)) {
//       res[key] = val[key];
//     }
//   });
//   return res;
// }
//
// /**
//  * 仅从val2中拷贝val1中已有的属性且存在值的到val1中
//  * @param {JTReactive} val1
//  * @param args
//  */
// export function useJTRAssignUnion(val1: JTReactive, ...args) {
//   args.forEach(val2 => {
//     Object.keys(val1).forEach(key => {
//       if (val2[key]) {
//         val1[key] = val2[key];
//       }
//     });
//   });
// }
//
// /**
//  * 从val2中拷贝val1中没有的属性到val1中
//  * @param {JTReactive} val1
//  * @param args
//  */
// export function useJTRAssignUnCover(val1: JTReactive, ...args) {
//   args.forEach(val2 => {
//     Object.keys(val2).forEach(key => {
//       if (!val1[key]) {
//         val1[key] = val2[key];
//       }
//     });
//   });
// }
//
// /**
//  * 从val2中拷贝指定的属性到val1中
//  * @param {JTReactive} val1
//  * @param {JTReactive} val2
//  * @param {string[]} arr
//  */
// export function useJTRPick(val1: JTReactive, val2: JTReactive, arr: string[]) {
//   arr.forEach(key => {
//     val1[key] = val2[key];
//   });
// }
