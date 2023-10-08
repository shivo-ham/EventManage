import { createNavigationContainerRef } from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();
export function navigate(name: never, params: never): void {
    if (navigationRef.isReady()) {
        /* @ts-ignore */
        navigationRef.navigate(name, params);
    }
}
