import { Link , Router, useNavigate } from "react-router-dom";


function NavBar(){

    let navigate = useNavigate( )

    const clickHandlerHome=()=>{

        navigate(`/`)

    }
    const clickHandlerAllStudents=()=>{

        navigate(`/students-ReactAppSide`)

    }

    return(<div>

            <h1>Nav Bar</h1>
            <nav>
                
                <button onClick={ clickHandlerHome } > Home </button>
                {/* to="/" */}
                <button onClick={ clickHandlerAllStudents } > All Students </button>
                {/* to="/students-ReactAppSide" */}


                <br/>
                <Link to="/" > Home </Link>
                <br/>
                <Link to="/students-ReactAppSide" > All Students </Link>

            </nav>

    </div>)

}
export default NavBar