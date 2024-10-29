

const Student = (props) => {
  return (
    <div className="student">
        <table>
            <tbody>
            <tr><th>Name</th>
            <td>{props.name}</td>
            </tr>
            <tr><th>Age</th>
            <td>{props.age}</td>
            </tr>
            <tr><th>isMarried</th>
            <td>{props.ismarried?"yes" : "no"}</td>
            </tr>
            </tbody>
        </table>

        <p>{props.children}</p>
      
    </div>
  )
}

export default Student

Student.default
