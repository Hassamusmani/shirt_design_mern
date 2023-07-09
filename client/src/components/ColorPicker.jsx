import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import store from '../store';

const ColorPicker = () => {
    const snap = useSnapshot(store);

    return (
        <div className="absolute left-full ml-3">
            <SketchPicker
                color={snap.color}
                disableAlpha
                onChange={(color) => store.color = color.hex}
            />
        </div>
    )
}

export default ColorPicker