import { onMouseEnter, onMouseLeave } from './button_functions'
export default function button({ children, color, clicked, duration }) {
    return (
        <>
            <div className='reusable-button_content-wrapper' >
                <div onMouseEnter={(event) => onMouseEnter(event, clicked)} onMouseLeave={(event) => onMouseLeave(event, clicked)}
                    className='reusable-button_wrapper' >
                    <div className='reusable-button_light-veil' />
                    <div className='reusable-button_dark-veil' />

                    <div className='reusable-button_container' >
                        <div className='reusable-button_dark-content' >
                            {children}
                        </div>
                        <div className='reusable-button_light-content' >
                            {children}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
            .reusable-button_content-wrapper { width: 100%; height: 100%; overflow: hidden;  }
            .reusable-button_wrapper { width: 100%; height: 200%; opacity: 1; transition: transform ${duration ? duration : 0.3}s; cursor: pointer; position: relative;  }
            .reusable-button_light-veil { width: 100%; height: 50%; background: ${Array.isArray(color) ? color[0] : 'transparent'}; position: absolute; top: 0; pointer-events: none;  }
            .reusable-button_dark-veil { width: 100%; height: 50%; background: ${Array.isArray(color) ? color[1] : color}; border-radius: 50%; transition: border-radius ${duration ? duration : 0.3}s, top ${duration ? duration : 0.3}s; position: absolute; top: 50%; pointer-events: none;  }
            .reusable-button_container { width: 100%; height: 100%; position: relative; z-index: 1; transition: transform ${duration ? duration : 0.3}s;  }
            .reusable-button_dark-content { width: 100%; height: 50%; display: flex; align-items: center; justify-content: center; color: ${Array.isArray(color) ? color[1] : color};  transition : opacity ${duration ? duration * 2 : 0.6}s; }
            .reusable-button_light-content { width: 100%; height: 50%; display: flex; align-items: center; justify-content: center; color: ${Array.isArray(color) ? color[0] : 'white'}; transition : opacity ${duration ? duration * 2 : 0.6}s;  }
            
            `}</style>
        </>
    )
}
