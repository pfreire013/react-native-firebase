/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import {
  ReactNativeFirebaseModule,
  ReactNativeFirebaseNamespace,
  ReactNativeFirebaseModuleAndStatics,
} from '@react-native-firebase/app-types';

/**
 * Firebase ML Kit package for React Native.
 *
 * #### Example 1
 *
 * Access the firebase export from the `mlkit` package:
 *
 * ```js
 * import { firebase } from '@react-native-firebase/mlkit';
 *
 * // firebase.mlkit().X
 * ```
 *
 * #### Example 2
 *
 * Using the default export from the `mlkit` package:
 *
 * ```js
 * import mlkit from '@react-native-firebase/mlkit';
 *
 * // mlkit().X
 * ```
 *
 * #### Example 3
 *
 * Using the default export from the `app` package:
 *
 * ```js
 * import firebase from '@react-native-firebase/app';
 * import '@react-native-firebase/mlkit';
 *
 * // firebase.mlkit().X
 * ```
 *
 * @firebase mlkit
 */
export namespace Mlkit {
  export interface Statics {}

  /**
   * The Firebase ML Kit service interface.
   *
   * > This module is available for the default app only.
   *
   * #### Example
   *
   * Get the ML Kit service for the default app:
   *
   * ```js
   * const defaultAppMLKit = firebase.mlkit();
   * ```
   */
  export class Module extends ReactNativeFirebaseModule {

  }
}

declare module '@react-native-firebase/mlkit' {
  import { ReactNativeFirebaseNamespace } from '@react-native-firebase/app-types';

  const FirebaseNamespaceExport: {} & ReactNativeFirebaseNamespace;

  /**
   * @example
   * ```js
   * import { firebase } from '@react-native-firebase/mlkit';
   * firebase.mlkit().X(...);
   * ```
   */
  export const firebase = FirebaseNamespaceExport;

  const MlkitDefaultExport: ReactNativeFirebaseModuleAndStatics<
    Mlkit.Module,
    Mlkit.Statics
  >;
  /**
   * @example
   * ```js
   * import mlkit from '@react-native-firebase/mlkit';
   * mlkit().X(...);
   * ```
   */
  export default MlkitDefaultExport;
}

/**
 * Attach namespace to `firebase.` and `FirebaseApp.`.
 */
declare module '@react-native-firebase/app-types' {
  interface ReactNativeFirebaseNamespace {
    /**
     * Mlkit
     */
    mlkit: ReactNativeFirebaseModuleAndStatics<
      Mlkit.Module,
      Mlkit.Statics
    >;
  }

  interface FirebaseApp {
    /**
     * Mlkit
     */
    mlkit(): Mlkit.Module;
  }
}
