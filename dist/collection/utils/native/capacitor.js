/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { win } from "../../utils/browser";
export const getCapacitor = () => {
    if (win !== undefined) {
        return win.Capacitor;
    }
    return undefined;
};
