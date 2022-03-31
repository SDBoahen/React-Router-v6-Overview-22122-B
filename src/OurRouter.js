import { BrowserRouter , Routes , Route } from 'react-router-dom';

import NavBar from './NavBar.js';

import SpinnyReactLogo from "./SpinnyReactLogo.js"
import StudentsList from './StudentsList.js';




function OurRouter( { studentsToMap } ){

    return(
        <BrowserRouter>

            < NavBar />

        <Routes>

            < Route path="/" element={ < SpinnyReactLogo /> } />

            < Route path="/students-ReactAppSide" element={ < StudentsList studentsToMap={ studentsToMap } /> } />

            < Route path="/appAlot"  element={ 
                <>
                    < SpinnyReactLogo />
                    < SpinnyReactLogo />
                    < SpinnyReactLogo />
                    < SpinnyReactLogo />
                    < SpinnyReactLogo />
                    < SpinnyReactLogo />
                    < SpinnyReactLogo />
                    < SpinnyReactLogo />
                    < SpinnyReactLogo />
                </>
            }  />  {/* 🛤 */}

            {/* 🛤🛣🛤🛣🛤 */}

        </Routes>

        </BrowserRouter>
    )
}
export default OurRouter