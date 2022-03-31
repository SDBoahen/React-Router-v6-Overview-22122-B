


function StudentsList( { studentsToMap } ){

        console.log( "studentsToMap: " , studentsToMap )  //

    return(<div>

        <h1>StudentsList</h1>
        {

            studentsToMap.map(  ( eachStudent )=>{ 

                return(
                    <div id={ eachStudent.name }>
                        <h3>{ eachStudent.name }</h3>
                        <img src={ eachStudent.pictureUrl } alt={ eachStudent.name } />
                    </div>
                )

             } )

        }

    </div>)

}
export default StudentsList