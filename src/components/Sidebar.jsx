import React from 'react'
import { ClockCounterClockwise, Gear, List, Plus, Question } from 'phosphor-react'

const Sidebar = () => {

    return (
        <aside className='sidebar-styled'>
            <div>
                <List weight='bold' size={20} />
                <button><Plus weight='bold' size={20} />New chat</button>
            </div>
            <div className='sidebar-bottom'>
                <div><Question weight='bold' size={20} />Help</div>
                <div><ClockCounterClockwise weight='bold' size={20} />Activity</div>
                <div><Gear weight='bold' size={20} />Settings</div>
                <p></p>
            </div>
        </aside>
    )
}

export default Sidebar